---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
description: Official documentation for Olares — the open-source sovereign cloud OS for self-hosting AI, apps, and data. Install Olares, manage your system, and explore real-world use cases.

hero:
  name: "Olares"
  text: "An open-source personal cloud OS"
  tagline: "Let people own their data again"
  actions:
  - theme: brand
    text: What is Olares?
    link: /manual/overview
  - theme: alt
    text: Star us on GitHub
    link: https://github.com/beclab/olares

features:
- icon: 🚀
  title: Get started with Olares
  details: Install Olares on your hardware and begin taking control of your data in minutes.
  link: /manual/get-started/

- icon: ⚙️
  title: Master your system
  details: Dive into Olares' system apps to configure, personalize, and access your personal cloud.
  link: /manual/olares/

- icon: 📱
  title: Hands-on with LarePass
  details: Securely access and manage your Olares from LarePass, the cross-platform client for Olares.
  link: /manual/larepass/

- icon: 💡
  title: Explore Use Cases
  details: Discover various ways you can leverage Olares in daily life with real-life tutorials and use cases.
  link: /use-cases/
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
