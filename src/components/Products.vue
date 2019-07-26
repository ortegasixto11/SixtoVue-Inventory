<template>
  <div>
    <h2>Crear Producto</h2>
    <form @submit.prevent="createProduct">
      <label for>Nombre</label>
      <input type="text" id="producto_nombre" v-model="product.nombre" autofocus="autofocus" />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'
let productsDB = dbFirebase.ref('products')

export default {
  mounted() {
    document.getElementById('producto_nombre').focus()
  },
  data() {
    return {
      product: {
        nombre: "",
        cantidad: 0
      }
    }
  },
  methods: {
    createProduct() {
      productsDB.push(this.product)
      this.product.nombre = ""
      alert('Se agrego el Producto')
    }
  }
}
</script>
