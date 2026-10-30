<script setup lang="ts">
import Text from './Text.vue'

defineProps<{ label: string }>()
</script>

<template>
  <Text
    as="span"
    variant="label"
    color-variant="tertiary"
    class="inline-block border border-site-acid px-4 py-2 text-label tracking-status"
  >
    {{ label }}
  </Text>
</template>
