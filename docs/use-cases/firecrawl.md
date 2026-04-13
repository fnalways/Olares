---
outline: [2, 3]
description: Set up Firecrawl on Olares to crawl websites and convert them into clean, LLM-ready data. Use the API directly or integrate with Dify to build knowledge bases.
head:
  - - meta
    - name: keywords
      content: Olares, Firecrawl, web crawler, web scraping, LLM data, Dify, knowledge base, self-hosted
app_version: "1.0.13"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Crawl websites with Firecrawl

Firecrawl is an API service that crawls websites and converts them into clean markdown or structured data. It handles all accessible subpages automatically, without requiring a sitemap. The output is LLM-ready, making it ideal for feeding data into AI applications.

Running Firecrawl on Olares keeps your crawled data under your own control and lets you integrate it with other Olares apps like Dify.

## Learning objectives

In this guide, you will learn how to:
- Install Firecrawl on Olares.
- Start a crawl job using the Firecrawl API.
- Check crawl results and job status.
- Integrate Firecrawl with Dify to build a knowledge base from crawled data.

## Prerequisites

- Olares admin privileges.

## Install Firecrawl

1. Open Market and search for "Firecrawl".
   <!-- ![Firecrawl](/images/manual/use-cases/firecrawl.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Get the Firecrawl API endpoint

Before making API calls, you need to find your Firecrawl endpoint.

1. Open Settings, then navigate to **Applications** > **Firecrawl**.
2. Under **Entrances**, click **Firecrawl**.
3. Copy the **Endpoint** URL. For example, `https://717172b4.laresprime.olares.com`.

   <!-- ![Firecrawl endpoint](/images/manual/use-cases/firecrawl-endpoint.png#bordered) -->

## Use Firecrawl

After installation, Firecrawl opens a worker status page where you can monitor the progress of crawl jobs.

### Start a crawl job

You can start a crawl job by sending a POST request to the Firecrawl API. Use `curl` or an API tool like Hoppscotch.

```bash
curl --request POST \
  --url https://717172b4.{username}.olares.com/v1/crawl \
  --header 'Content-Type: application/json' \
  --data '{
  "url": "https://docs.olares.com"
}'
```

Replace `<https://717172b4.{username}.olares.com>` with the endpoint URL you copied from Settings.

### Check crawl results

1. Open the URL returned in the response to view the crawl results as a JSON object.
2. Key fields to check:

   | Field | Description |
   |:------|:------------|
   | `status` | Current state of the crawl job (e.g., `completed`) |
   | `completed` | Number of pages successfully crawled |
   | `total` | Total number of pages discovered |
   | `data` | Array of crawled pages, each containing `markdown` content and `metadata` |

   Example response:

   ```json
   {
     "success": true,
     "status": "completed",
     "completed": 558,
     "total": 558,
     "data": [
       {
         "markdown": "# Olares Space overview ...",
         "metadata": {
           "title": "Olares Space overview | Olares",
           "sourceURL": "https://docs.olares.com/space/",
           "statusCode": 200
         }
       }
     ]
   }
   ```

3. You can also monitor the crawl progress from the Firecrawl worker status page.

   <!-- ![Firecrawl worker status](/images/manual/use-cases/firecrawl-worker-status.png#bordered) -->

## Integrate Firecrawl with Dify

Dify can use Firecrawl as a web scraping tool to populate knowledge bases. This is useful when you want to build an AI assistant with context from specific websites. For detailed steps, see the [Dify documentation on Firecrawl integration](https://dify.ai/blog/dify-ai-blog-integrated-with-firecrawl).

1. Open Dify, navigate to **Knowledge**, and create a new knowledge base.
2. Select **Sync from website** as the data source, and choose **Firecrawl** as the web scraping provider.

   <!-- ![Select Firecrawl as provider](/images/manual/use-cases/firecrawl-dify-select-provider.png#bordered) -->

3. Install and configure the Firecrawl plugin:

    a. Click **configure**. On the **Data Source** page, install the Firecrawl plugin.

       <!-- ![Install Firecrawl plugin](/images/manual/use-cases/firecrawl-dify-install-plugin.png#bordered) -->

    b. Click **Configure** > **Add API Key** and enter the following:

       - **Firecrawl server's Base URL**: Enter your Firecrawl API endpoint.
       - **Firecrawl API Key**: Enter any non-empty text.

       <!-- ![Configure Firecrawl API key](/images/manual/use-cases/firecrawl-dify-configure-key.png#bordered) -->

    c. Click **Save**.

4. Go back to the knowledge base page, enter the target URL, and configure crawl options.

   <!-- ![Configure crawl options](/images/manual/use-cases/firecrawl-dify-crawl-options.png#bordered) -->

5. Configure embedding models.

   <!-- ![Configure embedding models](/images/manual/use-cases/firecrawl-dify-embedding.png#bordered) -->

6. Click **Save and Process**. Dify will start crawling the website and indexing the results into your knowledge base.

   <!-- ![Crawl in progress](/images/manual/use-cases/firecrawl-dify-crawl-progress.png#bordered) -->

## Learn more

- [Firecrawl API reference](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#crawl): Full API documentation for advanced crawl options.
- [Firecrawl official documentation](https://docs.firecrawl.dev/introduction): SDKs, LLM integrations, and more features.
