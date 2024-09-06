<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainLayout from './components/MainLayout.vue'
import MainSidebar from './components/LayoutSidebar.vue'
import { useInitI18n } from './composables/useInitI18n'

useInitI18n()
</script>

<template>
  <MainHeader />
  <MainLayout />
</template>

<style scoped></style>
