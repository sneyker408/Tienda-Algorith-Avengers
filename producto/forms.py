from django import forms
from .models import Producto, Contacto

class ProductoFomr(forms.ModelForm):
    class Meta:
        model = Producto
        fields = "__all__"
    
class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto
        fields = "__all__"