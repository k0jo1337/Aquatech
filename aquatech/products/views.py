from django.shortcuts import render
from django.http import HttpResponse


def products(request):
    return render(request, 'products.html')


def A60_WHITE(request):
    return render(request, 'items/A60-WHITE.html')

def A60_BLACK(request):
    return render(request, 'items/A60-BLACK.html')

def T98_WHITE(request):
    return render(request, 'items/T98-WHITE.html')

def T98_BLACK(request):
    return render(request, 'items/T98-BLACK.html')

def V11_WHITE(request):
    return render(request, 'items/V11-WHITE.html')

def A62_WHITE(request):
    return render(request, 'items/A62-WHITE.html')

def C21_U4LE_SILVER(request):
    return render(request, 'items/C21-U4LE-SILVER.html')

def A72_BLACKNWHITE(request):
    return render(request, 'items/A72-BLACKNWHITE.html')

def H1_U4LE_WHITENSILVER(request):
    return render(request, 'items/H1-U4LE-WHITENSILVER.html')

def H1_U4L_WHITE(request):
    return render(request, 'items/H1-U4L-WHITE.html')

def H40_U4L_BLACKNWHITE(request):
    return render(request, 'items/H40-U4L-BLACKNWHITE.html')