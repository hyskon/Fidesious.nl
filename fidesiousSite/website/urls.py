# website urls

from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from website import views
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('contact', views.contact, name="contact"),
    path('manuals', views.manuals, name="manuals"),
    path('services', views.services, name="services")
]
