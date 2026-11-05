<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    size?: 'card' | 'feature'
  }>(),
  { size: 'feature' },
)

const containerClass = computed(() =>
  props.size === 'card' ? 'min-h-32 px-5 py-6' : 'min-h-64 px-9 py-12 tablet:min-h-80',
)

const imageClass = computed(() => (props.size === 'card' ? 'max-w-48' : 'max-w-xl'))
</script>

<template>
  <div
    class="relative flex w-full items-center justify-center overflow-hidden border border-site-bg/10 bg-amber-50"
    :class="containerClass"
  >
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
    <img
      :src="src"
      :alt="alt"
      class="relative z-10 h-auto w-full drop-shadow-sm"
      :class="imageClass"
      loading="lazy"
    />
  </div>
</template>
