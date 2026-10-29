<script setup lang="ts">
import Text from './Text.vue'

defineProps<{ label: string }>()
</script>

<template>
  <Text
    as="span"
    variant="label"
    class="inline-block border border-site-acid px-4 py-2 text-label tracking-[0.025rem] text-site-acid"
  >
    {{ label }}
  </Text>
</template>
