from rest_framework import routers
from django.urls import include, path

from movie_app.api import views
app_name = "api"
router = routers.DefaultRouter()

router.register('actors', views.ActorViewSet)
router.register('movies', views.MovieViewSet)
router.register('reviews', views.ReviewViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

