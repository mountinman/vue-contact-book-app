<template>
  <div class="add-contact-form">
    <form @submit.prevent="addContact">
      <v-text-field
        v-model="contact.name"
        :error-messages="nameErrors"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="contact.email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <div v-for="(phone, i) in contact.phones" :key="i">
        <v-text-field
          v-model="contact.phones[i]"
          :error-messages="phoneErrors"
          label="Phone"
          required
          @input="$v.phones.$touch()"
          @blur="$v.phones.$touch()"
        ></v-text-field>
        <div class="phone-control">
          <span
            style="cursor:pointer;"
            @click="addPhone(i)"
            v-show="i == contact.phones.length - 1"
          >+ add phone</span>
          <span
            style="cursor:pointer;"
            @click="removePhone(i)"
            v-show="i || (!i && contact.phones.length > 1)"
          >- remove phone</span>
        </div>
      </div>
      <div class="form-btn">
        <v-btn class="mr-4" type="submit">SAVE</v-btn>
        <v-btn @click="clear">CLEAR</v-btn>
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
    this.contacts = this.$store.getters.getContacts;
  },
  computed: {
    contact() {
      return this.contacts.find(contact => contact.id == this.id);
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phones.$dirty) return errors;
      !this.$v.phones.required && errors.push("Phone is required");
      return errors;
    }
  },
  methods: {
    addPhone(index) {
      this.contact.phones.push(this.contact.phones[index].phone);
    },
    removePhone(index) {
      this.contact.phones.splice(index, 1);
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.phones = [""];
    }
  }
};
</script>

<style>
</style>