<template>
  <div id="app">
    <div class="container is-fluid">
      <br>
      <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link :to="{name: 'ProductList'}" class="navbar-item">{{ app_name }}</router-link>
          <router-link :to="{name: 'ProductList'}" class="navbar-item">Inicio</router-link>
          <router-link :to="{name: 'ProductCreate'}" class="navbar-item">Productos</router-link>

          <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarMenuItems">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> -->
        </div> <!-- end .navbar-brand -->

        <!-- Navbar Menu -->
        <!-- <div id="navbarMenuItems" class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{name: 'ProductList'}" class="navbar-item">Inicio</router-link>
            <router-link :to="{name: 'ProductCreate'}" class="navbar-item">Productos</router-link>
          </div>
        </div> -->
      </nav>

      <br>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import ListProducts from './components/ListProducts.vue'
import CreateProduct from './components/CreateProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'
import ProductEntrada from './components/ProductEntrada.vue'
import ProductSalida from './components/ProductSalida.vue'

export default {
  name: 'app',
  components: {
    ListProducts,
    CreateProduct,
    UpdateProduct,
    ProductEntrada,
    ProductSalida
  },
  data () {
    return {
      app_name: 'Mi Inventario'
    }
  }
}
</script>
