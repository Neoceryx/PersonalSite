from django.urls import path
from infoapp import views

urlpatterns = [
    path("",views.index, name="index")
]