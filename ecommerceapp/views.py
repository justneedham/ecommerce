from django.views.generic import TemplateView, ListView
from django.urls import reverse_lazy
from django.views import generic
from .forms import CustomerCreationForm, SearchForm
from .models import Books

# Create your views here.


class LandingPageView(TemplateView):
    template_name = 'landing_page.html'


class SearchPageView(generic.CreateView):
    form_class = SearchForm
    template_name = 'search_page.html'






class CreateAccountView(generic.CreateView):
    form_class = CustomerCreationForm
    success_url = reverse_lazy('landing')
    template_name = 'create_account_page.html'


class LoginView(TemplateView):
    template_name = 'login_page.html'


class SearchResultsView(ListView):
    model = Books
    context_object_name = 'books'
    template_name = 'search_results_page.html'

    # def get_context_data(self, *, object_list=None, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     return context

class ProductDetailView(TemplateView):
    template_name = 'product_detail_page.html'

class CartView(TemplateView):
    template_name = 'cart_page.html'

class CheckoutView(TemplateView):
    template_name = 'checkout_page.html'