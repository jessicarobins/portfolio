<script setup lang="ts">
import AppButton from '../components/AppButton.vue'
import AppText from '../components/AppText.vue'
import SectionEyebrow from '../components/SectionEyebrow.vue'
</script>

<template>
  <section class="py-12 pb-20 tablet:py-[4.0625rem] tablet:pb-[6.5625rem]">
    <SectionEyebrow label="Contact / open to the right next thing" />
    <AppText as="h1" variant="contact-title">
      Have a good problem?<br /><span
        class="mt-[13px] inline-block rotate-[-3deg] bg-site-acid px-2.5 pt-[5px] pb-2 text-site-bg tablet:px-4 tablet:pt-2 tablet:pb-3.5"
        >Let’s talk.</span
      >
    </AppText>
    <AppText as="p" variant="lede" class="mt-[1.6875rem] max-w-[39.375rem]">
      I’m interested in full-stack product engineering, internal tools, and platform teams solving
      people-centered problems across the stack.
    </AppText>
    <div class="mt-[1.5625rem] flex flex-wrap gap-[0.6875rem]">
      <AppButton href="mailto:jessrrobins@gmail.com" variant="primary"
        >Email Jess <span aria-hidden="true">↗</span></AppButton
      >
      <AppButton href="https://www.linkedin.com/in/jessica-robins/" external variant="outline"
        >LinkedIn <span aria-hidden="true">↗</span></AppButton
      >
      <AppButton href="https://github.com/jessicarobins" external variant="outline"
        >GitHub <span aria-hidden="true">↗</span></AppButton
      >
    </div>
  </section>
</template>
