from django.urls import path

from . import views
urlpatterns = [
    path("<int:pk>/", views.PostDetail.as_view(), name="posts"),
    path('create-post/', views.PostDetail.as_view(), name='create_post'),
    path('like/<int:pk>/', views.likePost, name="like_post"),
    path('comment/', views.comment_post, name="comment_post"),
    path('', views.get_all_posts, name="get_posts"),
    path('user/<uuid:pk>/', views.get_user_posts, name="user_posts")

]
