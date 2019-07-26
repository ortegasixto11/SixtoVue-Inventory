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
        <pre>{{$data}}</pre>
    </div>
</template>

<script>
import {dbFirebase} from '../config/firebase'

export default {
    mounted() {
        //this.products = dbFirebase.ref('products')
        
        let products = {}
        let instanceDB = dbFirebase.ref('products')
        instanceDB.once('value')
            .then(function(snapshot){
                // console.log(snapshot.val())
                // this.products = snapshot.val()
                console.log(this.products)
            })
            .catch(function(err){
                console.log(err)
            })
    },
    data(){
        return {
            products: {}
        }
    }
}
</script>
