from django.shortcuts import render
from .models import Usuario
from .models import Contrasena

def index(request):
    return render(request, 'index.html')


def register(request):
    return render(request, 'register.html')

def forgot(request):
    return render(request, 'forgot.html')

def reset(request):
    return render(request, 'reset.html')


def controlpanel(request, pk):
    usuario = Usuario.objects.get(id=pk)
    context = {'usuario': usuario}
    return render(request, 'controlpanel.html', context)

def test(request):
    usuarios = Usuario.objects.all()
    context = {'usuarios': usuarios}
    return render(request, 'test.html', context)

def test(request) :
    contrasenas = Contrasena.objects.all()
    context = {'contrasenas': contrasenas}
    return render(request, 'test.html', context)
# Create your views here.

