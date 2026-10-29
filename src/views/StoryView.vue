<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppButton from '../components/AppButton.vue'
import AppText from '../components/AppText.vue'
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
  <article v-if="story" class="py-[1.875rem] pb-[3.375rem]">
    <AppButton to="/work" variant="text" class="mb-[1.5625rem] font-mono text-[0.6875rem] uppercase"
      ><span aria-hidden="true">←</span> All work</AppButton
    >
    <header class="relative border-b-[3px] border-site-purple py-[1.5625rem] pb-[1.875rem]">
      <SectionEyebrow
        :label="`${story.company} / ${story.role} / ${story.timeframe}`"
        class="mb-3"
      />
      <StatusTag v-if="story.status" :label="story.status" class="mb-3" />
      <AppText as="h1" variant="story-title">{{ story.title }}</AppText>
      <AppText as="p" variant="lede" class="max-w-[48.75rem]">{{ story.summary }}</AppText>
      <TagList v-if="story.stack" :items="story.stack" variant="plain" class="mt-5" />
      <div v-if="story.links?.length" class="mt-[1.125rem] flex flex-wrap gap-x-[1.125rem] gap-y-2">
        <AppButton
          v-for="link in story.links"
          :key="link.href"
          :href="link.href"
          external
          variant="text"
          class="font-mono text-[0.6875rem] uppercase"
          >{{ link.label }} <span aria-hidden="true">↗</span></AppButton
        >
      </div>
    </header>

    <div class="max-w-[48.125rem] py-2 pb-5">
      <section
        v-for="section in story.sections"
        :key="section.heading"
        class="border-b border-site-line py-[1.375rem]"
      >
        <AppText as="h2" variant="subsection-title">{{ section.heading }}</AppText>
        <AppText
          v-for="paragraph in section.paragraphs"
          :key="paragraph"
          as="p"
          variant="body"
          class="my-0 mt-2.5 first:mt-0"
        >
          {{ paragraph }}
        </AppText>
        <ul v-if="section.bullets" class="pl-5 text-base leading-[1.75] text-site-muted">
          <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
        <div v-if="section.metrics" class="mt-[1.125rem] grid grid-cols-1 gap-3 tablet:grid-cols-2">
          <div
            v-for="metric in section.metrics"
            :key="metric.label"
            class="flex flex-col bg-site-panel p-[0.9375rem]"
          >
            <AppText as="strong" variant="metric">{{ metric.value }}</AppText>
            <AppText as="span" variant="body" class="mt-[0.4375rem] font-bold text-site-ink">{{
              metric.label
            }}</AppText>
            <AppText
              as="small"
              variant="mono"
              class="mt-[0.3125rem] text-[0.6875rem] text-site-muted"
              >{{ metric.detail }}</AppText
            >
          </div>
        </div>
        <AppText
          v-if="section.callout"
          as="p"
          variant="body"
          class="mt-[1.125rem] border-l-[3px] border-site-acid bg-site-panel px-[1.0625rem] py-3.5 text-site-ink"
        >
          {{ section.callout }}
        </AppText>
      </section>
    </div>

    <RouterLink
      v-if="nextStory"
      :to="`/work/${nextStory.slug}`"
      class="mt-[1.875rem] flex max-w-[48.125rem] items-center justify-between border-y border-site-purple border-t-2 py-[1.125rem] text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><AppText variant="mono" class="text-[0.625rem] text-site-acid">Next story</AppText
        ><AppText as="strong" variant="section-title" class="next-title mt-1 text-[1.375rem]">{{
          nextStory.company
        }}</AppText></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
    <RouterLink
      v-else
      to="/work"
      class="mt-[1.875rem] flex max-w-[48.125rem] items-center justify-between border-y border-site-purple border-t-2 py-[1.125rem] text-site-ink no-underline hover:[&_.next-title]:text-site-acid"
    >
      <span
        ><AppText variant="mono" class="text-[0.625rem] text-site-acid"
          >End of selected work</AppText
        ><AppText as="strong" variant="section-title" class="next-title mt-1 text-[1.375rem]"
          >Back to all work</AppText
        ></span
      >
      <span class="text-site-purple" aria-hidden="true">↗</span>
    </RouterLink>
  </article>
  <section v-else class="py-10 tablet:py-[3.375rem]">
    <SectionEyebrow label="That page wandered off" />
    <AppText as="h1" variant="page-title">Story not found.</AppText>
    <AppButton to="/work" variant="text" class="mt-5"
      >Back to the work <span aria-hidden="true">↗</span></AppButton
    >
  </section>
</template>
