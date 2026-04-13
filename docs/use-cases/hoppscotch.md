---
outline: [2, 3]
description: Set up Hoppscotch on Olares for API testing. Learn how to resolve cross-origin issues with the browser extension.
head:
  - - meta
    - name: keywords
      content: Olares, Hoppscotch, API testing, Postman alternative, CORS, self-hosted, developer tools
app_version: "1.0.11"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Test APIs with Hoppscotch

Hoppscotch is an open-source API development platform and a lightweight alternative to Postman. It supports HTTP requests, WebSocket, GraphQL, Server-Sent Events, and more.

Running Hoppscotch on Olares gives you a private, self-hosted API testing environment.

## Learning objectives

In this guide, you will learn how to:
- Install Hoppscotch on Olares.
- Set up the Hoppscotch browser extension to resolve cross-origin (CORS) errors.

## Install Hoppscotch

1. Open Market and search for "Hoppscotch".

   <!-- ![Hoppscotch](/images/manual/use-cases/hoppscotch.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Enable cross-origin requests

By default, browsers enforce CORS (Cross-Origin Resource Sharing) restrictions, which block Hoppscotch from sending requests to APIs on other domains. To bypass this, install the Hoppscotch browser extension as a proxy.

:::info
This section uses Google Chrome as an example. The extension is also available for other Chromium-based browsers.
:::

1. Install the [Hoppscotch Browser Extension](https://chromewebstore.google.com/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld) from the Chrome Web Store.

   <!-- ![Hoppscotch extension in Chrome Web Store](/images/manual/use-cases/hoppscotch-chrome-extension.png#bordered) -->

2. Pin the Hoppscotch extension in Chrome's toolbar for easy access.
3. Click the Hoppscotch extension icon and add your Hoppscotch URL (the address in your browser's address bar) to the **Origins** list.

   <!-- ![Add origin to extension](/images/manual/use-cases/hoppscotch-extension-add-origin.png#bordered) -->

4. In Hoppscotch, select **Browser extension** as the interceptor at the bottom of the page.

   <!-- ![Select browser extension as interceptor](/images/manual/use-cases/hoppscotch-select-interceptor.png#bordered) -->

5. Refresh the Hoppscotch page and resend your request. Requests to external APIs should now complete successfully.

   <!-- ![Successful request](/images/manual/use-cases/hoppscotch-request-success.png#bordered) -->

## Learn more

- [Create a digital avatar with Duix.Avatar](duix-avatar.md): Use Hoppscotch to call the Duix.Avatar API and generate text-driven digital avatar videos.
<!-- - [Crawl websites with Firecrawl](firecrawl.md): Crawl websites and convert them into clean, LLM-ready data for AI applications. -->
- [Hoppscotch official documentation](https://docs.hoppscotch.io/): Full feature guide for collections, environments, tests, and more.
