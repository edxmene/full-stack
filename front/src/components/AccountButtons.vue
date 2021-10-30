<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item link>
        <v-list-item-title>Iniciar Sesión</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Perfil</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Cerrar Sesión</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
</style>