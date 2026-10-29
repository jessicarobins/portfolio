<script setup lang="ts">
defineProps<{ items: string[]; variant?: 'pill' | 'plain' }>()
</script>

<template>
  <ul
    class="mt-3 flex list-none flex-wrap gap-1.5 p-0"
    :aria-label="variant === 'plain' ? undefined : 'Technologies and skills'"
  >
    <li
      v-for="item in items"
      :key="item"
      class="font-mono text-[0.625rem] leading-relaxed"
      :class="
        variant === 'plain'
          ? 'rounded-full border border-site-line px-2 py-[3px] text-site-muted'
          : 'text-site-ink'
      "
    >
      {{ item }}
    </li>
  </ul>
</template>
