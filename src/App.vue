<template>
  <div id="app">
    <div class="container-fluid">
      <br />
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <router-link :to="{name: 'ProductList'}" class="navbar-brand">{{ app_name }}</router-link>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

        <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link :to="{name: 'ProductList'}" class="nav-link">Inicio</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name: 'ProductCreate'}" class="nav-link">Productos</router-link>
				</li>
			</ul>
        </div>
      </nav>

      <br />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ListProducts from "./components/ListProducts.vue";
import CreateProduct from "./components/CreateProduct.vue";
import UpdateProduct from "./components/UpdateProduct.vue";
import ProductEntrada from "./components/ProductEntrada.vue";
import ProductSalida from "./components/ProductSalida.vue";

// Componentes de UI
import ButtonGroupSave from './components/UI/ButtonGroupSave.vue'

export default {
  name: "app",
  components: {
    ListProducts,
    CreateProduct,
    UpdateProduct,
    ProductEntrada,
    ProductSalida,
    ButtonGroupSave
  },
  data() {
    return {
      app_name: "Mi Inventario"
    };
  }
};
</script>
