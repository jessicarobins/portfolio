<script setup lang="ts">
import Button from '../components/Button.vue'
import Text from '../components/Text.vue'
import SectionHeading from '../components/SectionHeading.vue'
import WorkCard from '../components/WorkCard.vue'
import { work } from '../data/work'
</script>

<template>
  <section class="py-section pb-21" aria-labelledby="home-title">
    <div class="mb-14 flex justify-between gap-8 text-site-muted">
      <Text variant="label" class="mb-0">Washington, DC · Open to remote</Text>
    </div>
    <Text
      as="h1"
      variant="heading"
      :level="1"
      id="home-title"
      class="block font-black leading-hero tracking-display-hero uppercase"
    >
      Good code.<br />Big ideas.<br /><span
        class="mt-7 ml-0 inline-block rotate-[-3deg] bg-site-acid px-5 pt-3 pb-4 text-site-bg tablet:ml-27 tablet:px-8 tablet:pt-4 tablet:pb-7"
        >Zero beige.</span
      >
    </Text>
    <div
      class="mt-14 flex flex-col items-start justify-between gap-9 tablet:flex-row tablet:items-end tablet:gap-16"
    >
      <Text
        as="p"
        variant="body"
        color-variant="primary"
        class="mt-0 max-w-[30.625rem] text-body-large leading-relaxed tablet:text-body-large-tablet"
      >
        Full-stack, frontend-focused engineer with 11 years of experience. I partner with product,
        design, and engineering to shape solutions, then build the applications, APIs, and cloud
        systems needed to ship them.
      </Text>
      <Button to="/work" variant="secondary"
        >The proof is right here <span aria-hidden="true">↓</span></Button
      >
    </div>
  </section>

  <section
    class="relative left-1/2 my-3 mb-19 w-screen -translate-x-1/2 rotate-[0.8deg] overflow-hidden bg-site-acid py-6 text-site-bg"
    aria-label="Areas of work"
  >
    <div
      class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-9 text-center font-display text-caption leading-relaxed font-black tracking-widest uppercase tablet:gap-x-6 tablet:text-badge"
    >
      <span>Product engineering</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Internal tools</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Platform systems</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>AI in practice</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Technical leadership</span>
    </div>
  </section>

  <section class="py-14 pb-21" aria-labelledby="selected-work-title">
    <SectionHeading
      id="selected-work-title"
      eyebrow="The good stuff"
      title="Selected work"
      link-text="See all work"
      to="/work"
    />
    <div class="grid grid-cols-1 gap-x-13 border-t-3 border-site-purple tablet:grid-cols-2">
      <WorkCard
        v-for="(story, index) in work"
        :key="story.slug"
        :index="index + 1"
        :company="story.company"
        :kind="story.kind"
        :title="story.title"
        :summary="story.summary"
        :to="`/work/${story.slug}`"
        :featured="story.slug === 'all-the-things'"
      />
    </div>
  </section>

  <section
    class="grid grid-cols-1 items-start gap-10 border-t border-site-line py-14 pb-20 tablet:grid-cols-[0.85fr_1fr] tablet:gap-23"
  >
    <div>
      <SectionEyebrow label="A little context" />
      <Text as="h2" variant="heading" :level="3">Engineer by trade.<br />Curious by default.</Text>
    </div>
    <div>
      <Text
        as="p"
        variant="body"
        color-variant="secondary"
        class="mb-9 mt-0 max-w-[36.875rem] text-body-large"
      >
        I like solving problems across the product and technical stack, from understanding what
        users need to building the applications, APIs, and infrastructure behind the experience.
        Before software, I spent ten years working with kids; I still bring curiosity and patience
        to my work.
      </Text>
      <Button to="/about" variant="text">More about me <span aria-hidden="true">↗</span></Button>
    </div>
  </section>
</template>
