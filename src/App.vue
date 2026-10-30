<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Button from './components/Button.vue'
import SiteContainer from './components/SiteContainer.vue'
import SiteNavLink from './components/SiteNavLink.vue'

const route = useRoute()
</script>

<template>
  <a
    class="absolute top-5 left-5 z-10 -translate-y-[180%] bg-site-acid px-7 py-5 font-bold text-site-bg focus:translate-y-0"
    href="#main"
    >Skip to content</a
  >
  <div class="min-h-screen overflow-hidden">
    <SiteContainer
      as="header"
      class="flex min-h-35 items-center justify-between gap-6 border-b-2 border-site-acid tablet:min-h-41 tablet:gap-12"
    >
      <RouterLink
        class="inline-block rotate-[-3deg] bg-site-acid px-4 py-3 text-base leading-none font-black tracking-brand text-site-bg no-underline tablet:px-6 tablet:py-4 tablet:text-xl"
        to="/"
        aria-label="Jess is Cool home"
        >jess is cool.</RouterLink
      >
      <nav class="flex items-center gap-5 tablet:gap-fluid" aria-label="Main navigation">
        <SiteNavLink to="/" :current="route.path === '/'">Home</SiteNavLink>
        <SiteNavLink to="/work" :current="route.path.startsWith('/work')">Work</SiteNavLink>
        <SiteNavLink to="/about" :current="route.path === '/about'">About</SiteNavLink>
        <Button
          to="/contact"
          variant="outline"
          class="px-4 py-3 text-label tablet:px-6 tablet:py-4 tablet:text-xs"
          :aria-current="route.path === '/contact' ? 'page' : undefined"
          >Say hi <span aria-hidden="true">↗</span></Button
        >
      </nav>
    </SiteContainer>

    <SiteContainer as="main" id="main" tabindex="-1" class="min-h-[70vh]">
      <RouterView />
    </SiteContainer>

    <SiteContainer
      as="footer"
      class="flex flex-wrap justify-between gap-9 border-t border-site-line py-9 pb-13 font-mono text-caption leading-relaxed text-site-muted max-tablet:flex-col"
    >
      <span>Jessica “Jess” Solka · Washington, DC</span>
      <div class="flex flex-wrap gap-10">
        <Button
          href="https://github.com/jessicarobins"
          external
          variant="text"
          class="font-mono text-caption text-site-ink uppercase"
          >GitHub <span aria-hidden="true">↗</span></Button
        >
        <Button
          href="https://www.linkedin.com/in/jessica-robins/"
          external
          variant="text"
          class="font-mono text-caption text-site-ink uppercase"
          >LinkedIn <span aria-hidden="true">↗</span></Button
        >
        <Button
          href="mailto:jessrrobins@gmail.com"
          variant="text"
          class="font-mono text-caption text-site-ink uppercase"
          >Email <span aria-hidden="true">↗</span></Button
        >
      </div>
    </SiteContainer>
  </div>
</template>
