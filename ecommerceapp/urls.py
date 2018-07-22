from django.urls import path
from . import views

urlpatterns = [
    path('accounts/createaccount/', views.CreateAccountView.as_view(), name='create_account_page'),
    path('accounts/login/', views.LoginView.as_view(), name='login_page'),
    path('search/results/', views.SearchResultsView.as_view(), name='search_results_page'),
    path('search/results/product', views.ProductDetailView.as_view(), name='product_detail_page'),
    path('cart/', views.CartView.as_view(), name='cart_page'),
    path('checkout/', views.CheckoutView.as_view(), name='checkout_page'),
]
