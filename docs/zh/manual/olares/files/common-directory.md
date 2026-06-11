---
outline: [2, 3]
description: 通过公共目录集中管理 AI 模型。一次下载，全局复用，节省磁盘空间，并支持多节点集群。
---

# 使用公共目录管理共享模型

Olares 提供**公共**目录（Common）作为系统级共享空间，让多个 AI 应用可以访问同一套模型文件。以避免重复下载、节省磁盘空间，并将模型库集中在一处管理。

本文介绍公共目录的工作原理、如何配置常用 AI 工具使用它，以及如何在公共目录中管理模型文件。

## 了解公共目录

公共目录是文件管理器中的一个系统级共享空间。它允许多个 AI 应用共享同一套模型文件，包括 Hugging Face、ComfyUI 和 Ollama。

![公共目录](/images/zh/manual/olares/files-common-directory.png#bordered)

通过公共目录，你可以实现：
- **一次下载，全局复用**：下载模型后，所有应用均可访问。
- **集中存储，告别碎片化**：所有模型文件统一存放在公共目录下，不再分散在各个应用的缓存或数据目录中。
- **节省磁盘空间**：避免同一模型在多个应用中重复占用空间。
- **多节点集群就绪**：从单节点扩展到多节点时，公共目录会自动迁移至共享存储，让所有节点都能访问相同的模型数据。

公共目录包含三个默认子文件夹：

| 子目录 | 对应工具 | 用途 |
| :--- | :--- | :--- |
| `huggingface` | Hugging Face Hub | 存储通过 `huggingface-cli` 下载的模型。 |
| `comfyui` | ComfyUI | 存储 ComfyUI 使用的模型，如 Checkpoint、LoRA 和 VAE。 |
| `ollama` | Ollama | 存储通过 Ollama 拉取的模型。 |

:::tip
对于其他 AI 工具，如 llama.cpp 和 vLLM，可以在公共目录下自行创建子目录，并配置这些工具从该路径读取模型。
:::

## 访问公共目录

1. 打开文件管理器。
2. 在左侧边栏的**应用**下，点击**公共**。

    你将看到 `huggingface`、`ollama` 和 `comfyui` 三个子文件夹。你可以像操作普通文件夹一样创建、删除或移动文件。

## 配置 AI 工具使用公共目录

Olares 已为常用 AI 工具预设了公共目录的支持。以下分别介绍各工具的配置方式，以及如何将已有模型迁移到公共目录。

### Hugging Face 模型

从 Olares V1.12.6 起，Hugging Face 模型默认保存到 `/common/huggingface`。

#### 迁移已有模型

如果你之前已通过 Hugging Face 默认缓存方式下载过模型，可将模型文件手动迁移至公共目录:
1. 找到 Hugging Face 的默认缓存目录。通常位于 `~/.cache/huggingface/hub/`。
2. 将对应的模型文件夹复制到 `/common/huggingface/` 目录下，保持原有的目录结构。
3. 验证模型是否可正常加载。例如：打开一个依赖该模型的应用并使用该模型，如果应用能正常识别并运行，说明迁移成功。
4. 确认无误后，删除原缓存目录中的对应模型文件夹。

:::info
如果你之前使用 `--local-dir` 参数将模型下载到了其他指定位置，建议删除旧文件并重新下载。重新下载时，可通过以下两种方式将模型保存到公共目录：
- **手动上传**：将下载的模型文件直接上传到公共目录`/common/huggingface/` 下的对应子文件夹中。
- **通过工具下载**：使用 ComfyUI Launcher 等工具重新下载模型，此时模型会自动保存到公共目录中。
:::

### Ollama 模型

从 Olares V1.12.6 起，Ollama 默认将模型保存到 `/common/ollama`。

#### 迁移已有模型

1. 找到旧模型的目录。通常位于 `~/.ollama/models`。
2. 将对应的模型文件夹复制到 `/common/ollama`，保持原有的目录结构。
3. 重启 Ollama 服务，并验证模型是否能正常加载。
4. 确认无误后，删除旧目录中对应的模型文件夹。

### ComfyUI 模型

从 Olares 1.12.6 起，ComfyUI 默认将模型保存到 `/common/comfyui`。

#### 迁移已有模型

如需将已有模型迁移到公共目录，可通过以下方式配置：

1. 将 ComfyUI 现有的 `models` 文件夹复制到 `/common/comfyui/models/` 下，保持原有的目录结构。
2. 打开 ComfyUI 应用所在的目录，找到 `extra_model_paths.yaml` 文件。如果不存在，新建该文件。
3. 在文件中添加配置，使 ComfyUI 从 `/common/comfyui` 读取模型。例如：

   ```yaml
   comfyui:
     base_path: /common/comfyui
     checkpoints: models/checkpoints/
     loras: models/loras/
     vae: models/vae/
   ```

4. 保存文件并重启 ComfyUI 应用。
5. 打开 ComfyUI，验证模型是否能正常加载。
6. 确认无误后，删除原来的 `models` 文件夹。

### 其他工具

其他工具，包括 llama.cpp 和 vLLM，将模型文件放入公共目录下的合适子目录，然后通过命令行参数或环境变量让工具指向该路径：

```bash
# llama.cpp 示例
./main -m /common/huggingface/models/llama-2-7b/ggml-model.bin -p "Hello"

# vLLM 示例
python -m vllm.entrypoints.api_server --model /common/huggingface/models/meta-llama/Llama-2-7b-chat-hf
```

## 在公共目录中管理模型文件

:::warning
公共目录是跨应用共享的，删除或修改文件可能会影响多个应用。删除前，请确保没有正在运行的 AI 应用使用该模型。
:::

你可以像操作普通文件夹一样，管理公共目录里的模型文件：
- **上传模型**：直接将模型文件拖放到对应的子目录中，例如 `comfyui`。
- **删除模型**：右键点击不需要的模型文件夹，选择**删除**。删除后，对应的 AI 应用将无法再加载该模型，需要时可重新下载。
- **移动或重命名**：自由组织模型文件的结构。

## 常见问题

### 我可以在公共目录下创建自己的子目录吗？

可以。在公共目录下创建任意名称的文件夹，用于存放其他共享数据，如数据集或向量数据库。

### 公共目录会占用我的个人存储配额吗？

不会。公共目录是系统级目录，不计入个人配额，但会占用节点的总磁盘空间。如果磁盘空间不足，可清理不必要的模型文件。

### 从单节点升级到多节点时，公共目录会自动迁移吗？

会。扩展过程中，Olares 会自动将公共目录从本地 SSD 迁移到 JuiceFS 共享存储，确保所有节点都能访问相同的模型文件。
