<script setup lang="ts">
import Text from './Text.vue'
import SectionEyebrow from './SectionEyebrow.vue'

defineProps<{ eyebrow: string }>()
</script>

<template>
  <section class="border-b border-site-line py-20 tablet:py-27" v-bind="$attrs">
    <SectionEyebrow :label="eyebrow" />
    <Text as="h1" variant="page-title"><slot name="title" /></Text>
    <Text v-if="$slots.lede" variant="lede"><slot name="lede" /></Text>
  </section>
</template>
