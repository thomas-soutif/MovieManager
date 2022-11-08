from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Actor(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)


class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField(help_text="Enter a brief description of the movie")
    actors = models.ManyToManyField(Actor, related_name="movies")

    def getReviewGradeAverage(self):
        """
        Returns the average grade of all reviews for this movie
        Return:
            float: average grade
            None: if no reviews exist
        """
        reviews = self.reviews.all()
        if not reviews:
            return None
        grade_sum = 0
        for review in reviews:
            grade_sum += review.grade
        return grade_sum / len(reviews)


class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="reviews")
    grade = models.IntegerField(help_text="Enter a grade between 1 and 5",
                                validators=[MinValueValidator(1), MaxValueValidator(5)])
