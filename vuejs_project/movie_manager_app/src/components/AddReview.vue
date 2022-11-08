import Vue from 'vue';
<template>

<div>

  <v-text-field
      v-model="grade"
      label="Rating"
      type="number"
      min="1"
      max="5"
      required>
  </v-text-field>
  <v-btn
      color="success"
      class="mt-5"
      @click="emitReview">Ajouter la note</v-btn>


</div>



</template>

<script>

export default {
  name: "AddReview",
  props:[],
  data: () => ({
    grade : null
  }),
  methods:{
    emitReview(){
      this.$emit('review-submitted', this.grade)
    }
  }

}
</script>

<style scoped>

</style>