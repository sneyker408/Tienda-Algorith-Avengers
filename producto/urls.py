from django.urls import path
from producto import views


urlpatterns = [
    path('', views.inicio, name="inicio"),
    path('producto/', views.listadoProductos, name="productos"),
    path('productos/crear', views.crearProducto, name="crear_producto"),
    path('producto/<int:id>',views.eliminar, name="eliminar_producto"),
    path('producto/editar/<int:id>',views.editar_producto,name="editar_producto"),
    path('producto/AcercaDe',views.AcercaDe,name="Acerca_De_Nosotros"),
    path('producto/Contactanos',views.crearContacto,name="Contactanos"),
    path('producto/Reportes',views.listarMensajes,name="Reportes"),
    path('producto/Reportes/<int:id>',views.eliminarMensaje,name="eliminarMensaje")

]