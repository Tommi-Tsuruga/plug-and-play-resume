#!/usr/bin/env python

from django.contrib.auth.models import User
from django.db import models


# might be good Idea to generate a skill from job history and experience?
class BasicInfo(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE,
                                 related_name="basicInfo")
    first_name = models.CharField(max_length=100, default='')
    last_name = models.CharField(max_length=100, default='')
    email = models.EmailField(max_length=100, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])


class Experience(models.Model):
    owner = models.ForeignKey(User, related_name='experience',
                              on_delete=models.CASCADE)
    title = models.CharField(max_length=25)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    experience_keywords = models.TextField(null=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])


class Education(models.Model):
    owner = models.ForeignKey(User, related_name='education',
                              on_delete=models.CASCADE)
    school_name = models.CharField(max_length=100)
    degree = models.CharField(max_length=100, default="")
    major = models.CharField(max_length=100, default="")
    start_date = models.DateField()
    end_date = models.DateField()
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])


class JobHistory(models.Model):
    owner = models.ForeignKey(User, related_name='jobhistory',
                              on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    company = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    job_history_keywords = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])
