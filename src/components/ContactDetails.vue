<template>
  <div style="margin-top:100px;">
    <p>contact-details</p>
    <p>{{contact.name}}</p>
  </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        contact () {
            return this.$store.getters.getContactDetails(this.id)
        }
    }
};
</script>

<style>
</style>