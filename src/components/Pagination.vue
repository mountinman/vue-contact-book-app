<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
    data () {
      return {
        page: 1,
      }
    },
  }
</script>

<style>
.theme--light.v-pagination .v-pagination__item{
    outline: none;
}
</style>