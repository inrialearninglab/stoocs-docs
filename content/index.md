---
seo:
  title: Stoocs docs
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
headline: By Nathan
---
#top
:hero-background

#title
Documentation [Stoocs]{.text-primary} 

#description
Les données des MOOCs, réinventées pour le plaisir des yeux et des statistiques

#links
  :::u-button
  ---
  to: /user/add
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Documentation
  :::

  :::u-button
  ---
  color: neutral
  variant: outline
  size: xl
  to: https://mooc-stats.inria.fr
  target: _blank
  ---
  Aller à l'application
  :::

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
      modules: [
        '@nuxt/ui',
        '@nuxt/content',
        'nuxt-og-image',
        'nuxt-llms'
      ],

      css: ['~/assets/css/main.css']
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: [
      '@nuxt/ui',
      '@nuxt/content',
      'nuxt-og-image',
      'nuxt-llms'
    ],

    css: ['~/assets/css/main.css']
  })
  ```
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Utiliser l'application
      to: 'https://mooc-stats.inria.fr/'
      target: _blank
      trailingIcon: i-lucide-arrow-right
    - label: Voir sur GitHub
      to: 'https://github.com/inrialearninglab/stoocs'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Prêt à utiliser Stoocs ?
  description: Rejoignez Laurence et bien d'autres
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
