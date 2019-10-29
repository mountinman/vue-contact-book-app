<template>
  <v-container fluid>
    <div style="margin-top:90px">
      <v-text-field v-model="search" label="Search Contacts"></v-text-field>
    </div>
    <v-row v-if="search">
      <v-expansion-panels>
        <v-expansion-panel v-for="(contact, i) in showedContacts" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img alt="Avatar" :src="contact.avatar" />
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="contact.name"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text>
              <strong>
                <v-icon>mdi-email</v-icon>
              </strong>
              {{contact.email}}
            </v-card-text>
            <v-card-text>
              <strong>
                <v-icon>mdi-contact-phone-outline</v-icon>
              </strong>
              {{contact.phones[0]}}
            </v-card-text>
            <router-link
              class="view-more-btn"
              :to="{ name: 'ContactDetails', params: { id: contact.id }}"
            >VIEW DETAILS</router-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.contacts = this.$store.getters.getContacts;
  },
  computed: {
    showedContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().match(this.search) || 
        contact.email.toLowerCase().match(this.search);
      });
    }
  },
  methods: {
    
  }
};
</script>

<style>

</style>


