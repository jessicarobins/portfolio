<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ to: string; current?: boolean }>()
</script>

<template>
  <RouterLink
    :to="to"
    :aria-current="current ? 'page' : undefined"
    class="font-mono text-label leading-relaxed tracking-wide text-site-ink no-underline uppercase hover:text-site-acid hover:underline hover:underline-offset-[5px] tablet:text-xs"
    :class="current ? 'text-site-acid underline underline-offset-[5px]' : ''"
  >
    <slot />
  </RouterLink>
</template>
