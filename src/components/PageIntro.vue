<script setup lang="ts">
import AppText from './AppText.vue'
import SectionEyebrow from './SectionEyebrow.vue'

defineProps<{ eyebrow: string }>()
</script>

<template>
  <section class="border-b border-site-line py-10 tablet:py-[3.375rem]" v-bind="$attrs">
    <SectionEyebrow :label="eyebrow" />
    <AppText as="h1" variant="page-title"><slot name="title" /></AppText>
    <AppText v-if="$slots.lede" variant="lede"><slot name="lede" /></AppText>
  </section>
</template>
