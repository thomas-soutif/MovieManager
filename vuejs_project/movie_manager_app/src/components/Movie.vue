import Vue from 'vue';
<template>

<div>

<v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>Description</v-list-item-title>
      <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title>Acteurs</v-list-item-title>
      <v-list-item-subtitle>{{ actors }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>


</div>



</template>

<script>
export default {
  name: "Movie",
  props:['title','description','actors'],
  data: () => ({

  }),


}
</script>

<style scoped>

</style>