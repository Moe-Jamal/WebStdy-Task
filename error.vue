<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="text-center max-w-md">
        <p class="text-7xl font-black text-fuchsia-500  mb-2 drop-shadow-sm">
        {{ error.statusCode }}
      </p>
        <h1 class="text-6xl font-extrabold text-gray-900 mb-4">Oops!</h1>
        <p class="text-xl text-gray-600 mb-6">Something went wrong. <span class="italic block mt-2">{{ error.message }}</span></p>
        <button
            @click="handelClearError"
            class="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-700 rounded-2xl font-semibold shadow-md text-white transition-colors duration-300 cursor-pointer">
            Go Home
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
    const router = useRouter()
    defineProps(['error'])
    const handelClearError = () => {
        router.push('/')
    }
</script>

<style scoped>

</style>
