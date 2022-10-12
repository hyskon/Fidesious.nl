from django.shortcuts import render

# website views here.
def home(response):
    return render(response, 'website/home.html')

def manuals(response):
    return render(response, 'website/manuals.html')

def services(response):
    return render(response, 'website/services.html')

def contact(response):
    return render(response, 'website/contact.html')