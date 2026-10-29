<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppText from './AppText.vue'
import SectionEyebrow from './SectionEyebrow.vue'

defineProps<{ eyebrow: string; title: string; linkText?: string; to?: string; id?: string }>()
</script>

<template>
  <div class="mb-[1.125rem] flex items-end justify-between gap-5 max-tablet:items-start">
    <div>
      <SectionEyebrow :label="eyebrow" />
      <AppText as="h2" variant="section-title" :id="id">
        {{ title }}<span class="text-site-acid">.</span>
      </AppText>
    </div>
    <RouterLink
      v-if="to && linkText"
      :to="to"
      class="text-xs font-bold text-site-acid underline-offset-4 hover:underline tablet:text-base"
    >
      {{ linkText }} <span aria-hidden="true">↗</span>
    </RouterLink>
  </div>
</template>
