<h1 align="center">PlugAndPlayResume </h1>
<p align="center"><strong>Description</strong>
<br>
PlugAndPlayResume creates resumes optimized for specific job positions</p>
<br>

<h2>Motivation</h2>
In order to make getting your dream job easier, our product will solve the job-hunter's problem of resume customization by giving them an adaptive webapp to identify their most relevant experience.


<h2>Prerequisites</h2>
<h4>Backend</h4>
In the root directory, <i>plug-and-play-resume/</i>
install requirements.txt with
<pre>pip install -r requirements.txt</pre>
There are few things have to be installed manually:
<li>en_core_web_sm
<pre>python -m spacy download en_core_web_sm</pre>
</li>
<li>django
<pre>pip install django</pre></li>
<li>djangorestframework
<pre>pip install djangorestframework</pre></li>
<h4>FrontEnd</h4>
<i>plug-and-play-resume/frontend</i>
<pre>yarn install</pre>
<h4>Database</h4>
Create database for testing:
<pre>sudo su - postgres</pre>
Once you are on postgers shell, run
<pre>psql</pre>
then,
<pre>create database test with owner [ username ]</pre>
if you need to reset the setting, run
<pre>drop database test</pre>


<h2>Status</h2>
<h4>Frontend</h4>
   
<h4>Backend</h4>
    <li>Created a django app</li>
    <li>Connected to frontend</li>

<h2>Todo</h2>
<h4>Frontend:</h4>

<h4>Backend:</h4>
    
<h2>Development</h2>
    <h4>Frontend</h4>
        <li>Build for development <pre>yarn run build:dev</pre> </li>
        <li>Build as product <pre>yarn run build:prod</pre> </li>
        <li>Run dev-server <pre>yarn run dev-server</pre> </li>
    <h4>Backend</h4>
        <li>Run DevServer (with running client server)
            <pre>./manage.py runserver</pre> </li>

<h2>Directory Structure</h2>
<pre>
.
├── accounts
│   ├── migrations
│   │   └── __pycache__
│   └── __pycache__
├── frontend
│   ├── __pycache__
│   ├── src
│   │   ├── actions
│   │   ├── components
│   │   │   ├── accounts
│   │   │   ├── basic-info
│   │   │   ├── education
│   │   │   ├── experience
│   │   │   ├── generated-resume
│   │   │   ├── job-history
│   │   │   └── listings
│   │   ├── reducers
│   │   ├── routers
│   │   ├── store
│   │   └── styles
│   │       ├── base
│   │       └── components
│   ├── static
│   │   ├── bundles
│   │   └── images
│   └── template
├── listing
│   ├── migrations
│   │   └── __pycache__
│   └── __pycache__
├── plug-and-play-resume
│   └── __pycache__
└── resume
    ├── migrations
    │   └── __pycache__
    └── __pycache__


</pre>

<h2>Authors</h2>

- Tommi Ann Tsuruga - *Admin*
- Aisha Khoja  
- Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga   


<h2>License</h2>


