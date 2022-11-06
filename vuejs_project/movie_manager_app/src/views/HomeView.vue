<template>
<div>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
     v-for="review in reviews"
  >
    <v-list-item link>
      <Review :grade="review.grade" :moovie="review.moovie"></Review>
    </v-list-item>

  </v-card>

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
    }),
    components: {
      Review
    },
    async mounted() {
      try{
        this.reviews = await MoviesReviewService.getAllReviews();
        console.log(this.reviews)
      }catch (err){
      }
    }
  }
</script>
