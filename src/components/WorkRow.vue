<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Text from './Text.vue'
import TagList from './TagList.vue'

defineProps<{
  index: number
  company: string
  timeframe: string
  title: string
  summary: string
  to: string
  tags?: string[]
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="group grid grid-cols-[1.6875rem_1fr_1.125rem] gap-5 border-b border-site-line py-9 text-site-ink no-underline tablet:grid-cols-[2.8125rem_1fr_1.5625rem] tablet:gap-10 tablet:py-12 hover:[&_.row-title]:text-site-acid"
  >
    <span class="font-mono text-xs leading-relaxed text-site-acid">{{
      String(index).padStart(2, '0')
    }}</span>
    <div>
      <div
        class="flex flex-wrap items-center gap-x-9 gap-y-4 font-mono text-label leading-relaxed tracking-wide text-site-purple uppercase"
      >
        <span
          class="inline-flex border border-site-acid px-4 py-2 text-badge leading-none font-bold text-site-acid"
          >{{ company }}</span
        >
        <span class="text-site-muted">{{ timeframe }}</span>
      </div>
      <Text
        as="h2"
        variant="heading"
        :level="4"
        class="row-title mt-4 leading-none tracking-card transition-colors"
      >
        {{ title }}
      </Text>
      <Text
        as="p"
        variant="body"
        color-variant="secondary"
        class="mt-3 max-w-[50rem] text-body-small"
        >{{ summary }}</Text
      >
      <TagList v-if="tags" :items="tags" variant="plain" />
    </div>
    <span class="text-icon text-site-purple" aria-hidden="true">↗</span>
  </RouterLink>
</template>
