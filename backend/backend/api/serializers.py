# firstname='Dhruva',lastname='V',phone=1982731212,covid=False,batchcode='12n12',dateofjoining='1999-10-14',subject='Python',assessment1=12.1,assessment2=12,assessment3=12.123,
# firstname,
# lastname,
# phone,
# covid,
# batchcode,
# dateofjoining,
# subject,
# assessment1,
# assessment2,
# assessment3,

from rest_framework import serializers
from api.models import Student


class DataListSerializer(serializers.ModelSerializer):
    class Meta():
        model = Student
        fields = '__all__'
