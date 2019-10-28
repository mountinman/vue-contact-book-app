<template>
  <v-container>
    <v-card class="mx-auto" max-width="744" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">CONTACT DETAILS</div>
          <v-list-item-title class="headline mb-1">{{contact.name}}</v-list-item-title>
          <v-list-item-subtitle v-for="(phone, i) in contact.phones" :key="i">
            <span v-if="contact.phones.length <= 1">Phone: {{phone}}</span>
           <span v-if="contact.phones.length > 1">Phone{{i + 1}}: {{phone}}</span> 
          </v-list-item-subtitle>
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
      <v-alert v-model="alert" elevation="2" colored-border>
        <p>Are you sure you want to delete user {{contact.name}}?</p>
        <div>
          <v-btn style="margin-right:10px;" @click="confirmDelete(contact.id)">CONFIRM</v-btn>
          <v-btn @click="cancelDelete">CANCEL</v-btn>
        </div>
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
    cancelDelete() {
      this.alert = false;
    },
    backToAllContacts() {
      this.$router.push("/");
    },
    editContact() {
      alert("edit");
    },
    deleteContact() {
      this.alert = true;
    },
    confirmDelete(contactId) {
      this.alert = false;
      this.$store.commit("deleteContact", contactId);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.v-alert__content {
  display: flex;
  justify-content: space-between;
}
.alert {
  margin-top: 50px;
}
.v-card__actions {
  display: flex;
  justify-content: space-between;
}
.mx-auto {
  margin-top: 100px;
}
</style>