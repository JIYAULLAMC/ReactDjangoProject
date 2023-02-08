from rest_framework import generics
from api.models import Student
from api.serializers import DataListSerializer
# Create your views here.


class ListData(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = DataListSerializer


class ListUpdateDeleteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = DataListSerializer


class CreateDetails(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = DataListSerializer
