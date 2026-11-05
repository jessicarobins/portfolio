<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="relative aspect-[1.9/1] w-full overflow-hidden border border-site-bg/10">
    <img
      :src="src"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover object-[center_95%]"
      loading="lazy"
    />
  </div>
</template>
