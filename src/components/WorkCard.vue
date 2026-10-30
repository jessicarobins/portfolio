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
    class="group relative block min-h-104 border-b border-site-line py-9 pr-16 text-site-ink no-underline hover:[&_.work-card-title]:text-site-acid"
    :class="featured ? 'bg-gradient-to-br from-transparent via-transparent to-site-purple/10' : ''"
  >
    <div
      class="flex justify-between gap-6 font-mono text-label leading-relaxed tracking-wide text-site-acid uppercase"
    >
      <span class="text-xs">{{ String(index).padStart(2, '0') }}</span>
      <span class="text-right text-site-purple">{{ kind }}</span>
    </div>
    <StatusTag v-if="status" :label="status" class="mt-4" />
    <Text
      as="h3"
      variant="heading"
      :level="4"
      class="work-card-title mt-12 leading-card tracking-card transition-colors"
    >
      {{ company }}
    </Text>
    <Text as="p" variant="body" color-variant="secondary" class="mt-3 text-body-small font-bold">{{
      title
    }}</Text>
    <Text
      as="p"
      variant="body"
      color-variant="secondary"
      class="mt-5 max-w-[26.875rem] text-body-small"
      >{{ summary }}</Text
    >
    <span class="absolute right-2 bottom-10 text-icon text-site-purple" aria-hidden="true">↗</span>
  </RouterLink>
</template>
