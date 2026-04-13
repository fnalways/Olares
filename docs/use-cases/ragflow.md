---
outline: [2, 3]
description: Learn how to install RAGFlow on Olares and build a knowledge base powered by local AI models for accurate, citation-backed question answering.
head:
  - - meta
    - name: keywords
      content: Olares, RAGFlow, RAG, knowledge base, document parsing, self-hosted, AI, Ollama
app_version: "1.0.20"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Build a local knowledge base with RAGFlow

RAGFlow is an open-source RAG (Retrieval-Augmented Generation) engine built on deep document understanding. It parses complex documents, chunks them intelligently, and pairs them with large language models to deliver accurate, citation-backed answers.

Running RAGFlow on Olares lets you keep your documents and AI models entirely on your own hardware, with no data leaving your environment.

## Learning objectives

In this guide, you will learn how to:
- Install RAGFlow and configure it with local AI models via Ollama.
- Create a knowledge base by uploading and parsing documents.
- Set up an AI chat assistant that answers questions from your knowledge base.

## Prerequisites

- Ollama is installed and running in your Olares environment. For more information, see [Download and run local AI models via Ollama](ollama.md).
- At least one chat model (e.g., `llama3.1:8b`) and one embedding model (e.g., `nomic-embed-text`) are downloaded in Ollama.
- Your Olares device uses the amd64 (x86_64) architecture.

## Install RAGFlow

1. Open Market and search for "RAGFlow".

   <!-- ![RAGFlow in Market](/images/manual/use-cases/ragflow.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Configure models

Before using RAGFlow, you need to connect it to your local language model and embedding model through Ollama.

### Add a chat model

1. Open **RAGFlow** from the Launchpad and sign in.
2. In the upper-right corner, click your avatar and select **Model Providers**.

   <!-- ![Open Model Providers](/images/manual/use-cases/ragflow-model-providers.png#bordered) -->

3. Find **Ollama** in the provider list, and click **Add model** to add a chat model.

   <!-- ![Add Ollama chat model](/images/manual/use-cases/ragflow-add-chat-model.png#bordered) -->

4. Fill in the model details:
   - **Model Type**: Chat
   - **Model Name**: Enter the name of the model you downloaded in Ollama (e.g., `llama3.1:8b`).
   - **Base URL**: Use the Ollama endpoint provided by Olares. You can find this under **Settings** > **Applications** > **Ollama** > **Shared entrances** in your Olares Settings.
5. Click **OK** to save.

### Add an embedding model

1. On the same **Model Providers** page, click **Add model** again under Ollama.

   <!-- ![Add Ollama embedding model](/images/manual/use-cases/ragflow-add-embedding-model.png#bordered) -->

2. Fill in the model details:
   - **Model Type**: Embedding
   - **Model Name**: Enter the name of the embedding model you downloaded in Ollama (e.g., `nomic-embed-text`).
   - **Base URL**: Use the same Ollama endpoint as above.
3. Click **OK** to save.

## Create a knowledge base

A knowledge base stores your parsed documents so RAGFlow can retrieve relevant content when answering questions.

1. From the left sidebar, click **Knowledge Base**, then click **Create Knowledge Base**.

   <!-- ![Create knowledge base](/images/manual/use-cases/ragflow-create-kb.png#bordered) -->

2. Enter a name for the knowledge base.
3. Under **Embedding model**, select the embedding model you added in the previous step.
4. Click **Save** to create the knowledge base.
5. Click **Upload files** to add your documents. RAGFlow supports Word, PDF, Excel, TXT, images, and more.

   <!-- ![Upload files](/images/manual/use-cases/ragflow-upload-files.png#bordered) -->

6. After the files are uploaded, select them and click **Parse** to start document parsing.

   <!-- ![Parse documents](/images/manual/use-cases/ragflow-parse-docs.png#bordered) -->

7. Wait for the parsing to complete. You can click a file name to preview the parsed chunks and verify the results.

   <!-- ![Preview parsed content](/images/manual/use-cases/ragflow-parsed-content.png#bordered) -->

:::tip Test retrieval
After parsing, use the **Retrieval Test** feature on the knowledge base page to check whether your documents return relevant results for sample queries. This helps you fine-tune chunking settings before connecting the knowledge base to a chat assistant.
:::

## Create a chat assistant

With the knowledge base ready, you can create an AI chat assistant that answers questions based on your documents.

1. From the left sidebar, click **Chat**, then click **Create Assistant**.

   <!-- ![Create chat assistant](/images/manual/use-cases/ragflow-create-chat.png#bordered) -->

2. Configure the assistant:
   - **Assistant Name**: Enter a descriptive name.
   - **Language**: Select the language that matches your documents.
   - **LLM**: Select the chat model you configured earlier.
   - **Knowledge Bases**: Select one or more knowledge bases to associate with the assistant.

   <!-- ![Configure assistant](/images/manual/use-cases/ragflow-configure-chat.png#bordered) -->

3. Click **OK** to save the configuration.
4. Click the assistant you just created to open the chat window.
5. Start asking questions. RAGFlow retrieves relevant content from your knowledge base and generates answers with citations.

   <!-- ![Chat with citations](/images/manual/use-cases/ragflow-chat-result.png#bordered) -->

## Learn more

- [Download and run local AI models via Ollama](ollama.md): Manage your local models.
- [Build your local AI agent with LobeHub](lobechat.md): Create specialized AI agents with a chat interface.
- [Search smarter with Vane (Perplexica)](perplexica.md): Use AI-powered search with local models.
