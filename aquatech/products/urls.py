from django.urls import path
from . import views


urlpatterns = [
    path('products', views.products, name='products'),
    path('products/A60-WHITE', views.A60_WHITE, name='A60-WHITE'),
    path('products/A60-BLACK', views.A60_BLACK, name='A60-BLACK'),
    path('products/T98-WHITE', views.T98_WHITE, name='T98-WHITE'),
    path('products/T98-BLACK', views.T98_BLACK, name='T98-BLACK'),
    path('products/V11-WHITE', views.V11_WHITE, name='V11-WHITE'),
    path('products/A62-WHITE', views.A62_WHITE, name='A62-WHITE'),
    path('products/C21-U4LE-SILVER', views.C21_U4LE_SILVER, name='C21-U4LE-SILVER'),
    path('products/A72-BLACKNWHITE', views.A72_BLACKNWHITE, name='A72-BLACKNWHITE'),
    path('products/H1-U4LE-WHITENSILVER', views.H1_U4LE_WHITENSILVER, name='H1-U4LE-WHITENSILVER'),
    path('products/H1-U4L-WHITE', views.H1_U4L_WHITE, name='H1-U4LE-WHITE'),
    path('products/H40-U4L-BLACKNWHITE', views.H40_U4L_BLACKNWHITE, name='H40-U4L-BLACKNWHITE'),
]

