# Generated by Django 2.2.7 on 2019-11-21 04:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0002_auto_20191121_0202'),
    ]

    operations = [
        migrations.RenameField(
            model_name='generatedresume',
            old_name='relevant_job_history1',
            new_name='relevantJobHistory1',
        ),
        migrations.RenameField(
            model_name='generatedresume',
            old_name='relevant_job_history2',
            new_name='relevantJobHistory2',
        ),
        migrations.RenameField(
            model_name='generatedresume',
            old_name='relevant_job_history3',
            new_name='relevantJobHistory3',
        ),
    ]
