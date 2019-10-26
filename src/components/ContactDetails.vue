<template>
  <v-container>
    <v-card class="mx-auto" max-width="744" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">CONTACT DETAILS</div>
          <v-list-item-title class="headline mb-1">{{contact.name}}</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-avatar size="76px">
          <img alt="Avatar" :src="contact.avatar" />
        </v-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn @click="editContact" text>EDIT</v-btn>
        <v-btn @click="deleteContact(contact.id)" text>DELETE</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    contact() {
      return this.$store.getters.getContactDetails(this.id);
    }
  },
  methods: {
    editContact() {
      alert("edit");
    },
    deleteContact (contactId) {
      this.$store.commit("deleteContact", contactId);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.mx-auto {
  margin-top: 100px;
}
</style>