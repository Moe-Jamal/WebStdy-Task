<template>
    <Loading :isloading="isloading"/>
    <div class="mb-10">
        <ProductDetails v-if="product" :product="product"/>
        <div v-if="relatedProducts?.length" class="related-products container mx-auto">
            <h2 class="font-bold text-3xl mt-20 mb-10">Related Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <ProductCard  :products="relatedProducts"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Product} from '~/types/product'

    const { $axios } = useNuxtApp()
    const {id} = useRoute<string>().params
    const isloading = ref<boolean>(false)
    const { data: product, error } = await useAsyncData<Product>(`product-${id}`, async () => {
    try {
        isloading.value = true
        const res = await $axios.get(`/api/v1/products/${id}`)
        return res.data
    } catch (e) {
        throw createError({
        statusCode: 404,
        statusMessage: 'Product Not Found',
        fatal: true
        })
    } finally {
        isloading.value = false
    }
    })

    const { data: relatedProducts } = await useAsyncData<Product[]>('related-products', async () => {
    const res = await $axios.get(`/api/v1/products/${id}/related`)
    return res.data.slice(0, 5)
    })
</script>

<style  scoped>

</style>