---
outline: [2, 4]
description: Learn how to upload data, share content, and connect external cloud drives in Olares.
---

# Manage files

Olares's built-in Files app provides a secure and efficient solution for file storage and synchronization. It allows you to access your personal files anywhere, keep data synchronized across devices, and manage third-party cloud storage in one place.

Operations in Files are essentially the same as in other file managers. This page introduces some common tasks in Files to get you started.

## Understand the interface

The Files interface mainly consists of the following areas:

* Drive: Stores your personal files such as documents and pictures.
* Sync: A library-based storage area for files requiring frequent modifications or real-time synchronization.
* Application: Reserved for application-specific data. Primarily for development and debugging, not general file storage.
* Cloud storage: Access files from integrated services such as Google Drive and AWS S3.
* Share: A centralized hub for managing shared folders.

![Files](/images/manual/olares/files-index.png#bordered)

## Upload files

### Upload via the Files app

1. Open the Files app from the Dock or Launchpad on Olares.
2. In the left sidebar, select the directory where you want to upload files. For example, **Documents**.
3. Upload multiple files or folders using one of these methods:
   - Drag and drop files from your local file manager into the Files window. 
   - Click <i class="material-symbols-outlined">drive_folder_upload</i> in the top right corner. 
   - Right-click in an empty space and select from the context menu.

:::info
Files supports resumable uploads. If an upload is interrupted, it will automatically resume from the last checkpoint.
:::

### Upload via LarePass desktop

:::info Import your Olares ID
To start using LarePass desktop, you must import your Olares ID by pasting your mnemonics. Make sure you have [backed up your mnemonics](/manual/larepass/back-up-mnemonics.md).
:::
LarePass desktop offers the same upload experience as the Files app, with automatic syncing to your Olares ID.

### Upload via LarePass mobile

You can also upload files or folders on your phone via the LarePass app.
<Tabs>
<template #Direct-upload>

1. Open LarePass app and navigate to the **Files** tab.
2. Select the directory where you want to upload files.
3. Tap <i class="material-symbols-outlined">add_circle</i> in the bottom-right corner, and select one of the following upload options:
   - **File**: Select from your phone's storage.
   - **Image/Video**: Select from your phone's gallery.
   :::tip
   If you want to organize your uploads, you can select **Create folder** first.
   :::
4. Follow the on-screen instructions to complete the upload.
</template>

<template #Share-to-upload>

:::info
The exact steps may vary depending on your operating system and browser.
:::

This method allows you to quickly upload files or media via your phone's sharing options.
1. Open the share menu for the file.
2. Select the LarePass icon in the sharing options, or select **LarePass** in the **Other actions** menu. You will be directed to the LarePass app.
3. In the LarePass app, select the destination for your upload:
   - **drive**: Upload files to your Drive storage for personal use.
   - **sync**: Upload files to your Sync storage for sharing or synchronization.
4. Follow the on-screen instructions to complete the process based on your selected target location.
</template>
</Tabs>

Files uploaded via the LarePass mobile app will also sync automatically with your Olares ID.

## Share files

This feature supports sharing folders with internal members or external users through different methods. You can flexibly set access permissions, passwords, and expiration dates, and manage or cancel these shares at any time.

### Share types and support scope

Currently, file sharing is only supported at the **folder** level. Supported sharing types vary depending on the directory location of the folder. Refer to the following table for details:

| Directory type | Public share | Internal share | SMB share |
| :--- | :---: | :---: | :---: |
| **Home** | Supported | Supported | Supported |
| **External** | - | Supported | Supported |
| **Sync** | - | Supported | - |
| **Data** | Supported | Supported | Supported |
| **Cache** | - | Supported | Supported |

Where,
- **Public share**: Generates an access link with password protection supported, suitable for external sharing.
- **Internal share**: Restricted to members within the same Olares cluster, suitable for internal team collaboration. For more information, see [Manage your team](../settings/manage-team.md).
- **SMB share**: Shared via the SMB protocol within the Local Area Network (LAN).

![Share file type](/images/manual/olares/share-files.png#bordered)

### User permissions

You can assign specific permissions to members in **Internal share** and **SMB share** to control their level of access and allowed operations.

| Permission | Description |
| :--- | :--- |
| **Admin** | The user has the full access, including:<ul><li>Add, view, edit, and delete files.</li><li>Invite and remove members.</li> <li>Modify share settings.</li></ul> |
| **Edit** | The user can add, view, modify, and delete files. |
| **View** | The user can only open, view, and download files. They cannot upload, modify, or <br>delete any content. |

### Create share

#### Create Internal share

1. Right-click the target folder，and then click **Internal share**.
2. In the **Invite users** section, click <i class="material-symbols-outlined">add</i>, search for and select the target user or group, and then click **Invite**.

![Invite users for Internal Share](/images/manual/olares/internal-share-invite.png#bordered){width=60%}

3. In the **Set user permissions** list, click <i class="material-symbols-outlined">chevron_forward</i> to the right of the user avatar to assign specific permissions, and then click **Submit**.
4. Click **Confirm**.

#### Create SMB share

SMB sharing utilizes a dedicated local Linux account system. The SMB accounts generated within this system are independent of Olares members, strictly for LAN file access.

1. Right-click the target folder, and then click **SMB share**.
2. Select whether to make it **Public**.
    - If you selected **Yes**, click **Confirm**, and then it will be accessible to anyone on the LAN.
    - If you selected **No**, authentication is required. You must select or create a dedicated SMB account by using Step3 or Step4.
3. Select an existing SMB account to authorize.
    
    a. In the **Invite users** field, click <i class="material-symbols-outlined">add</i>.

    ![Invite existing users for SMB Share](/images/manual/olares/smb-share-invite.png#bordered){width=60%}
    
    b. Search for the SMB account, select it, and then click **Invite**.

    c. In the **Set user permissions** list, click <i class="material-symbols-outlined">chevron_forward</i> to the right of the user avatar to assign specific permissions, and then click **Submit**.

    d. Click **Confirm**.

4. Create a new SMB account to authorize.
    
    a. To the right of **Invite users**, click **Add user accounts**.

    ![Create new users for SMB Share](/images/manual/olares/smb-share-new-usr.png#bordered){width=60%}
    
    b. Enter a unique user name.
    
    c. In the **Set password** field, a secure system-generated password is provided by default. You can also manually enter a new password or click **Regenerate** to create a new random one.

    d. Click **Confirm**. The system will automatically generate this account for you.
    
    e. In the **Invite users** field, click <i class="material-symbols-outlined">add</i>.
    
    f. Search for the newly created account, select it, and then click **Invite**.

    g. In the **Set user permissions** list, click <i class="material-symbols-outlined">chevron_forward</i> to the right of the user avatar to assign specific permissions, and then click **Submit**.

    h. Click **Confirm**.

#### Create Public share

1. Right-click the target folder, and then click **Public share**.

![Public share settings](/images/manual/olares/public-share-settings.png#bordered){width=56%}

2. In the **Set password** field, a secure system-generated password is provided by default. You can also manually enter a new password or click **Regenerate** to create a new random one.
3. In the **Set expiration** region, select the specific expiration time for the share link.
4. Select the following restrictions as needed:
     - **Limit file size**: To limit the size of files uploaded by visitors, select this checkbox, enter a value, and then select the unit (Mi/Gi/Ti).
    - **Allow uploads only**: If you select this checkbox, visitors can only upload files and cannot view or download existing content.
5. Click **Confirm** to generate the link.
6. Copy or note down the link address, and then click **Confirm**.

## Mount cloud storage

You can easily mount a cloud storage through the **Integration** function in Olares, and access and manage your cloud files directly in the **Files** application.

![Cloud storage](/images/manual/olares/files-cloud.png)

### Mount a cloud storage

To mount a cloud storage, connect to it in **Integrations** in LarePass or Olares Settings:

* **OAuth-based storage services**: Google Drive and Dropbox. Connect via [**LarePass** app](../../larepass/integrations.md#add-a-cloud-drive-via-oauth).
* **API credential-based services**: AWS S3 or Tencent Cloud Object Storage (COS); Connect via [LarePass app](../../larepass/integrations.md#add-a-cloud-storage-using-api-keys) or [Olares Settings](../settings/integrations.md#add-cloud-object-storage-via-api-keys).

Once connected, the cloud storage will be automatically mounted under **Cloud Drive** in **Files**.

### Access a cloud storage

Once mounted, you can access and manage files just as you would with local storage:

* **Upload / Download** files
* **Preview** supported file types
* **Rename**, **move**, or **delete** files and folders

Changes made in the Files app will sync with your remote storage provider.

### Unmount a cloud storage

You can unmount a cloud storage by removing the corresponding integration:

* [Remove integration in LarePass](../../larepass/integrations.md#disconnect-integrations)
* [Remove integration in Olares Settings](../settings/integrations.md#view-and-manage-existing-integrations)
