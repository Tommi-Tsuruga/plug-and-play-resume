# Generated by Django 2.2.6 on 2019-11-12 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basicinfo',
            name='email',
            field=models.EmailField(max_length=100),
        ),
    ]