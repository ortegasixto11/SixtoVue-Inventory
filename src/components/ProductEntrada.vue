<template>
    <div class="container">
        <center>
            <h2 class="title">Entrada de Producto</h2>
            <h3 class="subtitle"> {{ product.nombre }} </h3>
        </center>

        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <form @submit.prevent="save">
                    <div class="field">
                        <label class="label">Cantidad</label>
                        <div class="control">
                            <input type="text" class="input" id="producto_cantidad" v-model="product.cantidad" />
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-success" type="submit">Guardar</button>
                            <router-link :to="{name: 'ProductList'}" class="button is-link">Regresar</router-link>
                        </div>
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
                    cantidad: parseFloat(this.product.cantidad_db) + parseFloat(this.product.cantidad)
                })
            this.$router.push({name: 'ProductList'})
        }
    }
}
</script>