<script setup>
  const router = useRouter()
  const user = useSupabaseUser()
  // client.auth.onAuthStateChange((event) => {
  //   if (event === 'SIGNED_IN') {
  //     router.push('/')
  //   }
  // })

  onMounted(() => {
    setTimeout(() => {
      if(user.value) {
        router.push('/')
      }  
    }, 0)
  })
</script>

<template>
  <div>
    login
  </div>
</template>
