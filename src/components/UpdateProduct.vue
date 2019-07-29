<template>
    <div>
        <h2>Editar Producto</h2>
        <form @submit.prevent="updateProduct">
            <label for>Nombre</label>
            <input type="text" id="producto_nombre" autofocus="autofocus" />
            <button type="submit">Guardar</button>
        </form>
    </div>
</template

<script>
import { dbFirebase } from "../config/firebase"
let productsDB = dbFirebase.ref("products")
// dbFirebase.ref('products/' + '-LkzNuGxazlmXplF0Prj').on('value', (snapshot) => console.log(snapshot.val()))

export default {
    mounted() {
        document.getElementById("producto_nombre").focus()
        test()
    },
    data(){
        return{
            product: {
                nombre: "",
                cantidad: 0
            }
        }
    },
    methods: {
        updateProduct(){
            console.log('Sixto Update')
        },
        test(){
            <!-- console.log(this.$route.params.id) -->
            console.log('Sixto Update')
        }
    }
};
</script>