from django.urls import path
from . import views


urlpatterns = [
    path('products', views.products, name='products')
]

#sanya loh net ti loh