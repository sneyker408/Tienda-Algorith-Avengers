from django.urls import path
from producto import views

urlpatterns = [
    path('', views.inicio, name="inicio"),
    path('producto/', views.listadoProductos, name="productos"),
    path('prodcuto/crear', views.crearProducto, name="crear_producto"),
    path('producto/eliminar/<int:id>', views.eliminarProductos, name="eliminar_producto"),
    path('producto/editar/<int:id>', views.editarProducto, name="editar_producto"),
    path('contactar', views.contactar, name="contactar"),
    path('contactar/mensajes', views.recibidos, name="mensajes_recibidos"),
    path('contactar/eliminar/<int:id>', views.eliminarMensaje, name="eliminar_mensaje")
]