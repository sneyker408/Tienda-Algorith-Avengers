from django.shortcuts import redirect, render, get_object_or_404
from django.http import HttpResponse
from .models import Productos
from .forms import ProductoForm
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
        messages.success(request,"Prodcuto creado con exito.")
        return redirect('productos')

    return render(request, 'producto/crear.html', {'formulario':formulario})

def eliminarProductos(request, id):
    producto = Productos.objects.get(id = id)
    producto.delete()
    messages.success(request,"Prodcuto eliminado con exito.")
    return redirect('productos')

def editarProducto(request, id):
    producto = Productos.objects.get(id = id)

    formulario = ProductoForm(request.POST or None, instance= producto)
    
    if formulario.is_valid():
        formulario.save()
        messages.success(request,"Prodcuto modificado con exito.")
        return redirect('productos')
    
    return render(request, 'producto/editar.html', {'formulario':formulario})