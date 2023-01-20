from rest_framework import serializers
#from django.contrib.auth.models import AbstractUser

from .models import CustomUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'date_joined','is_superuser','last_name','first_name', 'password')
        extra_kwargs = {
            'email': {'validators': [], 'required': False, 'read_only':False},
            'password': {'validators': [], 'required': True, 'write_only':True},
            'last_name': {'validators': [], 'required': False, 'read_only':False},
            'first_name': {'validators': [], 'required': False, 'read_only':False},
        }
    def create(self, validated_data):
      user = CustomUser(
        email=validated_data['email'],
        #username=validated_data['username']
       )
      user.set_password(validated_data['password'])
      user.save()
      return user
