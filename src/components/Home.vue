<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel 
        v-for="(contact, i) in showedContacts" 
        :showedContacts="showedContacts"
        :currentPage="currentPage"
        :key="i" hide-actions>
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
      currentPage: 0,
      pageSize: 4,
      showedContacts: []
    };
  },
  beforeMount: function () {
    this.updateShowedContacts();
  },
  methods: {
    updatePage (pageNumber) {
      this.currentPage = pageNumber;
      this.updateShowedContacts();
    },
    updateShowedContacts () {
      this.showedContacts = this.contacts
      .slice(this.currentPage * this.pageSize, 
      (this.currentPage * this.pageSize) + this.pageSize);
      if (this.showedContacts.length == 0 && this.currentPage > 0) {
        this.updatePage (this.currentPage - 1)
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
  padding: 6px;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  margin-bottom: 10px;
}
</style>