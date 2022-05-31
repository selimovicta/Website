from django.urls import path

from . import views
urlpatterns = [
    path("update/<uuid:pk>/", views.UserView.as_view(), name="user"),
    path("sign-up", views.sign_up, name="sign-up"),
    path('login/', views.sign_in, name='login'),
    path("logout/", views.logout, name="logout"),
    path('<uuid:user_id>/', views.get_user, name="get_user")
]
