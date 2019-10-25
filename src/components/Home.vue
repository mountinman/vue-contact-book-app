<template>
  <p>Home</p>
</template>

<script>
export default {
  computed:{
    contacts () {
      return this.$store.getters.getContacts
    }
  }
}
</script>

<style>

</style>