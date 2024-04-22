from django.urls import path, include
from .views import ProductView, CustomerReviewView

urlpatterns = [
  path('products', ProductView.as_view()),
  path('review', CustomerReviewView.as_view()),
]


