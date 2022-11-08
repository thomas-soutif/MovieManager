<template>
  <div>
    <v-card
        class="ma-auto"
        max-width="400"
        tile>
      <v-card-actions>
        <v-btn v-if="prevRoute" :to="prevRoute.path">
          <v-icon>mdi-arrow-left</v-icon>
          <v-spacer></v-spacer>

        </v-btn>
      </v-card-actions>
      <Movie v-if="movie" :movie=movie
        @movie-details-update="updateMovieDetails">

      </Movie>

    </v-card>
    <br/>
    <v-card class="ma-auto"
        max-width="400"
        tile>

      <v-card-title> Ajouter une note </v-card-title>
        <AddReview @review-submitted="addAReview"></AddReview>
    </v-card>
  </div>
</template>

<script>
import Movie from "@/components/Movie";
import MovieService from "@/services/MovieService";
import AddReview from "@/components/AddReview";
import ReviewService from "@/services/ReviewService";

export default {
  name: "MovieView",
  components: {Movie, AddReview},
  data: () => ({
    movieId: null,
    movie: null,
    prevRoute: null,
    movie_service : new MovieService()
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
      this.getMovie(this.movieId)
    }

  },
  methods: {
    updateMovieDetails: function (payload) {
      this.movie_service.patchMovieAttributes(this.movie.id, payload.name, payload.value).then((movie) => {
        this.movie = movie
        //Update the movie in the store
        this.$store.dispatch('updateMovie', movie)
      }).catch((err) => {
        console.log(err)
      });

    },
    addAReview : function (grade){
      let review_service = new ReviewService();
      review_service.postGradeForMovie(this.movie.id,grade).then((review) => {
        this.getMovie(this.movieId)
      }).catch((err) => {
        console.log(err)
      });
    },
    getMovie: function (id){
      let movie_service = new MovieService();
        movie_service.getMovie(id).then((movie) => {
          this.movie = movie;
          this.updateMovieInStore(this.movie)
        }).catch((err) => {
          console.log(err)
        });
      },
    updateMovieInStore: function (movie) {
      this.$store.dispatch('updateMovie', movie);
    }

  }
}
</script>

<style scoped>

</style>