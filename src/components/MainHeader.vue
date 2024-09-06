<script setup lang="ts">
import LangSwitch from './LangSwitch.vue'
</script>

<template>
  <header class="flex select-none items-center justify-between border-b-1.5 border-gray-2 py-1 pl-3 pr-1">
    <div class="font-bold">
      JSON Baker
    </div>
    <div class="flex gap-2">
      <a class="header-link" href="https://github.com/daidr/json-baker" target="_blank" rel="noopener noreferrer">
        <div class="i-mingcute-github-line" />
      </a>
      <LangSwitch />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-link {
  @apply text-xl p-0.5 rounded-sm;

  &:hover {
    @apply bg-black text-white shadow-md shadow-black/20;
  }
}
</style>
