from contextlib import redirect_stderr
from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse
from .models import Producto, Contacto
from .forms import ContactoForm, ProductoFomr
from django.contrib import messages


# existen 2 tipos de parametros que se usan en las peticiones http 
# 1- Request
# 2- Response
# Create your views here.

def inicio(request):
    return render(request, 'pages/inicio.html')

def listadoProductos(request):
    productos = Producto.objects.all()
    return render(request,'producto/productos.html', {'productos': productos})

def crearProducto(request):
    formulario = ProductoFomr(request.POST or None)
    
    if formulario.is_valid():
        formulario.save()
        messages.success(request,"Producto Registrado")
        return redirect('productos')
    
    return render(request, 'producto/crear.html', {'formulario':formulario})

def eliminar(request,id):
    product=get_object_or_404(Producto,id=id)
    product.delete()
    messages.success(request, "Producto Eliminado")

    return redirect(to=listadoProductos)


def editar_producto(request,id):
    producto=Producto.objects.get(id=id)
    formulario=ProductoFomr(request.POST or None, instance=producto)

    if formulario.is_valid():
      formulario.save()

      messages.success(request, "Producto Modificado")

      return redirect('productos')
    
    return render(request,'producto/editar.html', {'formulario': formulario})

def crearContacto(request):
    reportes = ContactoForm(request.POST or None)
    
    if reportes.is_valid():
        reportes.save()
        messages.success(request,"Mensaje Registrado")
        return redirect('Contactanos')
    
    return render(request, 'producto/Contactanos.html', {'formulario':reportes})

def AcercaDe(request):

    return render(request, 'producto/AcercaDe.html')     
      
def listarMensajes(request):
    mensajes = Contacto.objects.all()
    return render(request,'producto/Reportes.html', {'mensajes': mensajes})

def eliminarMensaje(request,id):
    mensaje=get_object_or_404(Contacto,id=id)
    mensaje.delete()
    messages.success(request, "Mensaje Eliminado")

    return redirect(to=listarMensajes)

def cantidad_comprada(request, id, cantidad):
    
    articulo = get_object_or_404(Producto, id=id)

    articulo.existencias -= cantidad

    articulo.save()
    
    messages.success(request, "Compra Realizada")
    return redirect(to=listadoProductos)

    

    


    
