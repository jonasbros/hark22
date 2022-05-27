import { useMainStore } from '~~/store/store';

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()
  const mainStore = useMainStore()
  console.log(user)
  if (user) {
    mainStore.isAuth = !!user
    mainStore.userInfo = user
  } else {
    return navigateTo('/login')
  }
})