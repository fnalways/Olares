---
outline: [2, 3]
description: Set up Refly on Olares as your AI-powered workspace. Connect local models through Ollama for multi-threaded conversations, knowledge bases, and agentic workflows.
head:
  - - meta
    - name: keywords
      content: Olares, Refly, AI workspace, agentic workflow, self-hosted, Ollama
app_version: "1.0.10"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Set up Refly as your AI workspace

Refly is an open-source agentic workspace that combines multi-threaded AI conversations, knowledge bases, and workflow automation in a single interface. It supports multiple AI models and can process documents, images, and web content.

Running Refly on Olares lets you connect it to local models through Ollama, keeping your data and conversations fully under your control.

## Prerequisites

- [Ollama](ollama.md) is installed and running, with at least one model downloaded (e.g., `mistral:latest`).

## Install MinIO

Refly requires MinIO as its storage backend. Install it before installing Refly.

1. Open Market and search for "MinIO".
   <!-- ![MinIO](/images/manual/use-cases/minio.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Install Refly

1. Open Market and search for "Refly".
   <!-- ![Refly](/images/manual/use-cases/refly.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Create an account

1. Open Refly from Launchpad.
2. Follow the on-screen prompts to register and activate your account.
   <!-- ![Refly registration](/images/manual/use-cases/refly-register.png#bordered) -->

## Connect to Ollama

Connect Refly to your local Ollama instance so it can use your downloaded models.

:::info
Refly currently supports the regular Ollama API entrance only. The shared entrance is not supported.
:::

### Get the Ollama API endpoint

1. Open Settings, then navigate to **Applications** > **Ollama**.

2. In **Entrances**, select **Ollama API**, then click **Set up endpoint**.

   ![Click Ollama API](/images/manual/use-cases/ollama-api.png#bordered)

3. Copy the endpoint address.
   <!-- ![Get Ollama endpoint](/images/manual/use-cases/obtain-ollama-endpoint.png#bordered) -->

### Add a model provider

1. In Refly, navigate to the model provider settings.
   <!-- ![Refly provider settings](/images/manual/use-cases/refly-provider-settings.png#bordered) -->

2. Click **Add Provider** and select **Ollama**.
   <!-- ![Select Ollama provider](/images/manual/use-cases/refly-add-provider.png#bordered) -->

3. In the **Base URL** field, paste the Ollama endpoint address you copied.
   <!-- ![Enter Base URL](/images/manual/use-cases/refly-base-url.png#bordered) -->

4. Click **Test Connection** to verify the connection. Make sure the test passes before proceeding.
   <!-- ![Test connection](/images/manual/use-cases/refly-test-connection.png#bordered) -->

### Add a model

1. Navigate to the model configuration settings.
   <!-- ![Model configuration](/images/manual/use-cases/refly-model-config.png#bordered) -->

2. Add a model and select the one you downloaded earlier (e.g., `mistral:latest`).
   <!-- ![Add model](/images/manual/use-cases/refly-add-model.png#bordered) -->

3. Save the configuration.

You can now start using Refly with your local AI models for conversations, knowledge base queries, and workflow automation.

## Learn more

- [Ollama](ollama.md): Set up a local AI model service on Olares.
- [LobeHub (LobeChat)](lobechat.md): Build local AI agents with multi-model support.
- [Open WebUI](openwebui.md): A chat interface for local AI models.
