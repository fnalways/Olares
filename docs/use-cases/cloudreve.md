---
outline: [2, 3]
description: Use Cloudreve on Olares to manage, store, and share files with support for multiple storage providers including local, S3, and OneDrive.
head:
  - - meta
    - name: keywords
      content: Olares, Cloudreve, file management, file sharing, cloud storage, self-hosted, S3, OneDrive
app_version: "1.0.11"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Manage and share files with Cloudreve

Cloudreve is a self-hosted file management and sharing system that supports multiple storage providers, including local storage, OneDrive, S3-compatible services, Alibaba Cloud OSS, and Tencent COS. Running Cloudreve on Olares gives you a private cloud drive where you can upload, organize, and share files while keeping full control of your data.

## Learning objectives

In this guide, you will learn how to:
- Install Cloudreve on Olares
- Set up storage policies and user groups
- Upload, download, and organize files
- Share files with password protection and expiration

## Install Cloudreve

1. Open Market and search for "Cloudreve".
   <!-- ![Cloudreve](/images/manual/use-cases/cloudreve.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Use Cloudreve

After installation, click the Cloudreve icon on Launchpad to open the app.

<!-- ![Cloudreve home](/images/manual/use-cases/cloudreve-home.png#bordered) -->

### Set up storage policies

Cloudreve defaults to local storage. To allocate separate storage spaces for different users, you need to create a storage policy, then assign it to a user group.

1. Open the **Admin Panel** from the sidebar.

2. Navigate to **Storage Policies** and click **Add Storage Policy**.

3. Select a storage type. Cloudreve supports local storage, OneDrive, S3-compatible APIs, Alibaba Cloud OSS, Tencent COS, Upyun, and remote nodes.

   <!-- ![Cloudreve create storage](/images/manual/use-cases/cloudreve-create-storage.png#bordered) -->

4. Configure the storage policy settings and save.

### Create user groups

User groups define the storage policy and space quota for their members.

1. In the **Admin Panel**, navigate to **User Groups**.

2. Click **Add User Group**.

3. Select the storage policy you created and set the initial storage capacity.

   <!-- ![Cloudreve create user group](/images/manual/use-cases/cloudreve-create-user-group.png#bordered) -->

4. Save the user group.

### Create users

1. In the **Admin Panel**, navigate to **Users**.

2. Click **Add User**.

3. Enter the user details and select the user group you created. The storage quota is determined by the user group.

   <!-- ![Cloudreve create user](/images/manual/use-cases/cloudreve-create-user.png#bordered) -->

4. Save the new user.

### Change a user's password

1. In the **Admin Panel**, navigate to **Users**.

2. Click the **Edit** button next to the user.

3. Update the password and save.

   <!-- ![Cloudreve edit user](/images/manual/use-cases/cloudreve-edit-user.png#bordered) -->

### Upload and download files

1. Click the **+** button in the bottom-left corner.

2. Choose from **New Folder**, **Upload File**, or **Upload Directory**.

   <!-- ![Cloudreve upload](/images/manual/use-cases/cloudreve-upload.png#bordered) -->

3. After uploading, use the sidebar tags (Videos, Images, Music, Documents) to filter files by type.

### Share files

1. Select the file you want to share.

2. Click the **Share** button in the top-left corner, or right-click the file and select **Create Share Link**.

   <!-- ![Cloudreve share](/images/manual/use-cases/cloudreve-share.png#bordered) -->

3. Set a share password. Recipients must enter this password to access the file.

4. Set the expiration time or download count. The share link expires when either limit is reached first. Online preview is supported for videos, images, audio, and ePub files.

   <!-- ![Cloudreve share settings](/images/manual/use-cases/cloudreve-share-settings.png#bordered) -->

5. Copy the share link and send it to the recipient.

## FAQ

### How do I completely remove Cloudreve data after uninstalling?

After uninstalling Cloudreve from Market, open Files and delete the Cloudreve application folder to remove all remaining data.
