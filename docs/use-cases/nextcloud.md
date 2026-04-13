---
outline: deep
description: Learn how to install and use Nextcloud on Olares to manage files, share folders and albums publicly, configure email notifications, and sync with mobile and desktop apps.
head:
  - - meta
    - name: keywords
      content: Olares, Nextcloud, file management, file sharing, self-hosted cloud, SMTP, mobile sync, productivity
app_version: "1.0.11"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Manage files and collaborate with Nextcloud

Nextcloud is an open-source, self-hosted file sync and collaboration platform. It provides file storage, sharing, and real-time collaboration, along with a rich ecosystem of apps for calendars, contacts, email, and more.

Running Nextcloud on Olares lets you access your Olares storage directly from the Nextcloud interface, share files and photo albums with public links, and sync everything across your devices.

## Learning objectives

In this guide, you will learn how to:
- Install Nextcloud and mount local Olares storage.
- Share folders and photo albums with public links.
- Configure SMTP for email notifications.
- Connect the Nextcloud mobile or desktop app to your server.

## Install Nextcloud

1. Open Market and search for "Nextcloud".

   <!-- ![Nextcloud](/images/manual/use-cases/nextcloud.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Mount local storage

Olares mounts its home and external storage into the Nextcloud container at `/home_storage` and `/external_storage`. To access them in Nextcloud, enable the External storage app and add the mount points.

### Enable External storage

1. In the Nextcloud web UI, click your avatar in the upper-right corner, and then select **Apps**.
2. Under **Featured apps**, find **External storage support** and enable it.

### Add mount points

1. Click your avatar in the upper-right corner, and then select **Administration settings**.
2. In the left sidebar under **Administration**, click **External storage**.
3. Add two local mount entries:

   | Folder name | Configuration | Storage path |
   |:------------|:--------------|:-------------|
   | Home Storage (or your preferred name) | Local | `/home_storage` |
   | External Storage (or your preferred name) | Local | `/external_storage` |

   Set **Available for** to specific users or all users as needed.

   <!-- ![External storage configuration](/images/manual/use-cases/nextcloud-external-storage.png#bordered) -->

4. Click **Files** in the top-left corner. You should see the two mounted directories in your file list.

   <!-- ![Mounted directories in file list](/images/manual/use-cases/nextcloud-mounted-directories.png#bordered) -->

You can now browse and edit files in these directories. For files uploaded through Nextcloud, you can delete them directly. For files managed by other Olares apps, use Files to delete them.

## Share files and albums

Nextcloud lets you generate public links so anyone can access shared content without logging in.

### Share a folder

1. Click **Files** in the top-left corner to open the file list.
2. Click the share icon next to the folder you want to share.

   <!-- ![Folder sharing](/images/manual/use-cases/nextcloud-share-folder.png#bordered) -->

3. Click **Sharing links**, and then click **Create a new share link**. Copy the generated link.

   <!-- ![Generate public link](/images/manual/use-cases/nextcloud-public-link.png#bordered) -->

Anyone with this link can access the folder. You can test the link in an incognito browser window.

### Share an album

Sharing an album works similarly to sharing a folder, with the added benefit of a slideshow preview mode.

1. Click **Photos** in the top-left corner, and then click **Albums**.
2. Open the album you want to share and add photos to it.
3. Click the share icon in the upper-right corner.

   <!-- ![Album share button](/images/manual/use-cases/nextcloud-share-album.png#bordered) -->

4. Click **Share via public link** to generate a public URL, and then copy it.

   <!-- ![Share album via public link](/images/manual/use-cases/nextcloud-album-public-link.png#bordered) -->

Open the link in an incognito browser window to verify anonymous access. You might see a brief loading error on the page. This is expected and can be safely ignored.

## Configure SMTP

Set up SMTP to enable Nextcloud to send email notifications, password reset links, and sharing invitations.

1. Click your avatar in the upper-right corner, and then select **Administration settings**.
2. In the left sidebar, click **Basic settings**.
3. Under **Email server**, configure the following fields:

   | Field | Description |
   |:------|:------------|
   | **Send mode** | Select `SMTP`. |
   | **Encryption** | Select `SSL/TLS` or `STARTTLS` depending on your email provider. |
   | **From address** | Enter the sender email address. |
   | **Server address** | Enter the SMTP server hostname and port (for example, `smtp.gmail.com` port `465`). |
   | **Authentication** | Check **Authentication required** if your SMTP server requires login. |
   | **Credentials** | Enter your full email address and app-specific password (or authorization code). |

   <!-- ![SMTP configuration](/images/manual/use-cases/nextcloud-smtp.png#bordered) -->

4. Click **Send email** to test the configuration.

## Connect mobile and desktop apps

Use the official Nextcloud client to sync files between your devices and your Olares-hosted Nextcloud server.

1. Download the Nextcloud client for your platform from [nextcloud.com/install](https://nextcloud.com/install/).
2. Find your Nextcloud server URL. In Olares, open Settings, and then go to **Applications** > **Nextcloud** > **Entrances** to find your Nextcloud endpoint address.

The connection steps depend on whether your device and Olares are on the same network.

<tabs>
<template #Use-.local-domain-(LAN)>

If your device is on the same local network as Olares, you can use the `.local` domain to connect without LarePass VPN. The steps below use macOS as an example, where `.local` domains work natively with no additional setup.

:::info Windows users
On Windows, multi-level `.local` domains require additional setup. Try one of these:
- **Import hosts in LarePass**: Open the LarePass desktop app and use the built-in option to import Olares hosts to your system.
- **Use the single-level domain**: Change `https://abc123.{username}.olares.com` to `http://abc123-{username}-olares.local`.

For details, see [Access Olares services locally](../manual/best-practices/local-access.md).
:::

1. Change the endpoint URL to use the `.local` domain and `http`. For example, if the endpoint URL is:
   ```plain
   https://abc123.{username}.olares.com
   ```
   Change it to:
   ```plain
   http://abc123.{username}.olares.local
   ```

2. Open the Nextcloud client app and enter the `.local` server URL to log in.

3. The app opens a browser window for authorization. Complete the login on the authorization page.

4. Once you see the authorization success page, switch back to the Nextcloud client. Your files are now ready to sync.

   <!-- ![Mobile authorization success](/images/manual/use-cases/nextcloud-mobile-auth.png#bordered){width=50%} -->

</template>
<template #Use-.com-domain-(VPN)>

If your device is not on the same local network as Olares, enable LarePass VPN to ensure a secure connection.

1. Open LarePass on your device and enable the VPN.

2. Open the Nextcloud client app and enter the server URL to log in.

3. The app opens a browser window for authorization. Complete the login on the authorization page.

4. Once you see the authorization success page, switch back to the Nextcloud client. Your files are now ready to sync.

   <!-- ![Mobile authorization success](/images/manual/use-cases/nextcloud-mobile-auth.png#bordered){width=50%} -->

</template>
</tabs>

## Learn more

- [Nextcloud documentation](https://docs.nextcloud.com/server/latest/user_manual/en/): Official user manual for Nextcloud.
