---
outline: [2, 3]
description: Set up MaxKB on Olares to build AI-powered chatbots and knowledge bases using local models through Ollama.
head:
  - - meta
    - name: keywords
      content: Olares, MaxKB, knowledge base, RAG, chatbot, Ollama, self-hosted
app_version: "1.0.9"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Build an AI knowledge base with MaxKB

MaxKB is an open-source knowledge base question-answering system built on large language models and Retrieval-Augmented Generation (RAG). It lets you create AI-powered chatbot applications that can answer questions based on your own documents and data.

Running MaxKB on Olares, you can connect it to local models through Ollama and build knowledge-driven chatbots without sending data to external services.

## Learning objectives

In this guide, you will learn how to:
- Install and log in to MaxKB.
- Connect MaxKB to local Ollama models.
- Create a simple chatbot application and an advanced orchestration application.
- Build a knowledge base from your documents.

## Prerequisites

- Ollama is installed and running in your Olares environment. This tutorial uses `qwen3-vl:8b` as an example. For more information, see [Download and run local AI models via Ollama](ollama.md).

## Install MaxKB

1. Open Market and search for "MaxKB".

   <!-- ![MaxKB in Market](/images/manual/use-cases/maxkb.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Log in to MaxKB

1. Open MaxKB from the Launchpad.

2. On the login page, enter the default credentials. You can find them on the app detail page in Market.

   - **Username**: `admin`
   - **Password**: `MaxKB@123..`

   <!-- ![MaxKB default credentials in Market](/images/manual/use-cases/maxkb-credentials.png#bordered) -->

## Connect to an Ollama model

MaxKB comes with a default embedding model for processing documents. To use MaxKB for conversations, you need to add a chat model.

### Get the Ollama endpoint

1. Open **Settings**, and then go to **Applications** > **Ollama**.

2. Under **Shared entrances**, click **Ollama API**, and then copy the endpoint address.

   ![Obtain Ollama host address from Olares Settings](/images/manual/use-cases/obtain-ollama-hosturl2.png#bordered){width=70%}

### Add the model in MaxKB

1. In MaxKB, navigate to the **Models** page. You can see a default embedding model is already configured.

   <!-- ![MaxKB models page](/images/manual/use-cases/maxkb-models.png#bordered) -->

2. Click **Add Model**.

   <!-- ![MaxKB add model](/images/manual/use-cases/maxkb-add-model.png#bordered) -->

3. Configure the following settings:

   - **Model type**: Select **Ollama**.
   - **Model name**: Enter the model name. In this example, enter `qwen3-vl:8b`.
   - **API URL**: Enter the Ollama shared endpoint URL you copied earlier.
   - **API Key**: Enter any value (for example, `123abc`). Ollama does not require an API key, but MaxKB requires this field.

   <!-- ![MaxKB model configuration](/images/manual/use-cases/maxkb-model-config.png#bordered) -->

4. Click **Save** to add the model.

   <!-- ![MaxKB model added](/images/manual/use-cases/maxkb-model-added.png#bordered) -->

## Create a chatbot application

### Create a simple application

1. Navigate to the **Applications** page, and then click **Create Application**.

2. Select **Simple Application**, enter a name for your application, and then select the AI model you added.

   <!-- ![MaxKB create simple app](/images/manual/use-cases/maxkb-create-simple-app.png#bordered) -->

3. Click **Create**.

4. Configure the application settings as needed, and then click **Publish**.

   <!-- ![MaxKB publish app](/images/manual/use-cases/maxkb-publish-app.png#bordered) -->

5. Return to the application list. You can see the application is now in the **Published** state.

   <!-- ![MaxKB app list](/images/manual/use-cases/maxkb-app-list.png#bordered) -->

6. Click the application to enter the details page, and then copy the public access URL. Open the URL in a browser to start chatting. Alternatively, click **Chat** to test the conversation directly.

   <!-- ![MaxKB chat](/images/manual/use-cases/maxkb-chat.png#bordered) -->

### Create an advanced orchestration application

For more complex workflows, MaxKB supports advanced orchestration that lets you visually design multi-step conversation flows.

1. On the **Applications** page, click **Create Application**, and then select **Advanced Orchestration**.

   <!-- ![MaxKB create advanced app](/images/manual/use-cases/maxkb-create-advanced-app.png#bordered) -->

2. Enter a name for your application, and then click **Create**.

3. In the orchestration editor, drag and connect nodes to build your conversation workflow. Configure each node with the appropriate model and parameters.

   <!-- ![MaxKB orchestration editor](/images/manual/use-cases/maxkb-orchestration.png#bordered) -->

4. Click **Publish** when you are satisfied with the workflow.

5. Return to the application list to confirm that the advanced orchestration application is published and ready to use.

   <!-- ![MaxKB advanced app published](/images/manual/use-cases/maxkb-advanced-published.png#bordered) -->

## Build a knowledge base

A knowledge base lets your chatbot answer questions based on your own documents. MaxKB processes uploaded files into searchable chunks and can automatically generate Q&A pairs.

1. Navigate to the **Knowledge Base** page, and then click **Create Knowledge Base**.

   <!-- ![MaxKB create knowledge base](/images/manual/use-cases/maxkb-create-kb.png#bordered) -->

2. Enter a name for the knowledge base, and then click **Create**.

   <!-- ![MaxKB name knowledge base](/images/manual/use-cases/maxkb-name-kb.png#bordered) -->

3. Upload your documents. MaxKB supports various file formats including PDF, Word, and plain text files.

   <!-- ![MaxKB upload documents](/images/manual/use-cases/maxkb-upload-docs.png#bordered) -->

4. Wait for the documents to be processed and segmented.

   <!-- ![MaxKB document processing](/images/manual/use-cases/maxkb-doc-processing.png#bordered) -->

5. Select the documents you want to use, and then click **Generate Questions** to automatically create Q&A pairs from the content.

   <!-- ![MaxKB generate questions](/images/manual/use-cases/maxkb-generate-questions.png#bordered) -->

6. Review and edit the generated questions as needed.

   <!-- ![MaxKB review questions](/images/manual/use-cases/maxkb-review-questions.png#bordered) -->

:::tip Link knowledge base to an application
To use the knowledge base in a chatbot, go to the application settings and associate the knowledge base with your application. The chatbot will then reference the knowledge base when answering questions.
:::

## Learn more

- [Download and run local AI models via Ollama](ollama.md): Install and manage local AI models.
- [Build your local AI agent with LobeHub (LobeChat)](lobechat.md): Another way to build AI chatbots on Olares.
- [MaxKB official documentation](https://maxkb.pro/): Explore advanced features and configurations.
