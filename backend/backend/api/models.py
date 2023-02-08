from django.db import models

# Create your models here.


class Student(models.Model):
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)
    phone = models.IntegerField()
    covid = models.BooleanField()
    batchcode = models.CharField(max_length=5)
    dateofjoining = models.DateField()
    subject = models.CharField(max_length=64)
    assessment1 = models.DecimalField(max_digits=5, decimal_places=2)
    assessment2 = models.DecimalField(max_digits=5, decimal_places=2)
    assessment3 = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return str(self.firstname) + ' ' + str(self.lastname)

    def __unicode__(self):
        return
