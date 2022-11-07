<template>
 <div>
   Afficher le movie {{movie}}

 </div>
</template>

<script>
import Movie from "@/components/Movie";
export default {
  name: "MovieView",
  components: {Movie},
  data: () => ({
    movieId: null,
    movie: null,
  }),
  async created() {
    this.movieId = this.$route.params.id;
    this.movie = this.$store.getters.getMovie(this.movieId)
    console.log(this.movie)



  },
}
</script>

<style scoped>

</style>