<script setup lang="ts">
import Text from './Text.vue'

defineProps<{ label: string }>()
</script>

<template>
  <Text variant="eyebrow">{{ label }}</Text>
</template>
