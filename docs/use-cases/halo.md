---
outline: [2, 3]
description: Set up Halo on Olares to build and manage your own website or blog with themes, plugins, and full content control.
head:
  - - meta
    - name: keywords
      content: Olares, Halo, blog, website builder, CMS, self-hosted, open-source
app_version: "1.1.20"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Build a website with Halo

Halo is an open-source content management system (CMS) designed for building websites and blogs. It offers a rich editor, customizable themes, a plugin marketplace, and multi-user management. Running Halo on Olares gives you a self-hosted website that you fully control.

## Install Halo

1. Open Market and search for "Halo".
   <!-- ![Halo](/images/manual/use-cases/halo.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Set up your site

1. Open Halo from Launchpad. On first launch, Halo prompts you to initialize your site.
   <!-- ![Halo setup](/images/manual/use-cases/halo-setup.png#bordered) -->

2. Set your site title, username, and password, then complete the initialization.

3. Log in with the credentials you just created to access the dashboard.
   <!-- ![Halo dashboard](/images/manual/use-cases/halo-dashboard.png#bordered) -->

:::tip Access the dashboard directly
You can also access the dashboard by visiting `https://<halo-endpoint>/console` in your browser.
:::

## Use Halo

### Publish a post

1. In the dashboard, click **New** to create a post.
   <!-- ![Create a post](/images/manual/use-cases/halo-new-post.png#bordered) -->

2. Write your content using the built-in editor.

3. Click **Publish** to make it live on your site.
   <!-- ![Publish a post](/images/manual/use-cases/halo-publish-post.png#bordered) -->

### Manage pages

Pages are standalone content (like "About" or "Contact") separate from blog posts.

1. In the left sidebar, click **Pages**.
   <!-- ![Page management](/images/manual/use-cases/halo-pages.png#bordered) -->

2. Create or edit a page, then publish it.

3. To display the page in your site navigation, add it to a menu under **Appearance** > **Menus**.

### Customize your theme

Halo supports swappable themes to change the look and feel of your site.

1. In the left sidebar, go to **Appearance** > **Themes**.
   <!-- ![Theme settings](/images/manual/use-cases/halo-themes.png#bordered) -->

2. To adjust the current theme, modify its settings and use the live preview to check your changes.

3. To install a new theme, click **Theme Management** in the top-right corner. You can browse Halo's theme marketplace, upload a local theme file, or install from a remote URL.

### Install plugins

Plugins extend Halo's functionality with features like SEO tools, comment systems, and search.

1. In the left sidebar, click **Plugins**.
   <!-- ![Plugin management](/images/manual/use-cases/halo-plugins.png#bordered) -->

2. Click **Install** to browse the plugin marketplace, upload a local plugin, or install from a remote URL.

### Configure email notifications

Halo can send email notifications for events like new comments and password resets. To enable this, you need an SMTP-enabled email account and its app password (or authorization code).

1. In the dashboard, go to **System** > **Settings** > **Notification Settings** and enable **Email Notifier**.
   <!-- ![SMTP settings](/images/manual/use-cases/halo-smtp.png#bordered) -->

2. Fill in your SMTP details:
   - **Username**: Your email address.
   - **Password**: The app password or authorization code from your email provider.
   - **Display Name**: The sender name shown in outgoing emails.
   - **SMTP Server**: Your provider's SMTP server address (e.g., `smtp.gmail.com`).
   - **Port**: The SMTP port (commonly `465` for SSL or `587` for TLS).
   - **Encryption**: Select the encryption method that matches your port (`SSL` or `TLS`).

3. Click **Test Email** to verify the configuration.

4. Once the test succeeds, click **Save**.

:::tip
Emails sent from Halo might end up in the spam folder. If this happens, mark them as "not spam" so future emails arrive in your inbox.
:::

### Back up your site

1. In the left sidebar, go to **System** > **Backup**.
   <!-- ![Backup](/images/manual/use-cases/halo-backup.png#bordered) -->

2. Create a backup to save your entire site (posts, pages, themes, plugins, and settings).

3. To restore, upload a local backup file or restore from an existing backup.

:::info Backup storage location
Backup files are stored in the Files app at: `Application/Data/halo2/backups/`.
:::

## FAQ

### How do I completely remove Halo data after uninstalling?

After uninstalling Halo from Market, open the Files app and delete the `halo2` folder at `Application/Data/halo2/` to remove all remaining data.

## Learn more

- [Halo documentation](https://docs.halo.run): Official Halo guides and references.
