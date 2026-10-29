<script setup lang="ts">
import Text from './Text.vue'

defineProps<{ label: string }>()
</script>

<template>
  <Text variant="label" class="mb-5 text-site-acid">{{ label }}</Text>
</template>
