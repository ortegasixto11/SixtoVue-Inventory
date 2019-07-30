<template>
  <div class="container">
    <center>
      <h2 class="title">Crear Producto</h2>
    </center>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">

          <form @submit.prevent="save">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input type="text" class="input" id="producto_nombre" v-model="product.nombre" />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-success" type="submit">Guardar</button>
                <router-link :to="{name: 'ProductList'}" class="button is-link">Regresar</router-link>
              </div>
            </div>
          </form>
          <br>

          <article class="message is-info" v-show="showNotification">
            <div class="message-header">
              <p>Info</p>
            </div>

            <div class="message-body">
              {{ message }}
            </div>
          </article>
        </div>

      </div> <!-- div columns -->
    

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
  }
};
</script>
