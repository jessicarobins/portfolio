<script setup lang="ts">
import { computed } from 'vue'

type TextVariant = 'body' | 'label' | 'heading'
type TextLevel = 1 | 2 | 3 | 4 | 5
type TextColorVariant = 'default' | 'primary' | 'secondary' | 'tertiary'

const props = withDefaults(
  defineProps<{
    as?: string
    variant?: TextVariant
    level?: TextLevel
    colorVariant?: TextColorVariant
  }>(),
  { as: 'p', variant: 'body', colorVariant: 'default' },
)

const variants: Record<TextVariant, string> = {
  body: 'text-base leading-copy',
  label: 'font-mono text-caption leading-relaxed tracking-label uppercase',
  heading: 'm-0 font-extrabold leading-none tracking-heading',
}

const colorVariants: Record<TextColorVariant, string> = {
  default: 'text-current',
  primary: 'text-site-ink',
  secondary: 'text-site-muted',
  tertiary: 'text-site-acid',
}

const levels: Record<TextLevel, string> = {
  1: 'text-level-1 tablet:text-level-1-tablet',
  2: 'text-level-2 tablet:text-level-2-tablet',
  3: 'text-level-3',
  4: 'text-level-4',
  5: 'text-level-5',
}

const classes = computed(() => {
  const level = props.level ?? (props.variant === 'heading' ? 3 : undefined)
  return [variants[props.variant], level ? levels[level] : '', colorVariants[props.colorVariant]]
})
</script>

<template>
  <component :is="props.as" :class="classes">
    <slot />
  </component>
</template>
