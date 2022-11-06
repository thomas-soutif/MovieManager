import Vue from 'vue';
<template>

<div>

  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>Moovie Name here{{moovie}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>Grade</v-list-item-title>
      <v-list-item-subtitle>{{ grade }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>




</div>



</template>

<script>
export default {
  name: "Review",
  props:['moovie','grade'],
  data: () => ({

  }),


}
</script>

<style scoped>

</style>