from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Productos, Contacto
from .forms import ProductoForm, ContactoForm
from django.contrib import messages

# Create your views here.
def inicio(request):
    return render(request, 'pages/inicio.html')

def listadoProductos(request):
    productos = Productos.objects.all()
    return render(request, 'producto/productos.html', {'productos': productos})

def crearProducto(request):
    formulario = ProductoForm(request.POST or None)

    if formulario.is_valid():
        # producto = formulario.save
        formulario.save()
        messages.success(request,"Agregaste un nuevo producto.")
        return redirect('productos')

    return render(request, 'producto/crear.html', {'formulario':formulario})

def eliminarProductos(request, id):
    producto = Productos.objects.get(id = id)
    producto.delete()
    messages.success(request,"Producto eliminado con exito.")
    return redirect('productos')

def editarProducto(request, id):
    producto = Productos.objects.get(id = id)

    formulario = ProductoForm(request.POST or None, instance= producto)
    
    if formulario.is_valid():
        formulario.save()
        messages.success(request,"Producto modificado con exito.")
        return redirect('productos')
    
    return render(request, 'producto/editar.html', {'formulario':formulario})

def contacto(request):
    return render(request, 'contacto/contacto.html')

def contactar(request):
    formularioContacto = ContactoForm(request.POST or None)

    if formularioContacto.is_valid():
        # producto = formulario.save
        formularioContacto.save()
        messages.success(request,"Mensaje enviado con exito.")

    return render(request, 'contacto/contacto.html', {'formularioContacto':formularioContacto})

def recibidos(request):
    contactos = Contacto.objects.all()
    return render(request, 'contacto/recibidos.html', {'contactos':contactos})

def eliminarMensaje(request,id):
    contacto = Contacto.objects.get(id = id)
    contacto.delete()
    messages.success(request,"Mensaje eliminado con exito.")
    return redirect('mensajes_recibidos')