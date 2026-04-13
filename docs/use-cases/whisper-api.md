---
outline: [2, 3]
description: Learn how to use Whisper API on Olares to transcribe audio and video files to text, with support for multiple languages, speaker diarization, and transcript alignment.
head:
  - - meta
    - name: keywords
      content: Olares, Whisper API, WhisperX, speech-to-text, audio transcription, self-hosted
app_version: "1.0.6"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Transcribe audio with Whisper API

Whisper API is a self-hosted audio processing service built on WhisperX. It transcribes audio and video files into text with support for multiple languages, speaker diarization, and transcript alignment.

Running Whisper API on Olares keeps your audio data fully under your control while using GPU acceleration for fast transcription.

## Prerequisites

- Olares is running on a device with a GPU and at least 5 GB of available VRAM.
- A Hugging Face access token is configured in Olares. Whisper API uses this token to download required models.

  To configure, go to **Settings** > **Advanced** > **System environment variables**, and add or update the `HUGGINGFACE_TOKEN` variable with your token value.

## Install Whisper API

1. Open Market and search for "Whisper API".
   <!-- ![Whisper API](/images/manual/use-cases/whisper-api.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Use Whisper API

Whisper API organizes its features into four tabs:

| Tab | Description |
|:----|:------------|
| **Speech-to-Text** | Upload audio or video files for transcription. |
| **Speech and Text Services** | Access individual processing services<br> such as transcribe, align, diarize, and combine. |
| **Task Management** | View the status and results of all transcription tasks. |
| **Health** | Check the service health status. |

### Transcribe an audio file

1. Open Whisper API from Launchpad.

2. Go to the **Speech-to-Text** tab and select **speech-to-text**.
   <!-- ![Select speech-to-text](/images/manual/use-cases/whisper-api-speech-to-text.png#bordered) -->

3. Upload your audio file (for example, an MP3 file) and configure the transcription settings as needed.
   <!-- ![Upload audio file](/images/manual/use-cases/whisper-api-upload.png#bordered) -->

4. Click **Send** to start the transcription.
   <!-- ![Start transcription](/images/manual/use-cases/whisper-api-send.png#bordered) -->

### Check transcription results

1. Go to the **Task Management** tab to view all tasks.
   <!-- ![Task list](/images/manual/use-cases/whisper-api-tasks.png#bordered) -->

2. Click a task to view the transcription result.
   <!-- ![Transcription result](/images/manual/use-cases/whisper-api-result.png#bordered) -->

## Learn more

- [Ollama](ollama.md): Set up a local AI model service on Olares.
- [PDFMathTranslate](pdfmathtranslate.md): Translate scientific PDFs while preserving layout and formulas.
