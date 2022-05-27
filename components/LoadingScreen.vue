<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~~/store/store';

const { isLoading } = storeToRefs(useMainStore())
</script>

<template>
  <div v-if="isLoading" class="fixed top-0 bottom-0 right-0 left-0 bg-base-100 z-50">
    <progress class="progress progress-primary w-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></progress>
  </div>
</template>
