---
outline: [2, 3]
description: Set up a self-hosted WordPress blog on Olares with full ownership of your content and data.
head:
  - - meta
    - name: keywords
      content: Olares, WordPress, blog, CMS, self-hosted, publishing, MariaDB
app_version: "1.1.7"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Host a WordPress blog on Olares

WordPress is the world's most popular open-source content management system, powering over 43% of the web. It supports blogs, business sites, portfolios, and more, with thousands of themes and plugins available.

Running WordPress on Olares gives you full ownership of your content. Your site is publicly accessible to visitors while remaining entirely under your control.

## Learning objectives

In this guide, you will learn how to:
- Install WordPress and its database dependency on Olares.
- Set up the administrator account.
- Create and publish your first blog post.
- Customize the appearance of your site.

## Install WordPress

WordPress requires MariaDB as its database. Market handles this dependency automatically during installation.

1. Open Market and search for "WordPress".
   <!-- ![WordPress in Market](/images/manual/use-cases/wordpress.png#bordered) -->

2. Click **Get**. Market prompts you to install MariaDB if it is not already present. Confirm and wait for MariaDB to finish installing.

3. Set the admin credentials when prompted:
   - **WORDPRESS_USERNAME**: Enter a username for the WordPress administrator account.
   - **WORDPRESS_PASSWORD**: Enter a password for the account.

4. Click **Install** and wait for installation to complete.

:::tip
Remember these credentials. You will need them to log in to the WordPress admin dashboard.
:::

## Access WordPress

After installation, WordPress appears as two icons on Launchpad:
- **WordPress**: Opens the public-facing site that your visitors see.
- **WordPress Admin**: Opens the admin dashboard where you manage content, appearance, and settings.

<!-- ![WordPress on Launchpad](/images/manual/use-cases/wordpress-launchpad.png#bordered) -->

Open **WordPress Admin** and log in with the credentials you set during installation to access the dashboard.

<!-- ![WordPress admin dashboard](/images/manual/use-cases/wordpress-admin.png#bordered) -->

## Create your first post

1. Open **WordPress Admin** and log in with the credentials you set during installation to access the dashboard.

2. In the admin dashboard, go to **Posts** > **Add New Post**.

   <!-- ![Add new post](/images/manual/use-cases/wordpress-add-post.png#bordered) -->

3. Enter a title and write your content using the block editor. You can add text, images, headings, lists, and other blocks.

   <!-- ![WordPress block editor](/images/manual/use-cases/wordpress-block-editor.png#bordered) -->

4. (Optional) Assign categories and tags from the right sidebar to organize your content.
5. Click **Publish** to make the post live on your site.

   <!-- ![Published post](/images/manual/use-cases/wordpress-publish-post.png#bordered) -->

## Customize your site

### Change the site title and tagline

1. In the admin dashboard, go to **Settings** > **General**.
2. Update the **Site Title** and **Tagline** fields.
3. Click **Save Changes**.

   <!-- ![Site title and tagline](/images/manual/use-cases/wordpress-site-settings.png#bordered) -->

### Switch themes

WordPress comes with a default theme, but you can choose from thousands of free themes.

1. Go to **Appearance** > **Themes**.
2. Click **Add New Theme** to browse available themes.

   <!-- ![Browse themes](/images/manual/use-cases/wordpress-themes.png#bordered) -->

3. Preview a theme, then click **Install** and **Activate** to apply it.

### Install plugins

Plugins extend WordPress with features like contact forms, SEO tools, and caching.

1. Go to **Plugins** > **Add New Plugin**.
2. Search for the plugin you need, then click **Install Now**.

   <!-- ![Install plugin](/images/manual/use-cases/wordpress-plugins.png#bordered) -->

3. After installation, click **Activate** to enable the plugin.

## Learn more

- [WordPress documentation](https://wordpress.org/documentation/): Official WordPress guides and references.
