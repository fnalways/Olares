---
outline: [2, 3]
description: Install turnkey AI model apps from Olares Market, download model files, get the shared endpoint, and connect Open WebUI or other OpenAI-compatible clients.
head:
  - - meta
    - name: keywords
      content: Olares, model apps, Ollama, vLLM, llama.cpp, local LLM, AI inference, self-hosted
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Set up AI model apps

In addition to the standalone Ollama app, Olares Market offers pre-packaged model apps that bundle a specific AI model with a serving backend. By packaging one model per app, Olares can manage GPU resources for each model individually. Each app handles API serving automatically, so you can get started with minimal configuration.

Three backend engines are available:

| Backend | Strengths | Example app |
|:--------|:----------|:------------|
| Ollama | Wide compatibility | Qwen3.5 27B Q4_K_M (Ollama) |
| vLLM | High-throughput inference | Gemma3 12B (vLLM) |
| llama.cpp | CPU-GPU hybrid inference | GPT-OSS 120B (LLaMA.cpp) |

:::info Embedding models
Some model apps in Market are embedding models (e.g., BGE-M3, Nomic Embed v1.5). These models convert text into numerical vectors for search and retrieval-augmented generation (RAG). They cannot be used for chat. For setup instructions, see [Use embedding models](#use-embedding-models).
:::

## Learning objectives

In this guide, you will learn how to:
- Install a model app from Market and download the model
- Get the shared endpoint for connecting to client apps
- Connect the model to a client app and start chatting

## Prerequisites

- A GPU with sufficient VRAM for your chosen model (the examples in this guide require at least 24 GB VRAM)
- Olares admin privileges

:::warning One model at a time
Large models can consume most of the available VRAM. If you need to switch to a different model, stop the current model app first to free up GPU memory.
:::

## Install a model app

1. Open Market and select the **AI** category to browse available model apps.
   <!-- ![Model app in Market](/images/manual/use-cases/model-apps.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Download the model

1. Open the model app from Launchpad.
2. The model files download automatically. Depending on the model size, this may take some time.
   <!-- ![Model downloading](/images/manual/use-cases/model-apps-downloading.png#bordered) -->
3. Once the download completes, the app displays a ready status and the model name. Note the model name exactly as shown. Some client apps require you to enter it manually when configuring the connection.
   <!-- ![Model ready](/images/manual/use-cases/model-apps-ready.png#bordered) -->

## Get the shared endpoint

To connect the model to another Olares app, use the shared endpoint rather than the URL shown on the model app page.

1. Open Settings, then navigate to **Application** > **[Your Model App]**.
2. In **Shared entrances**, select the model name to view the endpoint URL.
3. Copy the shared endpoint. For example:
   ```plain
   http://abc123def.shared.olares.com
   ```

:::tip Why use the shared endpoint?
The URL shown on the model app page is user-specific and relies on browser-based frontend calls, which can trigger login prompts or cross-origin restrictions. The shared endpoint avoids these issues by routing through the backend directly.
:::

## Use the model

All three backends expose an OpenAI-compatible API, so you can connect them to any client app that supports the OpenAI API format. The following examples show how to connect each backend to a different client app. The general approach is the same: paste the shared endpoint into the client app's model configuration.

### Ollama model app with Open WebUI

This example uses Qwen3.5 27B Q4_K_M (Ollama) with Open WebUI.

1. Install Open WebUI from Market if you haven't already.
2. Launch Open WebUI and create an admin account.
3. Click your profile icon in the bottom-left corner and select **Admin Panel**.
4. Navigate to **Settings** > **Connections**.
5. Click <i class="material-symbols-outlined">add</i> to add a new connection.
6. In the **URL** field, paste the shared endpoint you copied earlier.
7. Click **Save**.
   <!-- ![Open WebUI connection](/images/manual/use-cases/model-apps-openwebui-connection.png#bordered) -->
8. Return to the main chat page, select the model from the dropdown, and start chatting.
   <!-- ![Open WebUI chat](/images/manual/use-cases/model-apps-openwebui-chat.png#bordered) -->

For more details, see [Chat with local LLMs using Open WebUI](openwebui.md).

### vLLM model app with Dify

This example uses Gemma3 12B (vLLM) with Dify.

1. Install Dify Shared from Market if you haven't already, then open Dify from Launchpad.
2. Click your profile icon in the top-right corner and select **Settings**.
3. Navigate to **Model Provider**, search for "vLLM", and install the provider.
   <!-- ![Dify vLLM provider](/images/manual/use-cases/model-apps-dify-provider.png#bordered) -->
4. Click the vLLM provider and add a model:
   - **Model Name**: Enter the model name (for example, `/models/gemma-3-27b`).
   - **Server URL**: Paste the shared endpoint with `/v1` appended. For example:
     ```plain
     http://abc123def.shared.olares.com/v1
     ```
   <!-- ![Add vLLM model in Dify](/images/manual/use-cases/model-apps-dify-add-model.png#bordered) -->
5. Click **Save**.

   :::tip
   You can keep default values for other fields. If a field requires an API key, enter any placeholder text such as `vllm`.
   :::

6. Navigate to the **Studio** tab and create a new app.
7. In the model selection dropdown on the right, select the vLLM model you just configured.
8. Click **Publish**, then type a message in the **Debug & Preview** window to test.
   <!-- ![Dify chat](/images/manual/use-cases/model-apps-dify-chat.png#bordered) -->

### llama.cpp model app via API

This example uses GPT-OSS 120B (LLaMA.cpp) and verifies it through the OpenAI-compatible API.

Test the model by sending a chat completion request from the Olares terminal:

```bash
curl -X POST http://abc123def.shared.olares.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What are the top 10 universities in the world?"}
    ],
    "max_tokens": 2000,
    "temperature": 0.7
  }'
```

A successful JSON response confirms the model is serving correctly.

:::tip First request might be slow
The first request after download can take longer as the model loads into GPU memory. Subsequent requests will be faster.
:::

## Use embedding models

Embedding models convert text into numerical vectors that enable semantic search and retrieval-augmented generation (RAG). Instead of chatting directly, you use them as the embedding backend for a client app like Open WebUI, which can then search uploaded documents and include relevant context in chat responses.

The following example uses BGE-M3 (Ollama) with Open WebUI.

### Set up the embedding model

1. Install an embedding model app (e.g., BGE-M3 (Ollama)) from Market.
2. Open the app and wait for the model to finish downloading.
3. Note the model name shown on the app page.
4. Open Settings, then navigate to **Application** > **[Your Embedding Model App]**.
5. In **Shared entrances**, select the model name to view the endpoint URL and copy it.

### Configure the embedding model in Open WebUI

1. Install Open WebUI from Market if you haven't already.
2. Launch Open WebUI and click your profile icon in the bottom-left corner, then select **Admin Panel**.
3. Navigate to **Settings** > **Documents**.
   <!-- ![Open WebUI Documents settings](/images/manual/use-cases/model-apps-openwebui-documents.png#bordered) -->
4. Set **Embedding Model URL** to the shared endpoint you copied earlier.
5. Set **Embedding Model** to the model name noted on the app page (e.g., `bge-m3`).
   <!-- ![Open WebUI embedding model config](/images/manual/use-cases/model-apps-openwebui-embedding.png#bordered) -->
6. Click **Save**.

### Create a knowledge base and chat with RAG

1. In Open WebUI, navigate to **Workspace** > **Knowledge**.
2. Click <i class="material-symbols-outlined">add</i> to create a new knowledge base.
   <!-- ![Create knowledge base](/images/manual/use-cases/model-apps-openwebui-knowledge.png#bordered) -->
3. Upload your documents to the knowledge base.
4. Return to the main chat page and start a new chat.
5. Click <i class="material-symbols-outlined">add</i> next to the message input and attach the knowledge base. The chat model will retrieve relevant content from your documents and include it in its responses.
   <!-- ![RAG-enhanced chat](/images/manual/use-cases/model-apps-openwebui-rag.png#bordered) -->

:::tip
RAG requires both an embedding model and a chat model. Make sure you also have a chat model app running and connected to Open WebUI.
:::

## Learn more

- [Download and run local AI models via Ollama](ollama.md): Manage multiple models through the standalone Ollama app and its CLI.
- [Run models with LiteLLM](litellm.md): Use LiteLLM as a unified gateway for multiple model providers.
- [Connect AI apps](../manual/best-practices/connect-ai-apps.md): Learn the general pattern for connecting AI service apps to client apps on Olares.
