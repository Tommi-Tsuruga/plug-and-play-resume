#!/usr/bin/env python
# title           : models.py
# description     :
# author          : Keisuke Suzuki
# date            : 11/4/19
# usage           : python models.py
# ==============================================================================
from django.db import models
from django.contrib.auth.models import User


class BasicInfo(models.Model):
    owner = models.ForeignKey(
        User, related_name="basicInfo", on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])


class Experience(models.Model):
    owner = models.ForeignKey(User,
                              related_name='experience',
                              on_delete=models.CASCADE)
    title = models.CharField(max_length=25)
    description = models.CharField(max_length=1000)
    company = models.CharField(max_length=25)
    start_date = models.DateField()
    end_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    experience_keywords = models.TextField(null=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])


class Education(models.Model):
    owner = models.ForeignKey(User,
                              related_name='education',
                              on_delete=models.CASCADE)
    school_name = models.CharField(max_length=20)
    start_date = models.DateField()
    end_date = models.DateField()
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])
