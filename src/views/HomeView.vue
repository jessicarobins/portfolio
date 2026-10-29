<script setup lang="ts">
import AppButton from '../components/AppButton.vue'
import AppText from '../components/AppText.vue'
import SectionHeading from '../components/SectionHeading.vue'
import WorkCard from '../components/WorkCard.vue'
import { work } from '../data/work'
</script>

<template>
  <section class="py-[clamp(2.375rem,6vw,4.25rem)] pb-[2.625rem]" aria-labelledby="home-title">
    <div class="mb-[1.6875rem] flex justify-between gap-4 text-site-muted">
      <AppText variant="mono" class="mb-0 text-site-muted">Washington, DC · Open to remote</AppText>
    </div>
    <AppText as="h1" variant="hero" id="home-title">
      Good code.<br />Big ideas.<br /><span
        class="mt-[13px] ml-0 inline-block rotate-[-3deg] bg-site-acid px-2.5 pt-[5px] pb-2 text-site-bg tablet:ml-[3.375rem] tablet:px-4 tablet:pt-2 tablet:pb-3.5"
        >Zero beige.</span
      >
    </AppText>
    <div
      class="mt-7 flex flex-col items-start justify-between gap-[1.125rem] tablet:flex-row tablet:items-end tablet:gap-8"
    >
      <AppText
        as="p"
        variant="lede"
        class="mt-0 max-w-[30.625rem] text-[1.0625rem] text-site-ink tablet:text-[1.1875rem]"
      >
        Full-stack, frontend-focused engineer with 11 years of experience. I partner with product,
        design, and engineering to shape solutions, then build the applications, APIs, and cloud
        systems needed to ship them.
      </AppText>
      <AppButton to="/work" variant="secondary"
        >The proof is right here <span aria-hidden="true">↓</span></AppButton
      >
    </div>
  </section>

  <section
    class="relative left-1/2 my-[0.375rem] mb-[2.375rem] w-screen -translate-x-1/2 rotate-[0.8deg] overflow-hidden bg-site-acid py-[0.6875rem] text-site-bg"
    aria-label="Areas of work"
  >
    <div
      class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-[1.125rem] text-center font-display text-[0.6875rem] leading-relaxed font-black tracking-widest uppercase tablet:gap-x-3 tablet:text-[0.8125rem]"
    >
      <span>Product engineering</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Internal tools</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Platform systems</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>AI in practice</span><span aria-hidden="true" class="text-site-line">✳</span>
      <span>Technical leadership</span>
    </div>
  </section>

  <section class="py-7 pb-[2.625rem]" aria-labelledby="selected-work-title">
    <SectionHeading
      id="selected-work-title"
      eyebrow="The good stuff"
      title="Selected work"
      link-text="See all work"
      to="/work"
    />
    <div
      class="grid grid-cols-1 gap-x-[1.5625rem] border-t-[3px] border-site-purple tablet:grid-cols-2"
    >
      <WorkCard
        v-for="(story, index) in work"
        :key="story.slug"
        :index="index + 1"
        :company="story.company"
        :kind="story.kind"
        :title="story.title"
        :summary="story.summary"
        :to="`/work/${story.slug}`"
        :status="story.status"
        :featured="story.slug === 'all-the-things'"
      />
    </div>
  </section>

  <section
    class="grid grid-cols-1 items-start gap-5 border-t border-site-line py-7 pb-10 tablet:grid-cols-[0.85fr_1fr] tablet:gap-[2.8125rem]"
  >
    <div>
      <SectionEyebrow label="A little context" />
      <AppText as="h2" variant="section-title">Engineer by trade.<br />Curious by default.</AppText>
    </div>
    <div>
      <AppText as="p" variant="body" class="mb-[1.125rem] mt-0 max-w-[36.875rem] text-[1.0625rem]">
        I like solving problems across the product and technical stack, from understanding what
        users need to building the applications, APIs, and infrastructure behind the experience.
        Before software, I spent ten years working with kids; I still bring curiosity and patience
        to my work.
      </AppText>
      <AppButton to="/about" variant="text"
        >More about me <span aria-hidden="true">↗</span></AppButton
      >
    </div>
  </section>
</template>
