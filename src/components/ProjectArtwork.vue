<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    treatment?: 'playful' | 'product-screenshot'
  }>(),
  { treatment: 'playful' },
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
    :class="[artworkClass, treatment === 'playful' ? 'bg-amber-50' : '']"
  >
    <template v-if="treatment === 'playful'">
      <span class="absolute top-5 left-7 size-6 rotate-12 bg-sky-400" aria-hidden="true"></span>
      <span class="absolute top-8 right-8 h-3 w-10 -rotate-12 bg-red-500" aria-hidden="true"></span>
      <span
        class="absolute bottom-6 left-12 size-4 rounded-full bg-yellow-400"
        aria-hidden="true"
      ></span>
      <span
        class="absolute right-12 bottom-6 size-7 rotate-45 bg-orange-400"
        aria-hidden="true"
      ></span>
    </template>
    <img
      :src="src"
      :alt="alt"
      class="z-10 w-full drop-shadow-sm"
      :class="imageClass"
      loading="lazy"
    />
  </div>
</template>
