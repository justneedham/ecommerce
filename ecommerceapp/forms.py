from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Customers


class CustomerCreationForm(UserCreationForm):
    first_name = forms.CharField()
    last_name = forms.CharField()
    email = forms.EmailField()
    cell = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput())
    password_confirm = forms.CharField(widget=forms.PasswordInput())

    class Meta(UserCreationForm.Meta):
        model = Customers
        fields = UserCreationForm.Meta.fields


class CustomerChangeForm(UserChangeForm):

    class Meta:
        model = Customers
        fields = UserChangeForm.Meta.fields


class SearchForm(forms.Form):
    search_string = forms.CharField(label='test label', max_length=255)
