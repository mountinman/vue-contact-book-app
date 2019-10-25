<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="numberOfPages()"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageSize'],
    data () {
      return {
        page: 1,
      }
    },
    methods: {
        numberOfPages () {
            return this.$store.getters.getContacts.length / this.pageSize;
        }
    }
  }
</script>

<style>
.theme--light.v-pagination .v-pagination__item{
    outline: none;
}
</style>