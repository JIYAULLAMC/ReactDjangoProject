from django.urls import path
from api.views import CreateDetails, ListUpdateDeleteDetail, ListData

urlpatterns = [
    path("", ListData.as_view()),
    path('<int:pk>/', ListUpdateDeleteDetail.as_view()),
    path('create/', CreateDetails.as_view()),
]
