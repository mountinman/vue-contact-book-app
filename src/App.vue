<template>
  <v-app>
     <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">CONTACTBookApp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in dynamicMenu" :key="item.title" :to="item.link" text>
        <v-icon left dark>{{item.icon}}</v-icon>
        <span class="mr-2">{{item.title}}</span>
      </v-btn>
    </v-app-bar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dynamicMenu:[
        {icon: 'mdi-home', title: 'HOME', link: '/'},
        {icon: 'mdi-account-plus',title: 'ADD CONTACT', link: '/add-contact'} 
      ]
    };
  }
};
</script>

<style>

  
</style>
