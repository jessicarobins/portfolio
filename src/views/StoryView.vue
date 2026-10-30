<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Button from '../components/Button.vue'
import Text from '../components/Text.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
import StatusLabel from '../components/StatusLabel.vue'
import TagList from '../components/TagList.vue'
import { work } from '../data/work'

const route = useRoute()
const story = computed(() => work.find((item) => item.slug === route.params.slug))
const index = computed(() => work.findIndex((item) => item.slug === route.params.slug))
const nextStory = computed(() => work[index.value + 1])
</script>

<template>
  <article v-if="story" class="py-15 pb-27">
    <Button to="/work" variant="text" class="mb-13 font-mono text-caption uppercase"
      ><span aria-hidden="true">←</span> All work</Button
    >
    <header class="relative border-b-3 border-site-purple py-13 pb-15">
      <SectionEyebrow
        :label="`${story.company} / ${story.role} / ${story.timeframe}`"
        class="mb-6"
      />
      <StatusLabel v-if="story.status" :label="story.status" class="mb-6" />
      <Text
        as="h1"
        variant="heading"
        :level="2"
        class="max-w-[56.25rem] font-black leading-display tracking-display uppercase"
        >{{ story.title }}</Text
      >
      <Text
        as="p"
        variant="body"
        color-variant="secondary"
        class="mt-9 max-w-[48.75rem] leading-relaxed tablet:text-lg"
        >{{ story.summary }}</Text
      >
      <TagList v-if="story.stack" :items="story.stack" variant="plain" class="mt-10" />
      <div v-if="story.links?.length" class="mt-9 flex flex-wrap gap-x-9 gap-y-4">
        <Button
          v-for="link in story.links"
          :key="link.href"
          :href="link.href"
          external
          variant="text"
          class="font-mono text-caption uppercase"
          >{{ link.label }} <span aria-hidden="true">↗</span></Button
        >
      </div>
    </header>

    <div class="max-w-story py-4 pb-10">
      <section
        v-for="section in story.sections"
        :key="section.heading"
        class="border-b border-site-line py-11"
      >
        <Text
          as="h2"
          variant="heading"
          :level="4"
          color-variant="tertiary"
          class="mb-6 font-bold leading-tight tracking-subheading"
          >{{ section.heading }}</Text
        >
        <Text
          v-for="paragraph in section.paragraphs"
          :key="paragraph"
          as="p"
          variant="body"
          color-variant="secondary"
          class="my-0 mt-5 first:mt-0"
        >
          {{ paragraph }}
        </Text>
        <ul v-if="section.bullets" class="pl-10 text-base leading-copy text-site-muted">
          <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
        <div v-if="section.metrics" class="mt-9 grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <div
            v-for="metric in section.metrics"
            :key="metric.label"
            class="flex flex-col bg-site-panel p-8"
          >
            <Text
              as="strong"
              variant="heading"
              :level="4"
              color-variant="tertiary"
              class="mb-0 leading-none"
              >{{ metric.value }}</Text
            >
            <Text as="span" variant="body" color-variant="primary" class="mt-4 font-bold">{{
              metric.label
            }}</Text>
            <Text as="small" variant="label" color-variant="secondary" class="mt-3 text-caption">{{
              metric.detail
            }}</Text>
          </div>
        </div>
        <Text
          v-if="section.callout"
          as="p"
          variant="body"
          color-variant="primary"
          class="mt-9 border-l-3 border-site-acid bg-site-panel px-9 py-7"
        >
          {{ section.callout }}
        </Text>
      </section>
    </div>

    <RouterLink
      v-if="nextStory"
      :to="`/work/${nextStory.slug}`"
      class="mt-15 flex max-w-story items-center justify-between border-y border-site-purple border-t-2 py-9 text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><Text variant="label" color-variant="tertiary" class="text-label">Next story</Text
        ><Text as="strong" variant="heading" :level="5" class="next-title mt-2">{{
          nextStory.company
        }}</Text></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
    <RouterLink
      v-else
      to="/work"
      class="mt-15 flex max-w-story items-center justify-between border-y border-site-purple border-t-2 py-9 text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><Text variant="label" color-variant="tertiary" class="text-label"
          >End of selected work</Text
        ><Text as="strong" variant="heading" :level="5" class="next-title mt-2"
          >Back to all work</Text
        ></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
  </article>
  <section v-else class="py-20 tablet:py-27">
    <SectionEyebrow label="That page wandered off" />
    <Text
      as="h1"
      variant="heading"
      :level="2"
      class="font-black leading-display tracking-display uppercase"
      >Story not found.</Text
    >
    <Button to="/work" variant="text" class="mt-10"
      >Back to the work <span aria-hidden="true">↗</span></Button
    >
  </section>
</template>
