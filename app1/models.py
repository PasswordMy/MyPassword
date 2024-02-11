from django.db import models

class Usuario(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField(max_length=50)
    pin = models.CharField(max_length=6)
    password = models.CharField(max_length=50)

    update = models.DateTimeField(auto_now=True)
    create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 

class Contrasena(models.Model):
    contra1 = models.CharField(max_length=150)
    contra2 = models.CharField(max_length=150)
    contra3 = models.CharField(max_length=150)
    contra4 = models.CharField(max_length=150)
    contra5 = models.CharField(max_length=150)
    contra6 = models.CharField(max_length=150)
    contra7 = models.CharField(max_length=150)
    contra8 = models.CharField(max_length=150)
    contra9 = models.CharField(max_length=150)
            
    def __str__(self):
          return self.contra1
        
# Create your models here.
