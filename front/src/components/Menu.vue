<template>
  <v-list dense nav>
    <div v-for="item in items" :key="item.title">
      <v-list-item link :to="item.url" v-if="item.show">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", url: "/", show: true },
        {
          title: "Products",
          icon: "mdi-image",
          url: "/products",
          show: true,
        },
        { title: "About", icon: "mdi-help-box", url: "/about", show: true },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>