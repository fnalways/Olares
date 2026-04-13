---
outline: [2, 3]
description: Set up Crawl4AI on Olares to crawl web pages and extract structured content using local LLMs for RAG, agents, and data pipelines.
head:
  - - meta
    - name: keywords
      content: Olares, Crawl4AI, web crawler, web scraper, LLM extraction, RAG, Ollama, self-hosted
app_version: "1.0.4"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Crawl web pages with Crawl4AI

Crawl4AI is an open-source web crawler that turns web pages into clean, LLM-ready Markdown. It supports structured data extraction powered by LLMs, making it ideal for RAG pipelines, AI agents, and data processing workflows.

Running Crawl4AI on Olares lets you pair it with a local Ollama instance for LLM-powered content extraction, all without sending data to external services.

## Learning objectives

In this guide, you will learn how to:
- Install Crawl4AI on Olares.
- Connect Crawl4AI to a local Ollama model.
- Crawl web pages using the Crawl4AI web UI.
- Use the Crawl4AI API for LLM-powered extraction.

## Prerequisites

- [Ollama installed](ollama.md) with at least one model downloaded.

## Install Crawl4AI

1. Open Market and search for "Crawl4AI".
   <!-- ![Crawl4AI](/images/manual/use-cases/crawl4ai.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Configure the Ollama connection

To use LLM-powered extraction, Crawl4AI needs to know where your local Ollama instance is running.

### Get the Ollama endpoint

1. Open Settings, and then go to **Applications** > **Ollama**.
2. Under **Shared entrances**, click **Ollama API** and copy the endpoint URL. For example, `http://94a553e00.shared.olares.com`.

   ![Ollama shared endpoint](/images/manual/use-cases/ollama-shared.png#bordered){width=80%}

### Set the Ollama API base in Crawl4AI

1. In Settings, go to **Applications** > **Crawl4AI** > **Manage environment variables**.
   <!-- ![Crawl4AI environment variables](/images/manual/use-cases/crawl4ai-env-vars.png#bordered){width=70%} -->

2. Configure the following variables:
   - `OLLAMA_API_BASE`: Click <i class="material-symbols-outlined">edit_square</i>, paste the Ollama endpoint URL you copied (for example, `http://94a553e00.shared.olares.com`), and then click **Confirm**.
   - `LLM_PROVIDER`: Set to `ollama/<model-name>`, where `<model-name>` matches the model you have in Ollama. For example, `ollama/gemma3:12b`.
3. Click **Apply**. Crawl4AI restarts automatically.

## Crawl a web page

1. Open Crawl4AI from the Launchpad.
2. Enter the URL you want to crawl in the **URL** field.
3. Click **RUN** to start crawling. The result appears as clean Markdown output.

   <!-- ![Crawl4AI web UI](/images/manual/use-cases/crawl4ai-run.png#bordered) -->

## Use LLM extraction via the API

Crawl4AI provides an API endpoint that combines crawling with LLM-powered content extraction. You can ask a question about any web page and get a structured answer.

From the Crawl4AI app, run:

```bash
curl -X GET "http://localhost:11235/llm/<encoded-url>?q=<your-question>"
```

For example, to ask "What is this page about?" for a news page:

```bash
curl -X GET "http://localhost:11235/llm/https%3A%2F%2Fwww.nbcnews.com%2Fbusiness?q=What%20is%20this%20page%20about%3F"
```

### Access Crawl4AI from other Olares apps

Other apps on your Olares can call the Crawl4AI API over the internal network. To enable this, the calling app must declare Crawl4AI as a provider in its `OlaresManifest.yaml`:

```yaml
permission:
  provider:
    - appName: crawl4ai
      providerName: crawl4ai
```

Once declared, the calling app can reach Crawl4AI using its internal domain. For example:

```bash
curl -X GET "http://<crawl4ai-entrance-hash>.<username>.olares.com/llm/https%3A%2F%2Fwww.nbcnews.com%2Fbusiness?q=What%20is%20this%20page%20about%3F"
```

:::info
Replace `<crawl4ai-entrance-hash>` and `<username>` with the actual values from your Crawl4AI entrance URL. You can find this in **Settings** > **Applications** > **Crawl4AI** > **Entrances**.
:::

## Learn more

- [Download and run local AI models via Ollama](ollama.md): Set up Ollama for local model inference.
- [Crawl4AI official documentation](https://docs.crawl4ai.com): Full reference for crawling strategies, extraction methods, and API usage.
