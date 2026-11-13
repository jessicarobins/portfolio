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
      I’m a frontend-focused full-stack engineer who works closely with product and design to turn
      user needs into software. My work has included customer-facing apps, internal tools, and the
      systems that support them.
    </template>
  </PageIntro>

  <section class="grid grid-cols-1 gap-10 py-17 pb-21 tablet:grid-cols-2 tablet:gap-23">
    <div>
      <SectionEyebrow label="How I work" />
      <Text as="h2" variant="heading" :level="3" class="mb-8">Keep the whole system in view.</Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-0 text-body-small">
        I like getting close to a product problem, collaborating with product managers, designers,
        and other engineers to shape the experience, then building the software that makes it real.
        I pay attention to details people feel, such as clear flows and useful feedback. I also
        write end-to-end tests to check that the whole experience works as expected.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        At Compass, I was a technical lead and engineering manager, leading a five-person team and
        delivery of a communications product across the platform. More recently at Netflix, I
        partnered with product, backend, and Studio teams to build a new authorization system.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        I’ve applied AI to engineering workflows: I wrote code-review rules specific to our
        codebase and manually evaluated them with promptfoo, then integrated those rules into an
        existing internal tool that comments on pull requests. I built All the Things, a live
        product for researching collections, creating reusable catalogs, and tracking personal
        progress.
      </Text>
    </div>
    <div>
      <SectionEyebrow label="How I got here" />
      <Text as="h2" variant="heading" :level="3" class="mb-8">
        From working with kids to building software.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-0 text-body-small">
        Before software, I worked with kids for ten years. I studied mathematics and psychology at
        Carnegie Mellon, then turned my web-development hobby into a career.
      </Text>
      <Text as="p" variant="body" color-variant="secondary" class="mt-6 text-body-small">
        I’ve led efforts to make interview practices more equitable at Compass and GetUpside. I also
        built Not The Pipeline, a full-stack product that assessed technical interview processes and
        recommended changes to support diversity, equity, and inclusion.
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
