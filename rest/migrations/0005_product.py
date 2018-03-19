# Generated by Django 2.0.2 on 2018-03-18 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0004_material'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='', max_length=254)),
                ('productGroup', models.CharField(blank=True, default='', max_length=254)),
                ('priceGroup', models.CharField(blank=True, default='', max_length=254)),
                ('outfit', models.CharField(blank=True, default='', max_length=254)),
                ('description', models.TextField(blank=True, default='')),
                ('colors', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='rest.Color')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rest.Customer')),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='rest.Material')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rest.Project')),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
