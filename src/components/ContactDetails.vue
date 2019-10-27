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
        <div>
          <v-btn class="mr-4" @click="editContact" text>EDIT</v-btn>
          <v-btn class="mr-4" @click="deleteContact" text>DELETE</v-btn>
        </div>
        <v-btn class="mr-4" @click="backToAllContacts" text>BACK TO ALL CONTACTS</v-btn>
      </v-card-actions>
    </v-card>
    <div class="alert">
    <v-alert
      v-model="alert"
      elevation="2"
      colored-border
      icon="mdi-delete-forever"
    >
      Are you sure you want to delete user <strong>{{contact.name}}</strong>?
      <v-btn @click="confirmDelete(contact.id)">CONFIRM</v-btn>
    </v-alert>

   
  </div>
  </v-container>
  
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      alert: false,
      contacts: []
    };
  },
  created() {
    this.contacts = this.$store.getters.getContacts;
  },
  computed: {
    contact() {
      return this.contacts.find(contact => contact.id == this.id);
    }
  },
  methods: {
    backToAllContacts() {
      this.$router.push('/')
    },
    editContact() {
      alert("edit");
    },
    deleteContact() {
      this.alert = true;
      
      
    },
    confirmDelete (contactId) {
      this.alert = false;
       this.$store.commit("deleteContact", contactId);
      
        this.$router.push("/");
      
    }
  }
};
</script>

<style>
.alert{
  margin-top: 50px;
}
.v-card__actions{
  display: flex;
  justify-content: space-between;
}
.mx-auto {
  margin-top: 100px;
}
</style>