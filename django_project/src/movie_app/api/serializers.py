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
    actors = ActorSerializer(many=True, required=True)
    average_grade = serializers.SerializerMethodField()

    def get_average_grade(self, obj):
        return obj.getReviewGradeAverage()
    class Meta:
        model = Movie
        fields = ["id", "title", "description", "actors", "average_grade"]


class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializer for the Review model
    """
    movie = MovieSerializer(many=False, required=True)

    class Meta:
        model = Review
        fields = "__all__"
