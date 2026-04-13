---
outline: [2, 3]
description: Set up MTranServer on Olares for high-performance offline translation with minimal resource usage.
head:
  - - meta
    - name: keywords
      content: Olares, MTranServer, translation, offline translation, self-hosted, API
app_version: "1.0.9"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Translate text with MTranServer

MTranServer is a high-performance offline translation server built for speed and private deployment. It runs entirely on CPU with just 1 GB of memory, requires no GPU, and responds in about 50 ms per request. It supports major languages worldwide with translation quality comparable to Google Translate.

Running MTranServer on Olares gives you a private translation API that other apps and scripts can call directly, with no data leaving your device.

## Learning objectives

In this guide, you will learn how to:
- Install MTranServer on Olares.
- Set up the API endpoint for external access.
- Test the translation API with a curl command.

## Install MTranServer

1. Open Market and search for "MTranServer".
   <!-- ![MTranServer](/images/manual/use-cases/mtranserver.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

:::info
MTranServer runs as a background API service, so it does not appear on Launchpad. You can find it in **Settings** > **Applications** or **Market** > **My Olares**.
:::

## Set up API access

To call the translation API from external clients (such as curl on your computer or scripts outside Olares), you need to configure the API endpoint.

### Configure authentication level

By default, the API's authentication level is set to **Internal**, which allows apps on the same local network to access the API without a login check. If you need to call the API from external tools or scripts, change it to **Public**.

1. Open Settings, then navigate to **Applications** > **MTranServer** > **MTranServer API**.
2. Set **Authentication level** to **Public**.
3. Click **Submit**.

<!-- ![MTranServer authentication level](/images/manual/use-cases/mtranserver-authentication-level.png#bordered) -->

:::warning
MTranServer does not have built-in API key authentication. Setting the authentication level to **Public** means anyone with the endpoint URL can access the API. Only use **Public** if you understand the security implications.
:::

### Get the endpoint

1. On the same settings page, click **Set up endpoint**.
2. Copy the endpoint URL displayed in the dialog. You will use this as the base URL when calling the translation API.

<!-- ![MTranServer endpoint](/images/manual/use-cases/mtranserver-endpoint.png#bordered) -->

:::info Why not use the shared entrance?
Shared entrances are only accessible from within the Olares cluster (between apps running inside Kubernetes). If you need to call the API from outside the cluster, such as from your terminal or an external application, use the regular entrance URL.
:::

## Test the translation API

Use curl to send a translation request. Replace `<YOUR_ENDPOINT>` with the endpoint URL you copied.

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "from": "en",
    "to": "zh",
    "text": "MinerU is a tool that converts PDFs into machine-readable formats, allowing for easy extraction into any format."
  }' \
  <YOUR_ENDPOINT>/translate
```

A successful response returns the translated text in JSON format:

```json
{
  "translation": "MinerU是一个将PDF转换为机器可读格式的工具，可以轻松提取为任何格式。"
}
```

### Request format

| Field  | Type   | Description                              |
|:-------|:-------|:-----------------------------------------|
| `from` | string | Source language code (e.g., `en`, `zh`)  |
| `to`   | string | Target language code (e.g., `zh`, `en`)  |
| `text` | string | Text to translate                        |

## Learn more

- [Translate PDFs with PDFMathTranslate](pdfmathtranslate.md): Translate PDF documents while preserving layout and formulas.
