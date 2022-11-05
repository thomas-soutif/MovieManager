from rest_framework import serializers

from movie_app.models import Actor, Movie, Review


class ActorSerializer(serializers.ModelSerializer):
    """
    Serializer for the Actor model
    """
    class Meta:
        model = Actor
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    """
    Serializer for the Movie model
    """
    class Meta:
        model = Movie
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializer for the Review model
    """
    class Meta:
        model = Review
        fields = "__all__"