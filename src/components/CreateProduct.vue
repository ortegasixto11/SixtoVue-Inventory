<template>
  <div class="container">
    <center>
      <h2>Crear Producto</h2>
    </center>

      <div class="row">
        <div class="col">

          <br>
          <form @submit.prevent="save">
            <div class="form-group">
              <label>Nombre</label>
              <input type="text" class="form-control" id="producto_nombre" v-model="product.nombre" />
            </div>

            <button-group-save></button-group-save>
          </form>
          <br>

          <div class="alert alert-success" role="alert" v-show="showNotification">
            {{ message }}
          </div>
        </div>

      </div> <!-- div col -->
    

  </div>
</template>

<script>
import ButtonGroupSave from './UI/ButtonGroupSave.vue'

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
      showNotification: false,
      message: 'Se agrego el Producto'
    };
  },
  methods: {
    save() {
      productsDB
        .push(this.product)
        .then(data => {
          this.product.nombre = ""
          this.showNotification = true
          setTimeout(() => {
            this.showNotification = false
            document.getElementById("producto_nombre").focus()
          }, 1000);
        })
        .catch(err => console.error("Error", err))
    }
  },
    components: {
        ButtonGroupSave
    }

};
</script>
