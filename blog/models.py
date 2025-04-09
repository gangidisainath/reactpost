from django.db import models
from django.contrib.auth.models import AbstractUser

class blogacc(AbstractUser):
    def __str__(self):
        return self.username
class blogpost(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    username=models.ForeignKey(blogacc,on_delete=models.CASCADE,to_field='username',related_name="userdata")
    created_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

