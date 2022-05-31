from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy
from .managers import UserManager
import uuid


class User(AbstractUser):
    """
    custom user model
    """
    username = None
    first_name = None
    last_name = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(ugettext_lazy("Email Address"), unique=True)
    name = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='users', blank=True)
    bio = models.CharField(max_length=300, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email