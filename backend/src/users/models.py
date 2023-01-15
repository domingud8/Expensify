from django.contrib.auth.models import AbstractUser
from django.db import models
#from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from .manager import CustomUserManager
from django.contrib.postgres.fields import ArrayField

class CustomUser(AbstractUser):
    username = None
    #first_name = None
    #last_name = None

    email = models.EmailField(max_length=254, unique=True)
    #categories = ArrayField(models.CharField(max_length=100, blank=True),  null=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    #def __str__(self):
    #    return self.email