<script setup lang="ts">
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-[calc(100%-2.5rem)] max-w-site tablet:w-[calc(100%-4.5rem)]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
