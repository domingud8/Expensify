from rest_framework import serializers
#from django.contrib.auth.models import AbstractUser

from .models import CustomUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'date_joined','is_superuser','last_name','first_name')
        extra_kwargs = {
            'email': {'validators': [], 'required': False, 'read_only':False},
            'last_name': {'validators': [], 'required': False, 'read_only':False},
            'first_name': {'validators': [], 'required': False, 'read_only':False},
        }
