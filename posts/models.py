from django.db import models
from authentication.models import User


class Comment(models.Model):
    text = models.CharField(max_length=1000, blank=False)
    created = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    the_post = models.ForeignKey("POST", on_delete=models.CASCADE)

    def __str__(self):
        return self.text


class Post(models.Model):
    text = models.TextField(blank=True)
    likes = models.ManyToManyField("Like", blank=True)
    comments = models.ManyToManyField(Comment, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_images', blank=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.text


class Like(models.Model):
    liked_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    liker = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('liked_post', 'liker')

    def __str__(self):
        return "Like"
