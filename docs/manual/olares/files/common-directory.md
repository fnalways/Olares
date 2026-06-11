---
outline: [2, 3]
description: Centrally manage AI models with the Common directory. Download once, use everywhere, save disk space, and support multi node clusters.
---

# Managing shared models with the Common directory

Olares provides the Common directory as a system-level shared space where multiple AI applications can access the same model files. This eliminates duplicate downloads, saves disk space, and keeps your model library organized in one place.

This guide explains how the Common directory works, how to configure AI tools to use it, and how to manage your models within it.

## Understand the Common directory

The Common directory allows multiple AI applications, including ComfyUI, Ollama, and Hugging Face, to share the same set of model files.

![Common directory](/images/manual/olares/files-common-directory.png#bordered)

With the Common directory:
- **Download once, use everywhere**: After downloading a model, all applications can access it.
- **Centralized storage, no fragmentation**: All model files reside together under Common, not scattered across various application caches or data directories.
- **Save disk space**: Avoid duplicate copies of the same model across multiple applications.
- **Multi node cluster ready**: When scaling from a single node to multiple nodes, the Common directory automatically migrates to shared storage, allowing all nodes to access the same model data.

The Common directory contains the following default subfolders:
| Subdirectory | Corresponding tool | Purpose |
|:---|:---|:---|
| `huggingface` | Hugging Face Hub | Stores models downloaded via `huggingface-cli`. |
| `ollama` | Ollama | Stores models pulled via Ollama. |
| `comfyui` | ComfyUI | Stores models used by ComfyUI, such as Checkpoints, LoRAs, and VAEs. |

::: tip
For other AI tools, such as llama.cpp and vLLM, create your own subdirectory under Common and configure the tool to point there.
:::

## Access the Common directory

1. Open the Files app.
2. Under the **Application** section in the left sidebar, click **Common**.

  You will see the `huggingface`, `ollama`, and `comfyui` subfolders. Work with them just like any other folders, and create, delete, or move files as needed.

## Set up AI tools to use the Common directory

Olares presets Common directory support for popular AI tools. The following sections explain how each tool is configured and how to migrate existing models.

### Hugging Face models

Starting with Olares V1.12.6, the system presets the `HF_HOME` environment variable, pointing the Hugging Face cache directory to `/common/huggingface` by default.

Use the following command to download a model. The files are automatically saved under the `huggingface` subdirectory in Common:

```bash
huggingface-cli download {model-id}
```

#### Migrate existing models

If you have previously downloaded Hugging Face models, you can manually migrate them to Common.

1. Locate the old model cache folder.

   - Models downloaded with `--local-dir` are stored in the folder specified by the `--local-dir` parameter.
   - Models downloaded with `huggingface-cli` are stored in the Hugging Face default cache directory, typically at `~/.cache/huggingface/hub`.

2. Copy the folder to `/common/huggingface/models/`, preserving the directory structure.
3. Verify that the models load correctly from Common.
4. After confirmation, delete the corresponding model folders from the original cache directory.
5. For future downloads, use the `huggingface-cli download {model-id}` command without `--local-dir` so the tool automatically uses the cache in Common.

### Ollama models

Starting with Olares V1.12.6, Ollama saves models under `/common/ollama` by default.

#### Migrate existing models

1. Copy the contents of the old model directory, typically at `~/.ollama/models`, to `/common/ollama`.
2. Restart the Ollama service and verify that models load correctly.
3. After confirmation, delete the old directory.

### ComfyUI models

Starting with Olares V1.12.6, ComfyUI saves models to `/common/comfyui` by default.

#### Migrate existing models

To migrate existing models to Common, follow these steps:

1. Copy ComfyUI's existing `models` folder to `/common/comfyui/models/`, preserving the directory structure.
2. Open the ComfyUI application directory and locate the `extra_model_paths.yaml` file. If it does not exist, create it.
3. Add a configuration entry so ComfyUI can also read models from `/common/comfyui`. For example:

   ```yaml
   comfyui:
     base_path: /common/comfyui
     checkpoints: models/checkpoints/
     loras: models/loras/
     vae: models/vae/
   ```

4. Save the file and restart the ComfyUI application.
5. Open ComfyUI and verify that models load correctly.
6. After confirmation, delete the original `models` folder.

### Other tools, including llama.cpp and vLLM

For other tools, such as llama.cpp and vLLM, place model files in an appropriate subdirectory under Common, and then point the tool to that path via command line arguments or environment variables:

```bash
# llama.cpp example
./main -m /common/huggingface/models/llama-2-7b/ggml-model.bin -p "Hello"

# vLLM example
python -m vllm.entrypoints.api_server --model /common/huggingface/models/meta-llama/Llama-2-7b-chat-hf
```

## Manage model files in the Common directory

::: warning
The Common directory is shared across applications. Deleting or modifying files might affect multiple applications. Before deleting, ensure no running AI application uses the model.
:::

Use the Files app to work with model files in Common, just like any other folders:
- **Upload models**: Drag and drop model files directly into the appropriate subdirectory, for example, `comfyui`.
- **Delete models**: Right-click an unwanted model and select **Delete**. After deletion, the corresponding AI application can no longer load the model. Re-download if needed later.
- **Move or rename**: Freely organize your model file structure.

## Frequently asked questions

### Can I create my own subdirectories under Common?

Yes. Create folders with any names under Common to store other shared data, such as datasets or vector databases.

### Does the Common directory count against my personal storage quota?

No. Common is a system-level directory and does not count against personal quotas, but it does consume the node's total disk space. If disk space runs low, clean up unnecessary model files.

### Does the Common directory automatically migrate when upgrading from a single node to multiple nodes?

Yes. During scaling, Olares automatically migrates the Common directory from local SSD to JuiceFS shared storage, ensuring all nodes access the same model files.

### My Hugging Face models don't appear in the Common directory?

Check whether you used the `--local-dir` parameter when downloading the model. This parameter saves models to a specified location instead of Common.

To download models, use the `huggingface-cli download {model-id}` command without `--local-dir`. This command saves model files to Common by default.
