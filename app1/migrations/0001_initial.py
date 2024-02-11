# Generated by Django 5.0.1 on 2024-02-02 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=50)),
                ('pin', models.CharField(max_length=6)),
                ('password', models.CharField(max_length=50)),
                ('update', models.DateTimeField(auto_now=True)),
                ('create', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
