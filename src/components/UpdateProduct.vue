<template>
    <div>
        <h2>Editar Producto</h2>
        <form @submit.prevent="updateProduct">
            <label for>Nombre</label>
            <input type="text" id="producto_nombre" v-model="product.nombre" autofocus="autofocus" />
            <label for>Cantidad</label>
            <input type="text" id="producto_cantidad" v-model="product.cantidad" />
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

export default {
    mounted(){
        dbFirebase.ref(`products/${this.$route.params.id}`)
            .on('value', (snapshot) => this.getProduct(snapshot.val(), this.$route.params.id))
    },
    data(){
        return {
            product: {
                id: '',
                nombre: '',
                cantidad: 0
            }
        }
    },
    methods: {
        updateProduct(){
            dbFirebase.ref(`products/${this.product.id}`)
                .update({
                    nombre: this.product.nombre,
                    cantidad: this.product.cantidad
                })
            this.$router.push({name: 'ProductList'})
        },
        getProduct(product, productId){
            this.product.id = productId
            this.product.nombre = product.nombre
            this.product.cantidad = product.cantidad
        }
    }
}
</script>