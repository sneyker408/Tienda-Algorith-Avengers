from django.db import models

# Create your models here.
class Productos(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    Nombre = models.TextField(null=False, max_length=100)
    Existencias = models.IntegerField(null=False)
    Descripcion = models.TextField(null=False, max_length=150)
    Precio = models.DecimalField(null=False, decimal_places=2, max_digits=9)

# Aun no se usa esta tabla.
class Contacto(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    Usuario = models.TextField(null=False, max_length=100)
    Correo = models.TextField(null=False, max_length=100)
    Mensaje = models.TextField(null=False, max_length=500)
