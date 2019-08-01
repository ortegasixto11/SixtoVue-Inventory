<template>
    <div class="container">
        <center>
            <h2>Editar Producto</h2>
        </center>

        <div class="row">
            <div class="col">

                <br>
                <form @submit.prevent="save">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" id="producto_nombre" v-model="product.nombre" />
                    </div>

                    <div class="form-group">
                        <label>Cantidad</label>
                        <input type="text" class="form-control" id="producto_cantidad" v-model="product.cantidad" />
                    </div>

                    <button-group-save></button-group-save>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

import ButtonGroupSave from './UI/ButtonGroupSave.vue'

export default {
    mounted(){
        document.getElementById("producto_nombre").focus()
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
        save(){
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
    },
    components: {
        ButtonGroupSave
    }
}
</script>