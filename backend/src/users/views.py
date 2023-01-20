
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer

from .models import CustomUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        user = request.user
        serializer = UserSerializer(user, context={'request': request})
        return Response(serializer.data)
    
