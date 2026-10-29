<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Button from '../components/Button.vue'
import Text from '../components/Text.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
import StatusTag from '../components/StatusTag.vue'
import TagList from '../components/TagList.vue'
import { work } from '../data/work'

const route = useRoute()
const story = computed(() => work.find((item) => item.slug === route.params.slug))
const index = computed(() => work.findIndex((item) => item.slug === route.params.slug))
const nextStory = computed(() => work[index.value + 1])
</script>

<template>
  <article v-if="story" class="py-15 pb-27">
    <Button to="/work" variant="text" class="mb-13 font-mono text-[0.6875rem] uppercase"
      ><span aria-hidden="true">←</span> All work</Button
    >
    <header class="relative border-b-[3px] border-site-purple py-13 pb-15">
      <SectionEyebrow
        :label="`${story.company} / ${story.role} / ${story.timeframe}`"
        class="mb-6"
      />
      <StatusTag v-if="story.status" :label="story.status" class="mb-6" />
      <Text as="h1" variant="story-title">{{ story.title }}</Text>
      <Text as="p" variant="lede" class="max-w-[48.75rem]">{{ story.summary }}</Text>
      <TagList v-if="story.stack" :items="story.stack" variant="plain" class="mt-10" />
      <div v-if="story.links?.length" class="mt-9 flex flex-wrap gap-x-9 gap-y-4">
        <Button
          v-for="link in story.links"
          :key="link.href"
          :href="link.href"
          external
          variant="text"
          class="font-mono text-[0.6875rem] uppercase"
          >{{ link.label }} <span aria-hidden="true">↗</span></Button
        >
      </div>
    </header>

    <div class="max-w-[48.125rem] py-4 pb-10">
      <section
        v-for="section in story.sections"
        :key="section.heading"
        class="border-b border-site-line py-11"
      >
        <Text as="h2" variant="subsection-title">{{ section.heading }}</Text>
        <Text
          v-for="paragraph in section.paragraphs"
          :key="paragraph"
          as="p"
          variant="body"
          class="my-0 mt-5 first:mt-0"
        >
          {{ paragraph }}
        </Text>
        <ul v-if="section.bullets" class="pl-10 text-base leading-[1.75] text-site-muted">
          <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
        <div v-if="section.metrics" class="mt-9 grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <div
            v-for="metric in section.metrics"
            :key="metric.label"
            class="flex flex-col bg-site-panel p-8"
          >
            <Text as="strong" variant="metric">{{ metric.value }}</Text>
            <Text as="span" variant="body" class="mt-4 font-bold text-site-ink">{{
              metric.label
            }}</Text>
            <Text as="small" variant="mono" class="mt-3 text-[0.6875rem] text-site-muted">{{
              metric.detail
            }}</Text>
          </div>
        </div>
        <Text
          v-if="section.callout"
          as="p"
          variant="body"
          class="mt-9 border-l-[3px] border-site-acid bg-site-panel px-9 py-7 text-site-ink"
        >
          {{ section.callout }}
        </Text>
      </section>
    </div>

    <RouterLink
      v-if="nextStory"
      :to="`/work/${nextStory.slug}`"
      class="mt-15 flex max-w-[48.125rem] items-center justify-between border-y border-site-purple border-t-2 py-9 text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><Text variant="mono" class="text-[0.625rem] text-site-acid">Next story</Text
        ><Text as="strong" variant="section-title" class="next-title mt-2 text-[1.375rem]">{{
          nextStory.company
        }}</Text></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
    <RouterLink
      v-else
      to="/work"
      class="mt-15 flex max-w-[48.125rem] items-center justify-between border-y border-site-purple border-t-2 py-9 text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><Text variant="mono" class="text-[0.625rem] text-site-acid">End of selected work</Text
        ><Text as="strong" variant="section-title" class="next-title mt-2 text-[1.375rem]"
          >Back to all work</Text
        ></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
  </article>
  <section v-else class="py-20 tablet:py-27">
    <SectionEyebrow label="That page wandered off" />
    <Text as="h1" variant="page-title">Story not found.</Text>
    <Button to="/work" variant="text" class="mt-10"
      >Back to the work <span aria-hidden="true">↗</span></Button
    >
  </section>
</template>
