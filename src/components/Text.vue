<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    variant?:
      | 'hero'
      | 'page-title'
      | 'story-title'
      | 'contact-title'
      | 'section-title'
      | 'subsection-title'
      | 'eyebrow'
      | 'lede'
      | 'body'
      | 'body-small'
      | 'muted'
      | 'mono'
      | 'metric'
  }>(),
  { as: 'p', variant: 'body' },
)

const variants = {
  hero: 'm-0 block text-display-home font-black leading-[0.84] tracking-[-0.075em] uppercase tablet:text-display-home-tablet',
  'page-title':
    'm-0 text-display-page font-black leading-[0.9] tracking-[-0.065em] uppercase tablet:text-display-page-tablet',
  'story-title':
    'm-0 max-w-[56.25rem] text-display-story font-black leading-[0.9] tracking-[-0.065em] uppercase tablet:text-display-story-tablet',
  'contact-title':
    'm-0 text-display-contact font-black leading-[0.9] tracking-[-0.075em] uppercase tablet:text-display-contact-tablet',
  'section-title': 'm-0 text-display-section font-extrabold leading-none tracking-[-0.055em]',
  'subsection-title':
    'm-0 mb-6 text-heading-medium font-bold leading-tight tracking-[-0.025em] text-site-acid tablet:text-heading-medium-tablet',
  eyebrow:
    'm-0 mb-5 font-mono text-caption leading-relaxed tracking-[0.05625rem] text-site-acid uppercase',
  lede: 'mt-9 max-w-[45rem] text-base leading-relaxed text-site-muted tablet:text-lg',
  body: 'text-base leading-[1.75] text-site-muted',
  'body-small': 'm-0 max-w-[50rem] text-body-small text-site-muted',
  muted: 'text-site-muted',
  mono: 'font-mono text-caption leading-relaxed tracking-[0.05625rem] uppercase',
  metric: 'text-metric leading-none text-site-acid',
} satisfies Record<string, string>
</script>

<template>
  <component :is="as" :class="variants[variant]">
    <slot />
  </component>
</template>
