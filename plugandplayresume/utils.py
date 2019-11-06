import re
import numpy as np
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
import en_core_web_sm
from collections import OrderedDict
from nltk import PorterStemmer, LancasterStemmer

porter = LancasterStemmer()
nlp = en_core_web_sm.load()
stop_words = set(stopwords.words('english'))


def pre_process(text):
    # lowercase
    text = text.lower()

    # remove tags
    text = re.sub("<!--?.*?-->", "", text)

    # remove special characters and digits
    text = re.sub("(\\d|\\W)+", " ", text)

    return text


class TextRank4Keyword():
    """Extract keywords from text"""

    def __init__(self):
        self.d = 0.85  # damping coefficient, usually is .85
        self.min_diff = 1e-5  # convergence threshold
        self.steps = 10  # iteration steps
        self.node_weight = None  # save keywords and its weight

    def set_stopwords(self, stopwords):
        """Set stop words"""
        for word in STOP_WORDS.union(set(stopwords)):
            lexeme = nlp.vocab[word]
            lexeme.is_stop = True

    def sentence_segment(self, doc, candidate_pos, lower):
        """Store those words only in cadidate_pos"""
        sentences = []
        stems = []
        for sent in doc.sents:
            selected_words = []
            selected_stems = []
            for token in sent:
                # Store words only with cadidate POS tag
                # make this a tuple of stem and original word, otherwise it's
                # hideous to be honest.
                if token.pos_ in candidate_pos and token.is_stop is False:
                    if lower is True:
                        stemmed = porter.stem(token.text.lower())
                        selected_stems.append(stemmed)
                        selected_words.append(token.text.lower())
                    else:
                        stemmed = porter.stem(token.text)
                        selected_stems.append(stemmed)
                        selected_words.append(token.text)
            stems.append(selected_stems)
            sentences.append(selected_words)
        return sentences, stems

    def get_vocab(self, sentences):
        """Get all tokens"""
        vocab = OrderedDict()
        i = 0
        for sentence in sentences:
            for word in sentence:
                if word not in vocab:
                    vocab[word] = i
                    i += 1
        return vocab

    def get_token_pairs(self, window_size, sentences):
        """Build token_pairs from windows in sentences"""
        token_pairs = list()
        for sentence in sentences:
            for i, word in enumerate(sentence):
                for j in range(i + 1, i + window_size):
                    if j >= len(sentence):
                        break
                    pair = (word, sentence[j])
                    if pair not in token_pairs:
                        token_pairs.append(pair)
        return token_pairs

    def symmetrize(self, a):
        return a + a.T - np.diag(a.diagonal())

    def get_matrix(self, vocab, token_pairs):
        """Get normalized matrix"""
        # Build matrix
        vocab_size = len(vocab)
        g = np.zeros((vocab_size, vocab_size), dtype='float')
        for word1, word2 in token_pairs:
            i, j = vocab[word1], vocab[word2]
            g[i][j] = 1

        # Get Symmeric matrix
        g = self.symmetrize(g)

        # Normalize matrix by column
        norm = np.sum(g, axis=0)
        # this is ignore the 0 element in norm
        g_norm = np.divide(g, norm, where=norm != 0)

        return g_norm

    def get_keywords(self, number=10):
        """Print top number keywords"""
        keyword_str = ""
        node_weight = OrderedDict(
            sorted(self.node_weight.items(), key=lambda t: t[1], reverse=True))
        for i, (key, value) in enumerate(node_weight.items()):
            keyword_str += key
            keyword_str += ', '
            # print(key + ' - ' + str(value))
            if i > number:
                return keyword_str
        return keyword_str

    def analyze(self, text,
                candidate_pos=['NOUN', 'PROPN'],
                window_size=4, lower=False, stopwords=list()):
        """Main function to analyze text"""

        # Set stop words
        self.set_stopwords(stopwords)

        # Parse text by spaCy
        doc = nlp(text)

        # Filter sentences
        sentences = self.sentence_segment(
            doc, candidate_pos, lower)  # list of list of words

        # Build vocabulary
        vocab = self.get_vocab(sentences[1])

        # Get token_pairs from windows
        token_pairs = self.get_token_pairs(window_size, sentences[1])

        # Get normalized matrix
        g = self.get_matrix(vocab, token_pairs)

        # Initialization for weight(pagerank value)
        pr = np.array([1] * len(vocab))

        # Iteration
        previous_pr = 0
        for epoch in range(self.steps):
            pr = (1 - self.d) + self.d * np.dot(g, pr)
            if abs(previous_pr - sum(pr)) < self.min_diff:
                break
            else:
                previous_pr = sum(pr)

        # Get weight for each node
        node_weight = dict()
        for word, index in vocab.items():
            node_weight[word] = pr[index]

        self.node_weight = node_weight


# listingFile = open('tfidftext.txt', 'r')
# listing = listingFile.read()
# listing = listing.lower()

# jobListing = TextRank4Keyword()
# # experience needs years, be careful when parsing
# jobListing.analyze(listing, window_size=4, lower=False,
#                    stopwords=['technology', 'workplace', 'software', 'job', 'google', 'ideas', 'qualifications',
#                               'status', 'world', 'opportunity', 'opportunities', 'products', 'engineering', 'engineers',
#                               'information'])
# jobListing.get_keywords(15)
