<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppText from './AppText.vue'
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
    class="group relative block min-h-[13rem] border-b border-site-line py-[1.0625rem] pr-8 text-site-ink no-underline hover:[&_.work-card-title]:text-site-acid"
    :class="featured ? 'bg-gradient-to-br from-transparent via-transparent to-site-purple/10' : ''"
  >
    <div
      class="flex justify-between gap-3 font-mono text-[0.625rem] leading-relaxed tracking-wide text-site-acid uppercase"
    >
      <span class="text-xs">{{ String(index).padStart(2, '0') }}</span>
      <span class="text-right text-site-purple">{{ kind }}</span>
    </div>
    <StatusTag v-if="status" :label="status" class="mt-2" />
    <AppText
      as="h3"
      variant="section-title"
      class="work-card-title mt-6 text-[clamp(1.4375rem,3vw,2.125rem)] leading-[0.98] tracking-[-0.045em] transition-colors"
    >
      {{ company }}
    </AppText>
    <AppText as="p" variant="body-small" class="mt-1.5 font-bold">{{ title }}</AppText>
    <AppText as="p" variant="body-small" class="mt-2.5 max-w-[26.875rem]">{{ summary }}</AppText>
    <span class="absolute right-1 bottom-5 text-[1.3125rem] text-site-purple" aria-hidden="true"
      >↗</span
    >
  </RouterLink>
</template>
