<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppText from './AppText.vue'
import StatusTag from './StatusTag.vue'
import TagList from './TagList.vue'

defineProps<{
  index: number
  company: string
  timeframe: string
  title: string
  summary: string
  to: string
  status?: string
  tags?: string[]
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="group grid grid-cols-[1.6875rem_1fr_1.125rem] gap-2.5 border-b border-site-line py-[1.125rem] text-site-ink no-underline tablet:grid-cols-[2.8125rem_1fr_1.5625rem] tablet:gap-5 tablet:py-[1.4375rem] hover:[&_.row-title]:text-site-acid"
  >
    <span class="font-mono text-xs leading-relaxed text-site-acid">{{
      String(index).padStart(2, '0')
    }}</span>
    <div>
      <div
        class="flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 font-mono text-[0.625rem] leading-relaxed tracking-wide text-site-purple uppercase"
      >
        <span>{{ company }}</span>
        <span class="text-site-muted">{{ timeframe }}</span>
        <StatusTag v-if="status" :label="status" />
      </div>
      <AppText
        as="h2"
        variant="section-title"
        class="row-title mt-2 text-[1.625rem] leading-none tracking-[-0.045em] transition-colors tablet:text-[clamp(1.5rem,3.2vw,2.3125rem)]"
      >
        {{ title }}
      </AppText>
      <AppText as="p" variant="body-small" class="mt-1.5 max-w-[50rem]">{{ summary }}</AppText>
      <TagList v-if="tags" :items="tags" variant="plain" />
    </div>
    <span class="text-[1.3125rem] text-site-purple" aria-hidden="true">↗</span>
  </RouterLink>
</template>
