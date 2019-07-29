<template>
    <div>
        <h2>Listado de Productos</h2>
        <center>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of products" v-bind:key="item['.key']">
                        <td>{{item.nombre}}</td>
                        <td>{{item.cantidad}}</td>
                        <td><button>Eliminar</button></td>
                    </tr> 
                </tbody>
            </table>
        </center>
        <!-- <pre>{{$data}}</pre> -->
    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

export default {
    mounted() {
        dbFirebase.ref('products').once('value')
            .then((snapshot) => this.loadData(snapshot.val()))
            .catch((err) => console.log(err))
    },
    data(){
        return {
            products: []
        }
    },
    methods: {
        loadData(products){
            for(let key in products){
                this.products.push({
                    nombre: products[key].nombre,
                    cantidad: products[key].cantidad
                })
            }
        }
    }
}
</script>
