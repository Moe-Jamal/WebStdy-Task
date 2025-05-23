<template>
       <div class="p-3 rounded-md bg-white shadow-md h-full container mx-auto mt-28">
        <div class="grid lg:grid-cols-2 gap-10">
            <div class="p-5" data-aos="fade-up-right">
                <UCarousel
                    ref="carousel"
                    v-slot="{ item }"
                    arrows
                    :items="product.images"
                    :prev="{ onClick: onClickPrev }"
                    :next="{ onClick: onClickNext }"
                    class="w-full max-w-lg md:max-w-xl  mx-auto"
                    @select="onSelect"
                    :loop="true"
                    :watch-resize="true"
                    
                    >
                    <img :src="item"  class="rounded-lg w-full">
                </UCarousel>

                <div class="flex gap-2 justify-between pt-4 max-w-[180px] sm:max-w-[250px] mx-auto">
                    <div
                        v-for="(item, index) in product.images"
                        :key="index"
                        class=" size-22 opacity-25 hover:opacity-100 transition-opacity"
                        :class="{ 'opacity-100': activeIndex === index }"
                        @click="select(index)"
                    >
                        <img :src="item"  class="rounded-lg w-full ">
                    </div>
                </div>
            </div>
            <div class="p-5" data-aos="fade-down-left">
                <h2 class="text-4xl my-7">
                    {{ product.title }}
                </h2>
                <p class="text-xl my-7">{{ product.price }}$</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex gap-2 items-center text-white text-lg bg-fuchsia-500 hover:bg-fuchsia-700 duration-200 transition-colors cursor-pointer  py-3 px-4  rounded-lg">
                    <UIcon name="mdi:cart"/>
                    <span>Add To Cart</span>
                </button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';



const { product } = defineProps<{product : Product}>()
const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}


</script>

<style scoped>

</style>