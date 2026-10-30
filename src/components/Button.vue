<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'text' | 'outline'
    external?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { variant: 'secondary', type: 'button' },
)

const classes = computed(() => {
  const base =
    'inline-flex w-fit shrink-0 items-center gap-4 whitespace-nowrap font-bold no-underline transition-colors'
  const variants = {
    primary: 'border border-site-acid bg-site-acid px-8 py-6 text-site-bg hover:bg-site-ink',
    secondary:
      'rotate-[2deg] border-2 border-site-purple bg-site-purple px-8 py-5 text-site-bg hover:-rotate-[2deg]',
    text: 'text-site-acid underline underline-offset-4 hover:decoration-2',
    outline:
      'border border-site-purple px-8 py-6 text-site-ink hover:bg-site-purple hover:text-site-bg',
  }
  return `${base} ${variants[props.variant]}`
})
</script>

<template>
  <RouterLink v-if="to" v-bind="$attrs" :to="to" :class="classes"><slot /></RouterLink>
  <a
    v-else-if="href"
    v-bind="$attrs"
    :href="href"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer' : undefined"
    ><slot
  /></a>
  <button v-else v-bind="$attrs" :type="type" :class="classes"><slot /></button>
</template>
