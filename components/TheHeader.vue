<script setup>
import { useMainStore } from '~~/store/store';

const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const mainStore = useMainStore()
const avatar = computed(() => user.value?.user_metadata?.avatar_url ?? null)
const isLoggedIn = computed(() => !!user.value)

const logout = async () => {
  mainStore.isLoading = true

  const { error } = await client.auth.signOut()
  mainStore.isLoading = false

  if (!error) {
    router.push('/login')
  }
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink
        to="/"
        class="btn btn-ghost normal-case text-xl"
      >
        HARK
      </NuxtLink>      
    </div>

    <div v-show="!isLoggedIn">
      <LoginBtn class="btn-sm"/>
    </div>

    <div class="flex-none gap-2" v-show="isLoggedIn">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>

      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li @click="logout">
            <a>Logout</a>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="avatar" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li @click="logout">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
