<script setup lang="ts">
defineProps<{ items: string[]; variant?: 'pill' | 'plain' }>()
</script>

<template>
  <ul
    class="mt-6 flex list-none flex-wrap gap-3 p-0"
    :aria-label="variant === 'plain' ? undefined : 'Technologies and skills'"
  >
    <li
      v-for="item in items"
      :key="item"
      class="font-mono text-label leading-relaxed"
      :class="
        variant === 'plain'
          ? 'rounded-full border border-site-line px-4 py-2 text-site-muted'
          : 'text-site-ink'
      "
    >
      {{ item }}
    </li>
  </ul>
</template>
