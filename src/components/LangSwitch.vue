<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useInitI18n'

const lang = useLocale()
const i18n = useI18n()
</script>

<template>
  <select v-model="lang">
    <option v-for="item of i18n.availableLocales" :key="item">
      {{ item }}
    </option>
  </select>
</template>

<style scoped>
select {
  @apply rounded-sm;

  &:hover,
  &:focus {
    @apply bg-black text-white shadow-md shadow-black/20;
  }
}
</style>
