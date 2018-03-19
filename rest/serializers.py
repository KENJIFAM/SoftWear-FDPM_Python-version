from rest_framework import serializers
from rest.models import Customer, Project, Color, Material, Product


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name', 'email', 'description')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'startingDate', 'endingDate', 'coverPercentage', 'description')

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('id', 'name', 'pantone', 'hexColorValue')

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('id', 'name')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'productGroup', 'priceGroup', 'outfit', 'customer', 'project' ,'colors', 'materials', 'description')
