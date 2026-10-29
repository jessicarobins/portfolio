<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppButton from './components/AppButton.vue'
import SiteContainer from './components/SiteContainer.vue'
import SiteNavLink from './components/SiteNavLink.vue'

const route = useRoute()
</script>

<template>
  <a
    class="absolute top-2.5 left-2.5 z-10 -translate-y-[180%] bg-site-acid px-3.5 py-2.5 font-bold text-site-bg focus:translate-y-0"
    href="#main"
    >Skip to content</a
  >
  <div class="min-h-screen overflow-hidden">
    <SiteContainer
      as="header"
      class="flex min-h-[4.375rem] items-center justify-between gap-3 border-b-2 border-site-acid tablet:min-h-[5.125rem] tablet:gap-6"
    >
      <RouterLink
        class="inline-block rotate-[-3deg] bg-site-acid px-2 py-1.5 text-base leading-none font-black tracking-[-0.0625rem] text-site-bg no-underline tablet:px-3 tablet:py-2 tablet:text-xl"
        to="/"
        aria-label="Jess is Cool home"
        >jess is cool.</RouterLink
      >
      <nav
        class="flex items-center gap-2.5 tablet:gap-[clamp(14px,3vw,36px)]"
        aria-label="Main navigation"
      >
        <SiteNavLink to="/" :current="route.path === '/'">Home</SiteNavLink>
        <SiteNavLink to="/work" :current="route.path.startsWith('/work')">Work</SiteNavLink>
        <SiteNavLink to="/about" :current="route.path === '/about'">About</SiteNavLink>
        <AppButton
          to="/contact"
          variant="outline"
          class="px-2 py-1.5 text-[0.625rem] tablet:px-3 tablet:py-2 tablet:text-xs"
          :aria-current="route.path === '/contact' ? 'page' : undefined"
          >Say hi <span aria-hidden="true">↗</span></AppButton
        >
      </nav>
    </SiteContainer>

    <SiteContainer as="main" id="main" tabindex="-1" class="min-h-[70vh]">
      <RouterView />
    </SiteContainer>

    <SiteContainer
      as="footer"
      class="flex flex-wrap justify-between gap-[1.125rem] border-t border-site-line py-[1.0625rem] pb-[1.625rem] font-mono text-[0.6875rem] leading-relaxed text-site-muted max-tablet:flex-col"
    >
      <span>Jessica “Jess” Solka · Washington, DC</span>
      <div class="flex flex-wrap gap-5">
        <AppButton
          href="https://github.com/jessicarobins"
          external
          variant="text"
          class="font-mono text-[0.6875rem] text-site-ink uppercase"
          >GitHub <span aria-hidden="true">↗</span></AppButton
        >
        <AppButton
          href="https://www.linkedin.com/in/jessica-robins/"
          external
          variant="text"
          class="font-mono text-[0.6875rem] text-site-ink uppercase"
          >LinkedIn <span aria-hidden="true">↗</span></AppButton
        >
        <AppButton
          href="mailto:jessrrobins@gmail.com"
          variant="text"
          class="font-mono text-[0.6875rem] text-site-ink uppercase"
          >Email <span aria-hidden="true">↗</span></AppButton
        >
      </div>
    </SiteContainer>
  </div>
</template>
