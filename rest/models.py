from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=254, blank=True, default='')
    email = models.EmailField(max_length=254, blank=True, default='')
    description = models.TextField(blank=True, default='')

    class Meta:
        ordering = ('id',)

class Project(models.Model):
    name = models.CharField(max_length=254, blank=True, default='')
    startingDate = models.DateField()
    endingDate = models.DateField()
    coverPercentage = models.DecimalField(max_digits=5,decimal_places=1, default='0')
    description = models.TextField(blank=True, default='')

    class Meta:
        ordering = ('id',)

class Color(models.Model):
    name = models.CharField(max_length=254, blank=True, default='')
    pantone = models.CharField(max_length=254, blank=True, default='')
    hexColorValue = models.CharField(max_length=7, blank=True, default='')

    class Meta:
        ordering = ('id',)

class Material(models.Model):
    name = models.CharField(max_length=254, blank=True, default='')
    #picture = models.ImageField(upload_to = 'pic_folder/', default = 'pic_folder/None/no-img.jpg')

    class Meta:
        ordering = ('id',)

class Product(models.Model):
    name = models.CharField(max_length=254, blank=True, default='')
    productGroup = models.CharField(max_length=254, blank=True, default='')
    priceGroup = models.CharField(max_length=254, blank=True, default='')
    outfit = models.CharField(max_length=254, blank=True, default='')
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,)
    colors = models.ManyToManyField(Color)
    materials = models.ManyToManyField(Material)
    description = models.TextField(blank=True, default='')

    class Meta:
        ordering = ('id',)
