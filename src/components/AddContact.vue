<template>
  <div class="add-contact-form">
    <form @submit.prevent="addContact">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
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
    name: { required, maxLength: maxLength(10) },
    email: { required, email }
  },

  data: () => ({
    name: "",
    email: ""
  }),

  computed: {
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
    }
  },

  methods: {
    addContact() {
      this.$store.commit("addContact");
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    }
  }
};
</script>

<style>
.form-btn{
  margin-top: 35px;
}
.add-contact-form {
  width: 600px;
  margin: 150px auto;
  padding: 50px;
  border: 1px solid darkgray;
  border-radius: 10px;
}
</style>