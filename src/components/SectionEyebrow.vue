<script setup lang="ts">
import Text from './Text.vue'

defineProps<{ label: string }>()
</script>

<template>
  <Text variant="label" color-variant="tertiary" class="mb-5">{{ label }}</Text>
</template>
