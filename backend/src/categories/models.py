from django.db import models

# Create your models here.

from users import models as users_models

class UserCategories(models.Model):
  user = models.ForeignKey(users_models.CustomUser, default=None, on_delete=models.DO_NOTHING)
  name = models.CharField(max_length=100, default='')


class UserSubCategories(models.Model):
  category = models.ForeignKey(UserCategories, default=None, on_delete=models.DO_NOTHING)
  subcategory_name = models.CharField(max_length=100, default='') 
