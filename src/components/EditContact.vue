<template>
  <div class="add-contact-form">
    <form @submit.prevent="updateContact(contact.id)">
      <v-text-field v-model="contact.name" label="Name" required @submit="$v.name"></v-text-field>
      <v-text-field v-model="contact.email" label="E-mail" required @submit="$v.email"></v-text-field>
      <div v-for="(phone, i) in contact.phones" :key="i">
        <v-text-field v-model="contact.phones[i]" label="Phone" required @submit="$v.phones"></v-text-field>
        <div class="phone-control">
          <span style="cursor:pointer;" @click="removePhone(i)" v-show="i">- remove phone</span>
        </div>
        <v-btn v-show="i <= 0" @click="addPhone(i)">ADD PHONES</v-btn>
      </div>
      <div class="form-btn">
        <v-btn class="mr-4" type="submit">SAVE</v-btn>
        <v-btn @click="cancelUpdate">CANCEL</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    phones: { required }
  },
  props: ["id"],
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.contacts = this.$store.getters.getContactsCopy;
  },
  computed: {
    contact() {
      return this.contacts.find(contact => contact.id == this.id);
    }
  },
  methods: {
    addPhone(index) {
      this.contact.phones.push(this.contact.phones[index].phone);
    },
    updateContact(id) {
      let contact = this.contacts.find(contact => contact.id == id);
      this.$store.commit("updateContact", contact);
      this.$router.push("/");
    },
    removePhone(index) {
      this.contact.phones.splice(index, 1);
    },
    submit() {
      this.$v.$touch();
    },
    cancelUpdate() {
      this.$router.push("/");
      this.$router.go();
    }
  }
};
</script>

<style>
</style>