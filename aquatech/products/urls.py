from django.urls import path
from . import views


urlpatterns = [
    path('products', views.products, name='products'),
    path('A60_WHITE', views.A60_WHITE, name='A60-WHITE')
]

