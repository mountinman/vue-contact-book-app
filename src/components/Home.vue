<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(contact, i) in showedContacts"
          :showedContacts="showedContacts"
          :currentPage="currentPage"
          :key="i"
          hide-actions
        >
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
              <strong>Email:</strong>
              {{contact.email}}
            </v-card-text>
            <v-card-text>
              <strong>Address:</strong>
              {{contact.address}}
            </v-card-text>
            <router-link
              :to="{ name: 'ContactDetails', params: { id: contact.id }}"
            >VIEW MORE</router-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <pagination @clicked="onChildClick" :pageSize="pageSize" />
  </v-container>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      pageSize: 4,
      currentPage: 0,
      showedContacts: []
    };
  },
  components: {
    Pagination
  },
  beforeMount: function() {
    this.updateShowedContacts();
  },
  methods: {
    onChildClick(value) {
      let $this = this;
      $this.currentPage = value - 1;
      this.updateShowedContacts();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateShowedContacts();
    },
    updateShowedContacts() {
      this.showedContacts = this.contacts.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );
      if (this.showedContacts.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  },
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    }
  }
};
</script>

<style>
.v-item-group {
  margin-top: 50px;
}
.v-card__text,
.v-card__title {
  padding: 6px !important;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  margin-bottom: 10px;
}
</style>