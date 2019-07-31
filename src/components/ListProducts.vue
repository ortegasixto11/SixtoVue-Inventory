<template>
    <div class="container">
        <center>
            <h2>Listado de Productos</h2>
            <div class="table-responsive-sm">
                <table class="table table-bordered table-sm">
                    <thead class="bg-info">
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
                            <td> <button class="btn btn-danger" @click="deleteProduct(item.id)">Eliminar</button> </td>
                            <td> <router-link :to="{name: 'ProductUpdate', params: { id: item.id }}" class="btn btn-warning">Editar</router-link> </td>
                            <td> <router-link :to="{name: 'ProductIn', params: { id: item.id }}" class="btn btn-info">Entrada</router-link> </td>
                            <td> <router-link :to="{name: 'ProductOut', params: { id: item.id }}" class="btn btn-info">Salida</router-link> </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
            
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
