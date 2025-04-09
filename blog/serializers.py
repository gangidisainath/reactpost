from rest_framework import serializers
from .models import blogpost,blogacc

class blogpostserializer(serializers.ModelSerializer):
    class Meta:
        model=blogpost
        fields="__all__"
        read_only_fields=['created_at']
class blogaccserializer(serializers.ModelSerializer):
    class Meta:
        model=blogacc
        fields="__all__"
