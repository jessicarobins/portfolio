<script setup lang="ts">
import Button from '../components/Button.vue'
import Text from '../components/Text.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
</script>

<template>
  <section class="py-24 pb-40 tablet:py-33 tablet:pb-53">
    <SectionEyebrow label="Contact / open to the right next thing" />
    <Text as="h1" variant="contact-title">
      Have a good problem?<br /><span
        class="mt-7 inline-block rotate-[-3deg] bg-site-acid px-5 pt-3 pb-4 text-site-bg tablet:px-8 tablet:pt-4 tablet:pb-7"
        >Let’s talk.</span
      >
    </Text>
    <Text as="p" variant="lede" class="mt-14 max-w-[39.375rem]">
      I’m interested in full-stack product engineering, internal tools, and platform teams solving
      people-centered problems across the stack.
    </Text>
    <div class="mt-13 flex flex-wrap gap-6">
      <Button href="mailto:jessrrobins@gmail.com" variant="primary"
        >Email Jess <span aria-hidden="true">↗</span></Button
      >
      <Button href="https://www.linkedin.com/in/jessica-robins/" external variant="outline"
        >LinkedIn <span aria-hidden="true">↗</span></Button
      >
      <Button href="https://github.com/jessicarobins" external variant="outline"
        >GitHub <span aria-hidden="true">↗</span></Button
      >
    </div>
  </section>
</template>
