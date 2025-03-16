from django.contrib import admin
from django.urls import path, include
from memories import views

urlpatterns = [
    path('', views.base, name='base'),
    path('index/', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('account/<str:username>', views.base, name='account_info'),
    path('create_post/', views.create_post, name='create_post'),
    path('password_reset/', views.password_reset, name='password_reset'),
]