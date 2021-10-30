<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> {{ title }} </v-list-item-title>
          <v-list-item-subtitle> {{ contact }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <Menu></Menu>
    </v-navigation-drawer>
    <v-app-bar color="white" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <AccountButtons> </AccountButtons>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
import AccountButtons from "./components/AccountButtons.vue";

export default {
  components: {
    Menu,
    AccountButtons,
  },
  name: "App",

  data: () => ({
    drawer: true,
    title: "Codedx Store",
    contact: "edx419@codedx.com",
  }),
};
</script>
