# Generated by Django 2.0.2 on 2018-03-18 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='', max_length=254)),
                ('startingDate', models.DateField(auto_now_add=True)),
                ('endingDate', models.DateField()),
                ('coverPercentage', models.DecimalField(decimal_places=1, max_digits=5)),
                ('description', models.TextField(blank=True, default='')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
