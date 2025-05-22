<template>
  <div class="flex justify-center items-center h-screen flex-col login">
    <UForm :schema="schema" :state="user" class="space-y-4 px-8 w-full max-w-[400px]" @submit="onSubmit"  data-aos="zoom-in-up" data-aos-duration="1500">
    <h2 class="text-center text-3xl my-4 text-white">Login</h2>
    <UFormField label="Email" name="email"  :ui="{label: 'text-white'}" >
      <UInput v-model="user.email" class="w-full" />
    </UFormField>

    <UFormField label="Password" name="password" :ui="{label: 'text-white'}">
      <UInput
    v-model="user.password"
    :type="show ? 'text' : 'password'"
    :ui="{ trailing: 'pe-1' }"
    class="w-full"
  >
    <template #trailing>
      <UButton
        color="neutral"
        variant="link"
        size="sm"
        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        :aria-label="show ? 'Hide password' : 'Show password'"
        :aria-pressed="show"
        aria-controls="password"
        @click="show = !show"
      />
    </template>
  </UInput>
    </UFormField>
    <UButton type="submit" class="bg-fuchsia-500 hover:bg-fuchsia-600 text-white w-full py-2 cursor-pointer" >
      <span class="text-center w-full">Submit</span>
    </UButton>
  </UForm>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'
import { authStore } from '~/stores/auth'

definePageMeta({
  layout: false
})
const schema = object({
  email: string().required('Required'),
  password: string().required('Required')
})

type Schema = InferType<typeof schema>

const user = ref({
  email: undefined,
  password: undefined
})
const show = ref(false)
const router = useRouter()
const toast = useToast()
const auth = authStore()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { email, password } = event.data
  const valid = auth.login(email, password) 
  if(valid) {
     toast.add({ title: 'Login Successful', description: 'You have been logged in successfully', color: 'success' })
    setTimeout(() => {
        router.push('/home')
    }, 2000);
  } else {
     toast.add({ title: 'Access Denied', description: 'Invalid credentials.', color: 'error' })
  }
 
}
 onMounted(() => {
  if (auth.isLoggedIn) {
    router.push('/home')
  }
 })
</script>

<style  scoped>
.login {
background-color: #330033;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
z-index: -1;
}
</style>