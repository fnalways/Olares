---
outline: [2, 3]
description: Install LocalAI on Olares to run open-source AI models locally with a built-in model store and chat interface.
head:
  - - meta
    - name: keywords
      content: Olares, LocalAI, local AI models, self-hosted, open-source AI, chat, model store
app_version: "1.0.11"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Run local AI models with LocalAI

LocalAI is a free, open-source alternative to commercial AI APIs like OpenAI and Claude. It lets you run large language models entirely on your own hardware with no data leaving your device. On Olares, LocalAI comes with a built-in model store and chat interface, so you can download models and start chatting in minutes.

## Prerequisites

- Olares running on an x86_64 (amd64) machine with a GPU

## Install LocalAI

1. Open Market and search for "LocalAI".
   <!-- ![LocalAI](/images/manual/use-cases/localai.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Download a model

When you first open LocalAI, the model list is empty. You need to download at least one model before you can start chatting.

1. Open LocalAI from Launchpad.
   <!-- ![Empty model list](/images/manual/use-cases/localai-empty.png#bordered) -->

2. Navigate to the model store.
   <!-- ![Model store](/images/manual/use-cases/localai-model-store.png#bordered) -->

3. Browse or search for the model you want, and click **Install** to start the download.
   <!-- ![Download model](/images/manual/use-cases/localai-download-model.png#bordered) -->

4. Wait for the download to complete. This might take a few minutes depending on the model size and your network speed.

## Chat with a model

Once a model is downloaded, you can start a conversation right away.

1. Click **Chat** to open the chat interface.
   <!-- ![Chat interface](/images/manual/use-cases/localai-chat.png#bordered) -->

2. Type your message and press **Enter** to get a response.
   <!-- ![Chat conversation](/images/manual/use-cases/localai-conversation.png#bordered) -->

## Learn more
- [Download and run local AI models via Ollama](./ollama.md): Use the Ollama CLI on Olares to manage local LLMs.
- [Run Ollama models with Open WebUI](./openwebui.md): Add a graphical interface for Ollama.
