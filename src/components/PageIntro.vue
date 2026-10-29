<script setup lang="ts">
import Text from './Text.vue'
import SectionEyebrow from './SectionEyebrow.vue'

defineProps<{ eyebrow: string }>()
</script>

<template>
  <section class="border-b border-site-line py-20 tablet:py-27" v-bind="$attrs">
    <SectionEyebrow :label="eyebrow" />
    <Text
      as="h1"
      variant="heading"
      :level="2"
      class="font-black leading-display tracking-display uppercase"
    >
      <slot name="title" />
    </Text>
    <Text
      v-if="$slots.lede"
      variant="body"
      class="mt-9 max-w-[45rem] leading-relaxed tablet:text-lg"
    >
      <slot name="lede" />
    </Text>
  </section>
</template>
