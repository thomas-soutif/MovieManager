from rest_framework import viewsets

from movie_app.api.serializers import ActorSerializer, MovieSerializer, ReviewSerializer
from movie_app.models import Actor, Movie, Review
from rest_framework.pagination import LimitOffsetPagination


class ActorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows actors to be viewed or edited.
    """
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows movies to be viewed or edited.
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows reviews to be viewed or edited.
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = LimitOffsetPagination


