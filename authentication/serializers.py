from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import User
from drf_extra_fields.fields import Base64ImageField


class UserSerializer(ModelSerializer):
    image = Base64ImageField(required=False)

    class Meta:
        model = User
        fields = ("email", "name", "id", "password", "image", 'bio')
        extra_kwargs = {
            "password": {
                "write_only": True
            }
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class UserSignInSerializer(Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(max_length=50, required=True)
