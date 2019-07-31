<template>
    <div class="container">
        <center>
            <h2>Salida de Producto</h2>
            <h3> {{ product.nombre }} </h3>
        </center>

        <div class="row">
            <div class="col">

                <br>
                <form @submit.prevent="save">
                    <div class="form-group">
                        <label>Cantidad</label>
                        <input type="text" class="form-control" id="producto_cantidad" v-model="product.cantidad" />
                    </div>

                    <div class="form-group">
                        <button class="btn btn-success" type="submit">Guardar</button>
                        <router-link :to="{name: 'ProductList'}" class="btn btn-secondary">Regresar</router-link>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

export default {
    mounted(){
        document.getElementById('producto_cantidad').focus()
        dbFirebase.ref(`products/${this.$route.params.id}`)
            .on('value', (snapshot) => this.getProduct(snapshot.val(), this.$route.params.id))
    },
    data(){
        return {
            product: {
                id: '',
                nombre: '',
                cantidad_db: 0,
                cantidad: 0
            }
        }
    },
    methods: {
        getProduct(product, product_id){
            this.product.id = product_id
            this.product.nombre = product.nombre
            this.product.cantidad_db = product.cantidad
        },
        save(){
            dbFirebase.ref(`products/${this.product.id}`)
                .update({
                    cantidad: parseFloat(this.product.cantidad_db) - parseFloat(this.product.cantidad)
                })
            this.$router.push({name: 'ProductList'})
        }
    }
}
</script>