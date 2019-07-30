<template>
    <div class="container">
        <center>
            <h2 class="title">Listado de Productos</h2>
            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of products" v-bind:key="item['.key']">
                        <td>{{item.nombre}}</td>
                        <td>{{item.cantidad}}</td>
                        <td><button class="button is-danger" @click="deleteProduct(item.id)">Eliminar</button></td>
                        <td> <router-link :to="{name: 'ProductUpdate', params: { id: item.id }}" class="button is-warning">Editar</router-link> </td>
                        <td> <router-link :to="{name: 'ProductIn', params: { id: item.id }}" class="button is-link">Entrada</router-link> </td>
                        <td> <router-link :to="{name: 'ProductOut', params: { id: item.id }}" class="button is-link">Salida</router-link> </td>
                    </tr> 
                </tbody>
            </table>
        </center>
        <br>
        <!-- <pre>{{$data}}</pre> -->
    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

export default {
    mounted() {
        dbFirebase.ref('products').on('value', (snapshot) => this.loadData(snapshot.val()))
    },
    data(){
        return {
            products: []
        }
    },
    methods: {
        loadData(products){
            this.products = []
            for(let key in products){
                this.products.push({
                    id: key,
                    nombre: products[key].nombre,
                    cantidad: products[key].cantidad
                })
            }
            this.products = this.products.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
        },
        deleteProduct(productId){
            if(confirm('Eliminar Producto?')){
                dbFirebase.ref('products').child(productId).remove()
            }
        }
    }
}
</script>
