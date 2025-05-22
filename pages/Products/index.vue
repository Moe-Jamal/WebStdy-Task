<template>
        <Loading :isloading="isloading"/>
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-28">
            <ProductCard :products="products"/>
         </div>
</template>

<script setup lang="ts" >
import ProductCard from '~/components/ProductCard.vue'
import type { Product } from '~/types/product'
const { $axios } = useNuxtApp()
const products = ref<Product[]>([])
const isloading = ref<boolean>(false)
onMounted (async () => {
    try {
        isloading.value = true
        const {data} = await $axios.get('/api/v1/products')
        products.value = data.filter((prod:Product) => prod.images.length >= 1)
        console.log(products.value);
    } catch (error) {
        console.log('Faild To Fetch Data', error);
    } finally {
        isloading.value = false
    }
})
</script>

<style  scoped>

</style>