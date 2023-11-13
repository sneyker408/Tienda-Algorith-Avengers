from django.db import models

# Create your models here.
class Productos(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    nombre = models.TextField(null=False, max_length=50, verbose_name="Nombre del producto")
    descripcion = models.TextField(null=False, max_length=200, verbose_name="Descripcion del producto")
    existencias = models.IntegerField(null=False, verbose_name="Existencias  del producto")
    precio = models.DecimalField(null=False, decimal_places=2, max_digits=9, verbose_name="Precio del producto")


class Contacto(models.Model):
    id=models.AutoField(primary_key=True, auto_created=True)
    usuario=models.TextField(null=True,max_length=50,verbose_name="Usuario")
    correo=models.TextField(null=True,max_length=75,verbose_name="Correo")
    descripcion=models.TextField(null=True,max_length=200,verbose_name="Descripcion")