
from django.urls import path
from . import views
urlpatterns = [
    path('getpost',views.get_post,name='get_post'),
    path('getposts',views.get_posts,name='get_posts'),
    path('create',views.create_post,name='create_post'),
    path('register',views.register,name='register'),
    path('Login',views.Login,name='login'),
    path('delete',views.delete_post,name='delete_post'),
    path('deleteall',views.deleteall,name='deleteall'),
    path('deleteacc',views.deleteacc,name='deleteacc'),
]