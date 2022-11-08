<template>
  <div>
    <v-card
        class="ma-auto"
        max-width="400"
        tile>
      <v-card-actions>
        <v-btn :to="prevRoute.path">
          <v-icon>mdi-arrow-left</v-icon>
          <v-spacer></v-spacer>

        </v-btn>
      </v-card-actions>
      <Movie v-if="movie" :movie=movie
        @movie-details-update="updateMovieDetails">

      </Movie>

    </v-card>

  </div>
</template>

<script>
import Movie from "@/components/Movie";
import MovieService from "@/services/MovieService";

export default {
  name: "MovieView",
  components: {Movie},
  data: () => ({
    movieId: null,
    movie: null,
    prevRoute: null,
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    });
  },
  async created() {
    this.movieId = this.$route.params.id;
    this.movie = this.$store.getters.getMovie(this.movieId)

    if (this.movie == null) {
      //If the movie have not been found in the store, we get it from the API
      let movie_service = new MovieService();
      movie_service.getMovie(this.movieId).then((movie) => {
        this.movie = movie;
      }).catch((err) => {
        if (err.response.status === 404) {
          //If the movie have not been found in the API, we redirect to the home page
          this.$router.push({name: 'home'});
        } else {
          //We could display that an technical error has occurred
        }
      });
    }

  },
  methods: {
    updateMovieDetails: function (payload) {
      let movie_service = new MovieService();
      movie_service.patchMovieAttributes(this.movie.id, payload.name, payload.value).then((movie) => {
        this.movie = movie
      }).catch((err) => {
        console.log(err.response)
      });

    }
  }
}
</script>

<style scoped>

</style>