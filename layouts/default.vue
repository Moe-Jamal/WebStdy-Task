<template>
  <div class="flex flex-col">
 <div class="fixed top-0 left-0 w-full z-[99] shadow-md transition-all duration-300 h-[88px] flex items-center px-4  bg-white ">
      <div class="container mx-auto flex justify-between items-center h-full">
        <div class="logo">
          <NuxtLink to="/home" class="text-fuchsia-500 text-3xl font-bold">WebStdy</NuxtLink>
        </div>
        <ul class="gap-3 md:flex hidden  items-center  ">
            <li><NuxtLink to="/home" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/categories" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white">Categories</NuxtLink></li>
            <li><NuxtLink to="/products" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white">Products</NuxtLink></li>
            <UIcon name="material-symbols:logout" class="text-[25px] cursor-pointer" @click="logout" />
        </ul>
        <button class="md:hidden flex items-center gap-3  " @click="toggleMenu"> 
          <UIcon :name="isMenuOpen ? 'material-symbols:close' : 'i-lucide-menu'" class="text-[32px] cursor-pointer" />
          <UIcon name="material-symbols:logout" class="text-[32px] cursor-pointer" @click="logout"/>
        </button>
        <div ref="mobileNav" class="absolute top-full left-0 w-full bg-white overflow-hidden shadow-md transition-all duration-300 ease-in-out"
        :style="{ 'max-height': isMenuOpen ? menuHeight + 'px' : '0px' }">
             <ul class="flex flex-col md:hidden text-center py-4 gap-8 ">
            <li><NuxtLink to="/home" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white" @click="toggleMenu">Home</NuxtLink></li>
            <li><NuxtLink to="/categories" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white" @click="toggleMenu">Categories</NuxtLink></li>
            <li><NuxtLink to="/products" class="px-2 py-2 rounded-sm" active-class="bg-fuchsia-500 font-bold text-white" @click="toggleMenu">Products</NuxtLink></li>
        </ul>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-0 grow">
      <slot />
    </div>

    <footer class="bg-gray-100 text-gray-700 py-12 mt-16 text-center md:text-left">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
      
      <div>
        <h2 class="text-2xl font-bold text-fuchsia-500 mb-2">WebStdy</h2>
        <p class="text-sm">
          WebStdy is a software house focused on delivering cutting-edge web, mobile, and marketing solutions.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3 text-fuchsia-500">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/home" class="hover:text-fuchsia-500 transition">Home</NuxtLink></li>
          <li><NuxtLink to="/categories" class="hover:text-fuchsia-500 transition">Categories</NuxtLink></li>
          <li><NuxtLink to="/products" class="hover:text-fuchsia-500 transition">Products</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3 text-fuchsia-500">Contact Us</h3>
        <ul class="space-y-2 text-sm">
          <li>Email: <a href="mailto:info@webstdy.com" class="hover:text-fuchsia-500">info@webstdy.com</a></li>
          <li>Phone: <a href="https://wa.me/966508650666" class="hover:text-fuchsia-500" target="_blank">+966508650666</a></li>
          <li>Address: Cairo, Egypt</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} WebStdy. All rights reserved.
    </div>
  </footer>
  </div>
   
</template>
<script setup>
const auth = authStore()
const isMenuOpen = ref(false)
const menuHeight = ref(0)
const mobileNav = ref(null)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    if(isMenuOpen.value){
        menuHeight.value = mobileNav.value.scrollHeight
    } else {
        menuHeight.value = 0
    }
}

const logout = () => {
  auth.logout()
  navigateTo('/')
}
</script>


<style  scoped>

</style>