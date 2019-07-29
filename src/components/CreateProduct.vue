<template>
  <div>
    <h2>Crear Producto</h2>
    <form @submit.prevent="createProduct">
      <label for>Nombre</label>
      <input type="text" id="producto_nombre" v-model="product.nombre" autofocus="autofocus" />
      <button type="submit">Guardar</button>
    </form>
    
    <div v-show="showNotification">
      <p><b>{{ message }}</b></p>
    </div>

  </div>
</template>

<script>
import { dbFirebase } from "../config/firebase"
let productsDB = dbFirebase.ref("products")

export default {
  mounted() {
    document.getElementById("producto_nombre").focus()
  },
  data() {
    return {
      product: {
        nombre: "",
        cantidad: 0
      },
      showNotification: true,
      message: ''
    };
  },
  methods: {
    createProduct() {
      productsDB
        .push(this.product)
        .then(data => {
          this.product.nombre = "";
          this.message = 'Se agrego el Producto'
          setTimeout(() => {
            this.message = ''
            this.showNotification = false
          }, 1000);
        })
        .catch(err => console.error("Error", err))
    }
  }
};
</script>
