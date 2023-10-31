from django import forms
from .models import Productos, Contacto

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Productos
        fields = "__all__"
    
class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto
        fields = "__all__"