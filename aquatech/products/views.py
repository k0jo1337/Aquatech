from django.shortcuts import render
from django.http import HttpResponse


def products(request):
    return render(request, 'products.html')


def A60_WHITE(request):
    return render(request, 'items/A60 WHITE.html')


