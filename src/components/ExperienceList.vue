<script setup lang="ts">
import Text from './Text.vue'
import { experience } from '../data/experience'
</script>

<template>
  <ol class="m-0 list-none border-t border-site-line p-0" aria-label="Career history">
    <li
      v-for="(entry, index) in experience"
      :key="`${entry.company}-${entry.role}`"
      class="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-site-line py-5 tablet:grid-cols-[1fr_auto] tablet:items-start"
    >
      <div>
        <Text as="h3" variant="heading" :level="4" class="mb-1 mt-0">
          {{ entry.company }}
        </Text>
        <Text as="p" variant="body" color-variant="primary" class="mb-0 mt-0 text-body-small">
          {{ entry.role }}
        </Text>
        <Text
          v-if="index > 1"
          as="p"
          variant="body"
          color-variant="secondary"
          class="mb-0 mt-2 text-body-small"
        >
          {{ entry.highlight }}
        </Text>
      </div>
      <Text variant="label" color-variant="secondary" class="mt-1 tablet:text-right">
        {{ entry.timeframe }}
      </Text>
    </li>
  </ol>
</template>
