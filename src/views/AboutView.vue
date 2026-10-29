<script setup lang="ts">
import AppButton from '../components/AppButton.vue'
import AppText from '../components/AppText.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <PageIntro eyebrow="About Jess / Washington, DC" class="border-0 pb-8">
    <template #title>Engineer by trade.<br />Curious by default.</template>
    <template #lede>
      I turn ambiguous problems into useful products, take work from discovery through delivery, and
      build systems other teams can rely on. I’ve worked across application development, platform
      engineering, internal tools, and technical leadership.
    </template>
  </PageIntro>

  <section
    class="grid grid-cols-1 gap-5 py-[2.125rem] pb-[2.625rem] tablet:grid-cols-2 tablet:gap-[2.8125rem]"
  >
    <div>
      <SectionEyebrow label="How I work" />
      <AppText as="h2" variant="section-title" class="mb-[0.9375rem] text-[2rem]"
        >Keep the whole system in view.</AppText
      >
      <AppText as="p" variant="body" class="mt-0 text-[0.9375rem]"
        >I’m comfortable moving between product questions, application code, APIs, infrastructure,
        quality, and team coordination. I care about the experience people get and the systems that
        make it reliable, secure, and easier for teams to extend.</AppText
      >
      <AppText as="p" variant="body" class="mt-3 text-[0.9375rem]"
        >At Netflix, that meant shaping a studio access model, building the product and reusable
        libraries, and helping more than ten teams adopt it across twelve applications. At Compass,
        it meant leading a cross-team product initiative and managing a team of five
        engineers.</AppText
      >
      <AppText as="p" variant="body" class="mt-3 text-[0.9375rem]"
        >I’ve also applied AI to engineering workflows: I wrote code-review rules specific to our
        codebase and manually evaluated them with promptfoo, then integrated those rules into an
        existing internal tool that comments on pull requests. Separately, I’m building All the
        Things, an AI product in development.</AppText
      >
    </div>
    <div>
      <SectionEyebrow label="How I got here" />
      <AppText as="h2" variant="section-title" class="mb-[0.9375rem] text-[2rem]"
        >Some unexpected turns.</AppText
      >
      <AppText as="p" variant="body" class="mt-0 text-[0.9375rem]"
        >Before software, I worked with kids for ten years. I studied mathematics and psychology at
        Carnegie Mellon, then turned my web-development hobby into a career.</AppText
      >
      <AppText as="p" variant="body" class="mt-3 text-[0.9375rem]"
        >I’ve led efforts to make interview practices more equitable at Compass and GetUpside, and
        built Not The Pipeline, a full-stack product that lets companies assess their technical
        interviews and get tailored recommendations to improve them for DEI.</AppText
      >
      <AppText as="p" variant="body" class="mt-3 text-[0.9375rem]"
        >Outside work, I’m usually off on an adventure with my family, playing board games, hanging
        out with my cats, or listening to punk music.</AppText
      >
    </div>
  </section>

  <section
    class="flex flex-col items-start justify-between gap-6 border-t border-site-line py-[1.125rem] pb-[2.8125rem] tablet:flex-row tablet:items-center"
  >
    <AppText variant="mono" class="text-site-muted"
      >Always interested in useful problems and good people to solve them with.</AppText
    >
    <AppButton to="/contact" variant="secondary"
      >Say hi <span aria-hidden="true">↗</span></AppButton
    >
  </section>
</template>
