from .models import Post, Comment, Like
from .serializers import PostSerializer, CreatePostSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK
)
from rest_framework.decorators import api_view, permission_classes

from django.http import Http404
from authentication.helpers import ExpiringTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from utilities.utils import application_error
from authentication.models import User


class PostDetail(APIView):

    authentication_classes = [ExpiringTokenAuthentication]

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        postSerializer = PostSerializer(post)
        return Response(postSerializer)

    def post(self, request):
        post_data = request.data
        serializer = CreatePostSerializer(data=post_data, context={"request":request})
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "successfully edited user"})
        else:
            return Response({"error": "wrong  parameters"})



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def likePost(request, pk):
    user = request.user
    try:
        post = Post.objects.get(pk=pk)
        try:
            like = Like.objects.get(liker__exact=user, liked_post__exact=post)
            post.likes.remove(like)
            like.delete()
        except Like.DoesNotExist:
            like = Like.objects.create(liker=user, liked_post=post)
            post.likes.add(like)
            post.save()

    except Post.DoesNotExist:
        return application_error(message="Post not found", error_code=404)

    return Response({"message": "Liked post successfully"}, status=HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def comment_post(request):
    user = request.user
    post_id = request.data.get('post_id', 0)
    text = request.data.get('text', 0)

    try:
        post = Post.objects.get(pk=post_id)

        comment = Comment.objects.create(text=text, the_post=post, owner=user)
        post.comments.add(comment)
        user.save()
        return Response({"message":"comment added successfully"})

    except Post.DoesNotExist:
        return application_error(message="Post not found", error_code=404)

    except Post.DoesNotExist:
        print("error")
        return application_error(message="Post not found", error_code=404)

    return Response({"message": "Liked post successfully"}, status=HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_posts(request):
    user = request.user
    posts = Post.objects.all().order_by('-created')
    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_posts(request, pk):
    user = User.objects.get(pk=pk)
    posts = Post.objects.filter(owner=user)
    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)

