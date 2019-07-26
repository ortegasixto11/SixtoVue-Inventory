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
// import axios from 'axios'

export default {
    mounted() {
        // axios.get('https://miinventario-675b5.firebaseio.com/products.json')
        //     .then(function(res){
        //         console.log(res.data)
        //         this.products.push(res.data[0])
        //     })
        //     .catch(function(err){
        //         console.log(err)
        //     })
        //this.products = dbFirebase.ref('products')
        
    },
    
    data(){
        return {
            products: []
        }
    },
    firebase: {
        products: dbFirebase.ref('products')
    },
    
}
</script>
