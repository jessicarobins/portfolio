<script setup lang="ts">
import AppText from './AppText.vue'

defineProps<{ label: string }>()
</script>

<template>
  <AppText
    as="span"
    variant="mono"
    class="inline-block border border-site-acid px-2 py-[3px] text-[0.625rem] tracking-[0.025rem] text-site-acid"
  >
    {{ label }}
  </AppText>
</template>
