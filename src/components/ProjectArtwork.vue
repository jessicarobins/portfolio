<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    treatment?: 'wordmark' | 'product-screenshot'
  }>(),
  { treatment: 'wordmark' },
)

const imageClass = computed(() => {
  if (props.treatment === 'product-screenshot') {
    return 'absolute inset-0 h-full w-full object-cover object-[center_95%]'
  }

  return 'relative h-auto max-w-xl'
})

const artworkClass = computed(() =>
  props.treatment === 'product-screenshot'
    ? 'aspect-[1.9/1] min-h-0 bg-site-purple p-0'
    : 'min-h-64 px-9 py-12 tablet:min-h-80',
)
</script>

<template>
  <div
    class="relative flex w-full items-center justify-center overflow-hidden border border-site-bg/10"
    :class="[artworkClass, treatment === 'wordmark' ? 'bg-amber-50' : '']"
  >
    <img
      :src="src"
      :alt="alt"
      class="relative z-10 h-auto w-full"
      :class="imageClass"
      loading="lazy"
    />
  </div>
</template>
