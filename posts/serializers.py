from rest_framework.serializers import ModelSerializer, Serializer, HiddenField, CurrentUserDefault
from .models import Post, Comment, Like
from authentication.serializers import UserSerializer
from drf_extra_fields.fields import Base64ImageField


class CommentSerializer(ModelSerializer):
    owner = UserSerializer()

    class Meta:
        model = Comment
        fields = ('text', 'created', 'owner', 'the_post')


class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ('liker',)


class PostSerializer(ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    likes = LikeSerializer(many=True, read_only=True)
    owner = UserSerializer()
    image = Base64ImageField()

    class Meta:
        model = Post
        fields = ("text", "likes", "id", "comments", "image", "owner", 'created')
        extra_kwargs = {
            "likes": {
                "read_only": True
            },
            "id": {
                "read_only": True
            },
            "comments": {
                "read_only": True
            },
            "created": {
                "read_only": True
            }
        }


class CreatePostSerializer(ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    likes = LikeSerializer(many=True, read_only=True)
    owner = HiddenField(default=CurrentUserDefault()
)
    image = Base64ImageField()

    class Meta:
        model = Post
        fields = ("text", "likes", "id", "comments", "image", "owner", 'created')






