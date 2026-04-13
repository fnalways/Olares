---
outline: deep
description: Add text-to-speech to Open WebUI on Olares using OpenedAI Speech, an OpenAI-compatible TTS server.
head:
  - - meta
    - name: keywords
      content: Olares, Open WebUI, OpenedAI Speech, text-to-speech, TTS, AI voice
app_version: "1.0.12"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Enable Text-to-Speech in Open WebUI

OpenedAI Speech is an OpenAI-compatible text-to-speech (TTS) server that runs locally on your Olares device. By connecting it to Open WebUI, you can have AI responses read aloud directly in your chat sessions.

## Learning objectives

In this guide, you will learn how to:
- Install OpenedAI Speech on Olares.
- Get the shared endpoint URL for OpenedAI Speech.
- Configure Open WebUI to use OpenedAI Speech for voice output.

## Prerequisites

- Open WebUI installed and configured with a model backend. See [Set up with model apps](openwebui.md) or [Set up with Ollama](openwebui-ollama.md).
- Admin privileges in Open WebUI

## Install OpenedAI Speech

1. Open Market and search for "OpenedAI Speech".
   <!-- ![OpenedAI Speech](/images/manual/use-cases/openedai-speech.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

:::info Not a standalone app
OpenedAI Speech is a backend service. It does not have its own interface and must be used through a compatible client like Open WebUI.
:::

## Get the shared endpoint URL

1. Open **Settings** and navigate to **Applications** > **OpenedAI Speech**.

2. Under **Shared entrances**, click the entry to view the endpoint URL.
   <!-- ![OpenedAI Speech shared entrance](/images/manual/use-cases/openedai-speech-shared-entrance.png#bordered) -->

3. Copy the shared endpoint URL. For example:
   ```plain
   http://a1b2c3d40.shared.olares.com
   ```

## Configure Open WebUI

1. In Open WebUI, click your profile icon in the bottom-left corner and select **Settings**.
   <!-- ![Open WebUI settings](/images/manual/use-cases/openwebui-speech-settings.png#bordered) -->

2. Navigate to **Audio**.

3. Set **TTS Engine** to **OpenAI**.

4. Set the **API Base URL** to the shared endpoint URL you copied.
   <!-- ![Configure TTS URL](/images/manual/use-cases/openwebui-speech-tts-config.png#bordered) -->

5. Click **Save**.

<!-- 6. Refresh or reopen Open WebUI for the changes to take effect. -->

## Listen to AI responses

1. Start a new chat or open an existing conversation.

2. Send a message and wait for the AI to respond.

3. Hover over the AI response and click the speaker icon to hear it read aloud.
   <!-- ![Play voice](/images/manual/use-cases/openwebui-speech-play.png#bordered) -->

## Learn more

- [Set up Open WebUI with model apps](openwebui.md): Connect Open WebUI to local LLMs using pre-configured model apps.
- [Set up Open WebUI with Ollama](openwebui-ollama.md): Use Ollama as a flexible model backend for Open WebUI.
