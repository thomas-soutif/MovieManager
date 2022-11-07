<template>
<div>
  <v-card
      v-if="movies.length"
    class="mx-auto"
    max-width="400"
    tile
     v-for="movie in movies"
  >
    <v-list-item link :to="{'name' : 'movie', 'params' : {id : movie.id}}">
      <v-list-item-content>
        <v-list-item-title>{{movie.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-card>
  <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
</div>

</template>
import axios from 'axios';
<script>

  import MoviesService from "@/services/MovieService";
  import Movie from "@/components/Movie";

  export default {
    name: 'Home',
    data: () => ({
      movies: [],
      limit: 2,
      movieService: null,
      page: 1,
    }),
    components: {
      Movie
    },
    async mounted() {
      this.movieService = new MoviesService(this.limit)
      try{
        this.movies = await this.movieService.getAllMovies(this.getOffSet());
        console.log(this.movies)
      }catch (err){
        console.log(err);
      }
    },
    methods: {
      getOffSet : function (){
        return (this.page - 1) * this.limit;
      },
    },
    watch :{
      page : function (){
        console.log("hey")
        this.movieService.getAllMovies(this.getOffSet()).then((movies) => {
          console.log(movies)
          this.movies = movies;
        });
      }
    }

  }
</script>
