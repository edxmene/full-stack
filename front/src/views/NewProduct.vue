<template>
  <div class="newProduct">
    <h1>New Product</h1>
    <v-text-field label="Code" v-model="code"></v-text-field>
    <v-text-field label="Name" v-model="name"></v-text-field>
    <v-text-field label="Price" v-model="price"></v-text-field>

    <v-combobox
      v-model="categories"
      chips
      clearable
      label="Add categories"
      multiple
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          {{ item }}
        </v-chip>
      </template>
    </v-combobox>
    <v-spacer></v-spacer>
    <v-btn @click="guardarProducto">Guardar</v-btn>

    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="goToProductList">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { createProducts } from "../controllers/product.conroller";

export default {
  data() {
    return {
      code: 0,
      name: "",
      price: 0,
      categories: [],
      snackbar: false,
      text: "",
    };
  },
  methods: {
    remove(item) {
      this.categories.splice(this.categories.indexOf(item), 1);
      this.categories = [...this.categories];
    },
    clearFields() {
      this.code = 0;
      this.name = "";
      this.price = 0;
      this.categories = [];
    },
    guardarProducto() {
      const product = {
        code: this.code,
        name: this.name,
        price: this.price,
        categories: this.categories,
      };
      createProducts(product)
        .then(() => {
          this.text = `Producto ${product.code} guardado correctamente`;
          this.snackbar = true;
        })
        .catch((err) => {
          console.log(err);
        });
      this.clearFields();
    },
    goToProductList() {
      this.snackbar = false;
      this.$router.push("/products");
    },
  },
};
</script>

<style>
.newProduct {
  max-width: 800px;
  margin: 30px auto auto 100px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
</style>