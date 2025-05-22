<template>
  <UApp :toaster="{ position: 'top-right', duration: 2000 }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>

</script>

<style>
 body {
  background-color: #f9fafb;
 }
</style>