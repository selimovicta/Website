from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from .helpers import token_expiration_handler, expires_in, ExpiringTokenAuthentication
from .serializers import UserSerializer, UserSignInSerializer
from utilities.utils import application_error
from .models import User
from django.http import Http404


class UserView(APIView):
    authentication_classes = [ExpiringTokenAuthentication]
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def patch(self, request, pk):
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "successfully edited user", 'user': serializer.data})
        else:
            return Response({"error": "wrong  parameters"})


@api_view(['GET'])
@permission_classes((AllowAny,))
def get_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return application_error("User not found", 404)


@api_view(['POST'])
@permission_classes((AllowAny,))
def sign_up(request):
    print(request.data)
    user_serializer = UserSerializer(data=request.data)

    if user_serializer.is_valid():
        user = user_serializer.save()
        token = Token.objects.create(user=user)
    else:
        return Response({"errors": user_serializer.errors}, status=400)

    user = UserSerializer(User.objects.get(email=user.email))

    return Response({"message": "User created successfully",
                     "token": token.key,
                     "user": user.data
                     })


@api_view(['POST'])
@permission_classes((AllowAny,))
def sign_in(request):
    sign_in_serializer = UserSignInSerializer(data=request.data)

    if not sign_in_serializer.is_valid():
        return Response(sign_in_serializer.errors, status=HTTP_400_BAD_REQUEST)

    user = authenticate(email=sign_in_serializer.data['email'],
                        password=sign_in_serializer.data['password'])

    if not user:
        return Response({"error": "Invalid credentials"}, status=HTTP_404_NOT_FOUND)

    token, _ = Token.objects.get_or_create(user=user)

    is_expired, token = token_expiration_handler(token)

    user_serialized = UserSerializer(user)

    return Response({
        "user": user_serialized.data,
        "expires_in": expires_in(token),
        "token": token.key
    }, status=HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout(request):
    user = request.user
    token = Token.objects.get(user=user)
    token.delete()

    return Response({"message": "User logged out successfully"}, status=HTTP_200_OK)
