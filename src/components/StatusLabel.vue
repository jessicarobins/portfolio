<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-block font-mono text-label leading-relaxed tracking-status text-site-muted uppercase"
  >
    {{ label }}
  </span>
</template>
