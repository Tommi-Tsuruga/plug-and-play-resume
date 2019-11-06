#!/usr/bin/env python
# title           : models.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python models.py
# ==============================================================================
from django.db import models


class Experience(models.Model):
    title = models.CharField(max_length=25)
    description = models.CharField(max_length=1000)
    company = models.CharField(max_length=25)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return ', '.join(['{key}={value}'
                         .format(key=key, value=self.__dict__.get(key))
                          for key in self.__dict__])

