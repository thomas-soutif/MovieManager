from django.db import models


class Actor(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)

class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField(help_text="Enter a brief description of the movie")
    actors = models.ManyToManyField(Actor, related_name="movies")

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    grade = models.IntegerField(help_text="Enter a grade between 1 and 5")