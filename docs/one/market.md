---
outline: [2, 3]
description: Find, install, and update applications using Olares Market. Learn how to set up shared team services and upload custom app charts.
---

# Install & update applications

Olares Market is an open and permissionless application platform. Use it to find official Olares apps, third-party tools, and AI services.

This page guides you through installing, configuring, and updating applications.

## Install applications

To install a standard application for your personal use:

1. Open Market from Dock or Launchpad.
2. Find your target app, click **Get**, and then click **Install**.

    When the installation finishes, the button changes to **Open**.

### Set up shared applications

Shared applications run centrally on the cluster, allowing multiple team members to use the same resources, such as an AI model service. This type of installation depends on whether the application has a built-in user interface or requires a separate one. In addition, the installation tasks differ for the administrator who sets up the service and members who connect to it.

#### Separate backend and client

This type of shared applications requires two separated applications to work: 
- The backend service: This is the shared application that handles the logic. But it does not provide a user interface on its own.
- The user interface: This is the reference application that users interact with.

The installation tasks for administrator and memebers are:
- Administrator: Install the shared application first, such as Ollama. This launches the core service for the cluster.
- Members (including the admin): Install the corresponding reference application, such as Open WebUI or LobeChat, to access the core service.

#### Integrated backend and client

This type of shared applications packages the backend service and user interface together in a single application. For example, Dify and ComfyUI.

The installation tasks for administrator and members are:
- Administrator: Install the shared application, such as Dify Shared. This launches the core service and installs the user interface for the admin.
    
    :::tip ComfyUI Launcher 
    For apps like ComfyUI Shared, the admin must open the launcher component to configure and start the service before others can use it.
    :::

- Members: Install the same application from the Market. But for members, this installation acts as an access shortcut to the shared service running on the admin's account.

### Install custom applications

Install applications manually by uploading their package files. This is useful for testing apps in development or installing private applications not listed in the Market.

1. Prepare an Olares Application Chart file. Supported formats include `.zip`, `.tgz`, `.tar`, and `.gz`.

    :::info About Chart files
    In Olares, an application package is called an Application Chart file. It acts like an installer, similar to an `.exe` on Windows or `.apk` on Android, and contains all the code and instructions needed to run the app.

2. Open **Market** from the Dock or Launchpad.
3. From the left sidebar, click **My Olares** > **Upload custom chart**, and then select the chart file to install.
4. When the installation finishes, the custom application is displayed on the **Upload** tab.

### Configure environment variables

Some applications require specific settings such as API keys or system paths to run. If an app requires variables that are not yet set, Market displays a configuration window during installation.

![Configure environment variables window](/images/manual/olares/set-app-env-var.jpeg#bordered)

- Custom variables: Enter the value in the configuration window directly to continue with the installation.
- Referenced system variables: You must go to the Olares **Settings** > **Developer** > **System Environment Variables** to set the value for the corresponding variable first, and then continue with the installation.

## Update applications

Keep your applications secure and feature-rich by installing updates.

1. Open Market from the Dock or Launchpad.
2. In the left sidebar, click **Updates**. A badge indicates the number of available updates.
3. Select your update method:
    - Click **Update** under a specific app to update it individually.
    - Click **Update all** to update every app in the list simultaneously.

## Resources

- [Clone applications](../manual/olares/market/clone-apps.md)
- [Manage paid applications](../manual/olares/market/purchase-paid-apps.md)
- [Installation FAQs](../manual/olares/market/market.md#faqs)
