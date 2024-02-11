from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('forgot', views.forgot, name='forgot'),
    path('reset', views.reset, name='reset'),
    path('controlpanel/<int:pk>/', views.controlpanel, name='controlpanel'),
    path('test', views.test, name='test'),

]