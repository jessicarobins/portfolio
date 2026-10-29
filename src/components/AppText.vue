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
  hero: 'm-0 block text-[clamp(3.375rem,13.5vw,5.375rem)] font-black leading-[0.84] tracking-[-0.075em] uppercase tablet:text-[clamp(4.0625rem,10vw,7.75rem)]',
  'page-title':
    'm-0 text-[clamp(2.75rem,11vw,4rem)] font-black leading-[0.9] tracking-[-0.065em] uppercase tablet:text-[clamp(3.25rem,7.7vw,5.5rem)]',
  'story-title':
    'm-0 max-w-[56.25rem] text-[clamp(2.6875rem,11vw,4.25rem)] font-black leading-[0.9] tracking-[-0.065em] uppercase tablet:text-[clamp(3.0625rem,7.4vw,5.5rem)]',
  'contact-title':
    'm-0 text-[clamp(2.75rem,11vw,4.625rem)] font-black leading-[0.9] tracking-[-0.075em] uppercase tablet:text-[clamp(3.25rem,8.6vw,6.375rem)]',
  'section-title':
    'm-0 text-[clamp(1.875rem,4vw,2.875rem)] font-extrabold leading-none tracking-[-0.055em]',
  'subsection-title':
    'm-0 mb-3 text-[1.5625rem] font-bold leading-tight tracking-[-0.025em] text-site-acid tablet:text-[2rem]',
  eyebrow:
    'm-0 mb-2.5 font-mono text-[0.6875rem] leading-relaxed tracking-[0.05625rem] text-site-acid uppercase',
  lede: 'mt-[1.125rem] max-w-[45rem] text-base leading-relaxed text-site-muted tablet:text-lg',
  body: 'text-base leading-[1.75] text-site-muted',
  'body-small': 'm-0 max-w-[50rem] text-sm text-site-muted',
  muted: 'text-site-muted',
  mono: 'font-mono text-[0.6875rem] leading-relaxed tracking-[0.05625rem] uppercase',
  metric: 'text-[1.9375rem] leading-none text-site-acid',
} satisfies Record<string, string>
</script>

<template>
  <component :is="as" :class="variants[variant]">
    <slot />
  </component>
</template>
