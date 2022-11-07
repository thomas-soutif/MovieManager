import Vue from 'vue';
<template>

<div>

  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{movie.title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>



</div>



</template>

<script>
export default {
  name: "Movie",
  props:['movie','grade'],
  data: () => ({

  }),


}
</script>

<style scoped>

</style>