#!/usr/bin/env python
# title           : models.py
# description     :
# author          : Keisuke Suzuki
# date            : 10/22/19
# usage           : python models.py
# ==============================================================================
import uuid
from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)
