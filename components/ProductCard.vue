<template>
    <UCard  v-for="product in products" :key="product.id" class="w-full" :variant="'outline'" :ui="{header : 'p-0 sm:px-0'}" data-aos="zoom-in-up">
    <template #header>
        <div class='overflow-hidden relative img-holder'>
            <div class="p-4">
                <img :src="product.images[0]" :alt="product.title" class="w-full  block rounded-t ">
            </div>
            <div class="layer grid place-items-center w-full h-0 bg-gray-900 opacity-80 absolute bottom-0 left-0 duration-300 transition-all rounded-t-lg">
                <ul class="wrapper">
              <li id="search-icon" class="icon search">
                <span class="tooltip">Deatils</span>
                <NuxtLink  :to="`/products/${product.id}`" class="grid place-items-center">
                    <UIcon name="material-symbols:search-rounded" class="text-[28px] cursor-pointer" /></NuxtLink>
              </li>
            </ul>
            </div>
        </div>
    </template>
          <h2 class="truncate font-bold">{{ product.title }}</h2>
    <template #footer>
        <div class="flex justify-between items-center">
            <p class="text-2xl ">{{ product.price }}$</p>
            <button class="bg-fuchsia-500 text-white p-3 rounded-md cursor-pointer hover:bg-fuchsia-700 duration-200 transition-colors">Add to Cart</button>
        </div>
    </template>
    </UCard>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

    const {products} = defineProps<{products : Product[]}>()
</script>

<style scoped>
.img-holder:hover .layer {
    height: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding-left: 0;
}

.wrapper .icon {
  position: relative;
  border-radius: 50%;
  margin: 5px;
  width: 40px;
  height: 40px;
  color: #e12afb;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #e12afb;
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #fff;
  bottom: 27px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: 50px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .search:hover,
.wrapper .search:hover .tooltip,
.wrapper .search:hover .tooltip::before {
  background: #e12afb;
  color: #fff;
}
</style>