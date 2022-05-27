<script setup>
import { useMainStore } from '~~/store/store';

const client = useSupabaseClient()
const router = useRouter()
const user = useSupabaseUser()

const mainStore = useMainStore()

// Login method using providers
const login = async (provider) => {
  mainStore.isLoading = true
  const { user, error } = await client.auth.signIn({ provider })
  mainStore.isAuth = !!user
  mainStore.userInfo = user
  if (error) {
    return alert('Something went wrong!')
  }
}

  onMounted(() => {
    if (user.value) {
      router.push('/')
    }
  })
</script>

<template>
  <button type="button" class="btn btn-primary" @click="login('google')">Login</button>
</template>
