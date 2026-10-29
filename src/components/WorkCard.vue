<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Text from './Text.vue'
import StatusTag from './StatusTag.vue'

defineProps<{
  index: number
  company: string
  kind: string
  title: string
  summary: string
  to: string
  status?: string
  featured?: boolean
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="group relative block min-h-[13rem] border-b border-site-line py-9 pr-16 text-site-ink no-underline hover:[&_.work-card-title]:text-site-acid"
    :class="featured ? 'bg-gradient-to-br from-transparent via-transparent to-site-purple/10' : ''"
  >
    <div
      class="flex justify-between gap-6 font-mono text-[0.625rem] leading-relaxed tracking-wide text-site-acid uppercase"
    >
      <span class="text-xs">{{ String(index).padStart(2, '0') }}</span>
      <span class="text-right text-site-purple">{{ kind }}</span>
    </div>
    <StatusTag v-if="status" :label="status" class="mt-4" />
    <Text
      as="h3"
      variant="section-title"
      class="work-card-title mt-12 text-[clamp(1.4375rem,3vw,2.125rem)] leading-[0.98] tracking-[-0.045em] transition-colors"
    >
      {{ company }}
    </Text>
    <Text as="p" variant="body-small" class="mt-3 font-bold">{{ title }}</Text>
    <Text as="p" variant="body-small" class="mt-5 max-w-[26.875rem]">{{ summary }}</Text>
    <span class="absolute right-2 bottom-10 text-[1.3125rem] text-site-purple" aria-hidden="true"
      >↗</span
    >
  </RouterLink>
</template>
