<template>
<div>
  <v-card
      v-if="reviews.length"
    class="mx-auto"
    max-width="400"
    tile
     v-for="review in reviews"
  >
    <v-list-item link>
      <Review :grade="review.grade" :movie="review.movie"></Review>
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
  import HelloWorld from '../components/HelloWorld'
  import MoviesReviewService from "@/services/MoviesReviewService";
  import axios from "axios";
  import Review from "@/components/Review";

  export default {
    name: 'Home',
    data: () => ({
      reviews: [],
      limit: 1,
      movieReviewService: new MoviesReviewService(1),
      page: 1,
    }),
    components: {
      Review
    },
    async mounted() {
      try{
        this.reviews = await this.movieReviewService.getAllReviews(this.getOffSet());
        console.log(this.reviews)
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
        this.movieReviewService.getAllReviews(this.getOffSet()).then((reviews) => {
          console.log(reviews)
          this.reviews = reviews;
        });
      }
    }

  }
</script>
