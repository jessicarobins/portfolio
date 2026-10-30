<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ to: string; current?: boolean }>()
</script>

<template>
  <RouterLink
    :to="to"
    :aria-current="current ? 'page' : undefined"
    class="font-mono text-label leading-relaxed tracking-wide text-site-ink no-underline uppercase hover:text-site-acid hover:underline hover:underline-offset-2.5 tablet:text-xs"
    :class="current ? 'text-site-acid underline underline-offset-2.5' : ''"
  >
    <slot />
  </RouterLink>
</template>
