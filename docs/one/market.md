---
outline: [2, 3]
description: 
---

# Install & update applications

Olares Market is an open and permissionless application platform. It provides one-click installation for a variety of applications and content recommendation algorithms from both Olares and third-party developers.

This guide helps you learn how to install and update applications through the Market.

## Install applications

To install an application from Market:

1. Open Market from Dock or Launchpad.
2. Navigate to the app you want, and click **Get**.
3. When the operation button changes to **Install**, click it to start the installation.
4. Once finished, the button will change to **Open**.

:::tip
To cancel an installation, hover over the operation button and click **Cancel** when it appears.
:::

### Install shared and reference applications

To ensure a shared service is running and accessible within the cluster, follow this general installation process based on the type of Shared App:

* **Headless backend service**:
    This type of shared applications typically require third-party reference applications to access its service. Take Ollama for example:
    1. The administrator installs the shared application first. This makes the core service available in the cluster.
    
    2. Members (including the administrator) install the corresponding reference application (e.g., Open WebUI or LobeChat) to access the Ollama service.

* **Complete application with built-in UI**:
    This type of shared applications can provide service to itself. Typical examples are Dify Shared and ComfyUI Shared.
    
    1. The administrator installs the shared application first. This not only launches the shared service for the cluster, but also installs the client-side interface as the reference application.
    
       ::: tip ComfyUI Launcher
       ComfyUI Shared contains a web launcher component to facilitate the management of related services and resources. The administrator needs to configure and start the service from the ComfyUI Launcher.
       :::

    2. Other members in the cluster install the same application. For these users, only the access point to the shared application is installed.

### Install custom applications

To install a custom application:

1. Prepare an Olares Application Chart file (in `.zip`, `.tgz`, `.tar`, or `.gz` format).
2. Open **Market** from the Dock or Launchpad.
3. From the left sidebar, click **My Olares** > **Upload custom chart**, and select the chart file to install.

You can view all installed custom applications under the **My Olares** > **Upload** tab.

### Setting environment variables

During app installation, if an environment variable is required for the app but it either has no default value or its referenced system variable is unset, Market will display a settings pop-up:

![Set environment variables](/images/manual/olares/set-app-env-var.jpeg#bordered)

* **Custom variables**: Enter the value directly in the installation pop-up.
* **Referenced system variables**: You must first go to the **Settings > Developer > System Environment Variables** page to set the value for the corresponding variable.

After completing the environment variable setup, you can continue the installation.

## Update applications
To update an application from Market:

1. Open Market from the Dock or Launchpad.
2. In the left sidebar, click **Updates** under the **Manage** section. If there are available updates, a notification badge will display.
3. The **Available updates** panel will display the applications with available updates.Click **Update all** to update all applications at once, or update each application individually.

