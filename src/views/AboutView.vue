<script setup lang="ts">
import Button from '../components/Button.vue'
import Text from '../components/Text.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <PageIntro eyebrow="About Jess / Washington, DC" class="border-0 pb-16">
    <template #title>Engineer by trade.<br />Curious by default.</template>
    <template #lede>
      I turn ambiguous problems into useful products, take work from discovery through delivery, and
      build systems other teams can rely on. I’ve worked across application development, platform
      engineering, internal tools, and technical leadership.
    </template>
  </PageIntro>

  <section class="grid grid-cols-1 gap-10 py-17 pb-21 tablet:grid-cols-2 tablet:gap-23">
    <div>
      <SectionEyebrow label="How I work" />
      <Text as="h2" variant="heading" :level="3" class="mb-8">Keep the whole system in view.</Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-0 text-body-small">
        I’m comfortable moving between product questions, application code, APIs, infrastructure,
        quality, and team coordination. I care about the experience people get and the systems that
        make it reliable, secure, and easier for teams to extend.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        At Netflix, that meant shaping a studio access model, building the product and reusable
        libraries, and helping more than ten teams adopt it across twelve applications. At Compass,
        it meant leading a cross-team product initiative and managing a team of five engineers.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        I’ve also applied AI to engineering workflows: I wrote code-review rules specific to our
        codebase and manually evaluated them with promptfoo, then integrated those rules into an
        existing internal tool that comments on pull requests. Separately, I’m building All the
        Things, an AI product in development.
      </Text>
    </div>
    <div>
      <SectionEyebrow label="How I got here" />
      <Text as="h2" variant="heading" :level="3" class="mb-8">Some unexpected turns.</Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-0 text-body-small">
        Before software, I worked with kids for ten years. I studied mathematics and psychology at
        Carnegie Mellon, then turned my web-development hobby into a career.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        I’ve led efforts to make interview practices more equitable at Compass and GetUpside, and
        built Not The Pipeline, a full-stack product that lets companies assess their technical
        interviews and get tailored recommendations to improve them for DEI.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        Outside work, I’m usually off on an adventure with my family, playing board games, hanging
        out with my cats, or listening to punk music.
      </Text>
    </div>
  </section>

  <section
    class="flex flex-col items-start justify-between gap-12 border-t border-site-line py-9 pb-23 tablet:flex-row tablet:items-center"
  >
    <Text variant="label" color-variant="secondary">
      Always interested in useful problems and good people to solve them with.
    </Text>
    <Button to="/contact" variant="secondary">Say hi <span aria-hidden="true">↗</span></Button>
  </section>
</template>
