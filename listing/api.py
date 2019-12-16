from rest_framework import viewsets, permissions, mixins
from .serializers import ListingInfoSerializer, GeneratedResumeSerializer
from django.template.loader import get_template
from django.template import Context
from subprocess import Popen, PIPE
import tempfile
from .models import GeneratedResume
from django.views.generic import View
import datetime
from listing.pdfutils import render_to_pdf
from django.http import HttpResponse
from rest_framework.decorators import action
from resume.models import BasicInfo, Experience, Education, JobHistory
from django.template.loader import get_template
from subprocess import Popen, PIPE
import os.path
import sys
import io
from reportlab.pdfgen import canvas
from django.views.static import serve
from django.http import FileResponse


class ListingInfoViewSet(viewsets.ModelViewSet):
    serializer_class = ListingInfoSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.listingInfo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GeneratedResumeViewSet(viewsets.ModelViewSet):
    serializer_class = GeneratedResumeSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.generatedResume.all()

    @action(detail=False, methods=['GET'], name='Get PDF')
    def add_pdf(self, request):
        print("addpdf user", self.request.user)
        basic_info = BasicInfo.objects.get(owner=(self.request.user))

        # a = self.request.user
        a = GeneratedResume.objects.get(owner=(self.request.user))
        print(a.first_name)
        context = {  # (2)
            'content': a.first_name,
        }
        template = get_template('my_latex_template.tex')
        rendered_tpl = template.render(context).encode('utf-8')  # (3)
        # Python3 only. For python2 check out the docs!
        with tempfile.TemporaryDirectory() as tempdir:  # (4)
            # Create subprocess, supress output with PIPE and
            # run latex twice to generate the TOC properly.
            # Finally read the generated pdf.
            for i in range(2):
                process = Popen(
                    ['pdflatex', '-output-directory', tempdir],
                    stdin=PIPE,
                    stdout=PIPE,
                )
                process.communicate(rendered_tpl)
            with open(os.path.join(tempdir, 'texput.pdf'), 'rb') as f:
                pdf = f.read()
        file_like = io.BytesIO(pdf)
        file_like.seek(0)
        # r = HttpResponse(content_type='application/pdf')  # (5)
        # r['Content-Disposition'] = 'attachment; filename=texput.pdf'
        return FileResponse(file_like, as_attachment=True, filename='resume.pdf')

        ############################################################
        # # Create a file-like buffer to receive PDF data.
        # buffer = io.BytesIO()

        # # Create the PDF object, using the buffer as its "file."
        # p = canvas.Canvas(buffer)

        # # Draw things on the PDF. Here's where the PDF generation happens.
        # # See the ReportLab documentation for the full list of functionality.
        # p.drawString(100, 100, "Hello world.")

        # # Close the PDF object cleanly, and we're done.
        # p.showPage()
        # p.save()

        # # FileResponse sets the Content-Disposition header so that browsers
        # # present the option to save the file.
        # buffer.seek(0)
        # return FileResponse(buffer, as_attachment=True, filename='hello.pdf')

    def perform_create(self, serializer):
        print("request data: ", self.request.data.get('i'))
        print("owner: ", self.request.user)
        serializer.save(owner=self.request.user,
                        listingID=self.request.data.get('i'))
