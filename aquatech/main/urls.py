from django.urls import path, re_path
from . import views
from .views import AppealTemplateView

urlpatterns = [
    path('', views.index, name='homepage'),
    # Add a catch-all pattern to capture any URL
    re_path(r'^(?P<url>.*)/$', AppealTemplateView.as_view(), name='appeal'),
]
