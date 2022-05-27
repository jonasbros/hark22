<script setup>
const client = useSupabaseClient()
const router = useRouter()
// Login method using providers

const logout = async () => {
  const { error } = await client.auth.signOut()

  if (!error) {
    router.push('/login')
  }

}
</script>

<template>
  <div class="btn btn-primary" @click="logout">Logout</div>
</template>
