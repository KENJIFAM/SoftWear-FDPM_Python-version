from django.urls import path
from rest import views

urlpatterns = [
    path('', views.index, name='index'),
    path('customer/', views.CustomerList.as_view()),
    path('customer/<pk>/', views.CustomerDetail.as_view()),
    path('project/', views.ProjectList.as_view()),
    path('project/<pk>/', views.ProjectDetail.as_view()),
    path('color/', views.ColorList.as_view()),
    path('color/<pk>/', views.ColorDetail.as_view()),
    path('material/', views.MaterialList.as_view()),
    path('material/<pk>/', views.MaterialDetail.as_view()),
    path('product/', views.ProductList.as_view()),
    path('product/<pk>/', views.ProductDetail.as_view()),
]
