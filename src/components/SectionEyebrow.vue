<script setup lang="ts">
import AppText from './AppText.vue'

defineProps<{ label: string }>()
</script>

<template>
  <AppText variant="eyebrow">{{ label }}</AppText>
</template>
