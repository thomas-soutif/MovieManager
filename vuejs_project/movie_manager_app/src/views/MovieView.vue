<template>
 <div>
   Afficher le movie {{movieId}}
 </div>
</template>

<script>
export default {
  name: "MovieView",
  data: () => ({
    movieId: null,
  }),
  async created() {
    this.movieId = this.$route.params.id;
  },
}
</script>

<style scoped>

</style>