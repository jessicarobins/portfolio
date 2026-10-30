<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import WorkRow from '../components/WorkRow.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
import Text from '../components/Text.vue'
import ExperienceList from '../components/ExperienceList.vue'
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

  <section
    class="mt-16 grid grid-cols-1 gap-10 border-t-3 border-site-purple pt-9 pb-20 tablet:grid-cols-[0.85fr_1fr] tablet:gap-23"
    aria-labelledby="earlier-roles-title"
  >
    <div>
      <SectionEyebrow label="Earlier roles" />
      <Text as="h2" variant="heading" :level="3" id="earlier-roles-title">
        Frontend, product, and test engineering.
      </Text>
    </div>
    <ExperienceList />
  </section>
</template>
