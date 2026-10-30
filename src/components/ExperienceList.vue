<script setup lang="ts">
import Text from './Text.vue'
import { experience } from '../data/experience'
</script>

<template>
  <ol class="m-0 list-none border-t border-site-line p-0" aria-label="Career history">
    <li
      v-for="entry in experience"
      :key="`${entry.company}-${entry.role}`"
      class="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-site-line py-3 tablet:grid-cols-[1fr_auto] tablet:items-baseline"
    >
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Text as="h3" variant="heading" :level="5" class="mb-0 mt-0">
          {{ entry.company }}
        </Text>
        <Text as="p" variant="body" color-variant="primary" class="mb-0 mt-0 text-body-small">
          {{ entry.role }}
        </Text>
      </div>
      <Text variant="label" color-variant="secondary" class="mt-0 tablet:text-right">
        {{ entry.timeframe }}
      </Text>
      <Text
        as="p"
        variant="body"
        color-variant="secondary"
        class="col-span-full mb-0 mt-0 text-body-small"
      >
        {{ entry.highlight }}
      </Text>
    </li>
  </ol>
</template>
