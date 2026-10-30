<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import WorkRow from '../components/WorkRow.vue'
import { work } from '../data/work'
</script>

<template>
  <PageIntro eyebrow="Work index / 01—05">
    <template #title>Products, platforms, and tools I've helped build.</template>
    <template #lede
      >Product delivery from discovery through adoption, internal platforms and tools, and one AI
      product in progress.</template
    >
  </PageIntro>

  <section class="border-t-3 border-site-purple" aria-label="Selected work">
    <WorkRow
      v-for="(story, index) in work"
      :key="story.slug"
      :index="index + 1"
      :company="story.company"
      :timeframe="story.timeframe"
      :title="story.title"
      :summary="story.summary"
      :to="`/work/${story.slug}`"
      :tags="story.stack"
    />
  </section>
</template>
