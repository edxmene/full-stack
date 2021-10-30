<template>
  <div class="products">
    <h1>Product List</h1>
    <v-btn color="primary" to="/products/new">New product</v-btn>
    <v-container>
      <v-row>
        <v-col
          v-for="(product, i) in products"
          :key="product.code"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>Price: {{ product.price }}</v-card-subtitle>
            <div class="categories">
              <v-chip
                class="ma-2"
                color="primary"
                text-color="white"
                v-for="category in product.categories"
                :key="category"
              >
                {{ category }}
              </v-chip>
            </div>
            <v-btn id="btn-card" color="success" @click="editar(product)">
              Editar</v-btn
            >
            <v-btn id="btn-card" color="error" @click="eliminar(product, i)">
              Eliminar</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  getAllProducts,
  deleteProduct,
} from "../controllers/product.conroller";
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    getAllProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    eliminar(prod, i) {
      deleteProduct(prod.code);
      this.products.splice(i, 1);
    },
    editar(prod) {
      console.log(`Editar ${prod.code}`);
    },
  },
};
</script>

<style>
#btn-card {
  margin: 10px;
}
</style>