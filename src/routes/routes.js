import ListProducts from '../components/ListProducts.vue'
import CreateProduct from '../components/CreateProduct.vue'
import UpdateProduct from '../components/UpdateProduct.vue'
import ProductEntrada from '../components/ProductEntrada.vue'
import ProductSalida from '../components/ProductSalida.vue'

const routes = [
    { path: '/', component: ListProducts, name: 'ProductList' },
    { path: '/product/create', component: CreateProduct, name: 'ProductCreate' },
    { path: '/product/:id/edit', component: UpdateProduct, name: 'ProductUpdate' },
    { path: '/product/:id/in', component: ProductEntrada, name: 'ProductIn' },
    { path: '/product/:id/out', component: ProductSalida, name: 'ProductOut' }
]

export default routes