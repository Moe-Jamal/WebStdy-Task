<template>
    <Loading :isloading="isloading"/>
    <div class="container mx-auto mt-28">
          <UTable sticky v-if="simpleUserData.length" :data="simpleUserData"  class="flex-1 bg-white shadow-lg rounded-md"  data-aos="slide-down"/>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import type { SimplifiedUser } from '~/types/simpleUserData';
import type { User } from '~/types/user';

    useHead({
    title: 'Categories',
    meta : [
        {name: 'description', content: 'This is Categories Page'}
    ]
    })
const userData = ref<User[]>([])
const simpleUserData = ref<SimplifiedUser[]>([])
const isloading = ref<boolean>(false)
onMounted(async () => {
    try {
        isloading.value = true
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        userData.value = data
        simpleUserData.value = data.map((user:User) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            city: user.address.city,
            companyName: user.company.name
            }))
            console.log(simpleUserData.value);
            
    } catch (error) {
        console.log('Faild to fetch' , error);   
    } finally {
        isloading.value = false
    }
})
</script>

<style  scoped>

</style>