<template>
    <div>
        <h2>Entrada de Producto</h2>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
    },
    data(){
        return {

        }
    },
    methods: {
        saludo(){
            console.log('Sixto')
        }
    }
}
</script>