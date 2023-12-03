from django.urls import path
from . import views


urlpatterns = [
    path('products', views.products, name='products'),
    path('products/A60-WHITE', views.A60_WHITE, name='A60-WHITE'),
    path('products/A60-BLACK', views.A60_BLACK, name='A60-BLACK')
]

