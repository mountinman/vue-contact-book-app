<template>
  <div class="text-center">
    <v-pagination @input="pageNumber" v-model="page" :length="numberOfPages()" circle></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageSize"],

  data() {
    return {
      page: 1
    };
  },
  methods: {
    numberOfPages() {
      return Math.ceil(this.$store.getters.getContacts.length / this.pageSize);
    },
    pageNumber() {
      this.$emit("clicked", this.page);
    }
  }
};
</script>

<style>
.theme--light.v-pagination .v-pagination__item {
  outline: none;
}
.theme--light.v-pagination .v-pagination__navigation {
  outline: none;
}
</style>