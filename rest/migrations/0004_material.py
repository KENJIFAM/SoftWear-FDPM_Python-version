# Generated by Django 2.0.2 on 2018-03-18 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0003_auto_20180318_1718'),
    ]

    operations = [
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='', max_length=254)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]