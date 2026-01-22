---
outline: [2, 3]
description: Understand Vault basics in Olares. Learn to set up vaults and manage vault items.
---

# Secure passwords with Vault

Vault is the dedicated password and sensitive data manager in Olares. Use it to securely store passwords, keys, digital identities, and sensitive documents.

This page covers the fundamentals of using Vault, including setting up your first vault, importing credentials, and managing your sensitive data efficiently.

## Before you begin

Familiarize yourself with related Vault concepts and how Vault organizes data.

### Vault types

Olares Vault offers two main types of vaults:

* My vault: This is your private vault that is created automatically upon account activation. The vault is encrypted with your mnemonic and is visible only to you.
* Team vaults: These are collaborative vaults that are used to share credentials securely with team members or family.

### Vault items

A vault item is a secure container for a specific piece of information, such as a login credential or a secure note. Vault items mainly include the following information:

- Type: The category of data, such as website, app, credit card, bank account, Wi-Fi password, and passport.
- Name: A title for easy identification.
- Tags: For organization and quick filtering.
- Fields: Customizable input fields for recording different types of data of vault items, such as username, password, PIN, and URL.
- Attachments: For adding related files.
- Expiration: Set an expiry date for time-sensitive information.
- History: Tracks changes made to the item.

## Set up Vault

When you open Vault for the first time, you must initialize it for security.

1. Set a local password for Vault, which is used to unlock Vault on the current device only.

   :::tip
   For security, do not use your Olares login password.
   :::

   ![Open Vault for the first time](../public/images/one/open-vault.png#bordered){width=35%}

2. Click **Confirm**.

3. Import your Olares ID that is already linked to your server using your mnemonic phrase.

   ![Enter mnemonic phrase](../public/images/one/vault-enter-mnemonic-phrase.png#bordered){width=35%}

   :::tip
   For information about how to get your mnemonic phrase in case you do not have it handy, see [Reveal and back up your mnemonic phrase](../manual/larepass/back-up-mnemonics.md#reveal-and-back-up-your-mnemonic-phrase).
   :::

4. Click **Next**.

## Add vault items

Create new vault items to store your credentials.

<tabs>
<template #Olares>

1. Open the Vault app from the Dock or Launchpad.
2. Click <i class="material-symbols-outlined">add</i> in the **All vaults** panel.
3. From the **Select Vault** list, choose **My Vault** for private use or **Team Vault** for a shared one.

   ![Add vault item](../public/images/one/new-vault-item.png#bordered){width=50%}

4. Select the category of the vault item, and then click **Confirm**. The details panel opens on the right. It displays the default fields relevant to the category you selected.

   ![Configure vault item settings](../public/images/one/configure-vault-item.png#bordered){width=50%}

5. Fill in the default fields or customize the fields according to your needs:

   - To add custom fields, click <i class="material-symbols-outlined">add</i> in the top right corner.
   - To delete fields that you do not need, click <i class="material-symbols-outlined">delete</i>.
   - To re-order the fields, click <i class="material-symbols-outlined">arrow_upward_alt</i> or <i class="material-symbols-outlined">arrow_downward_alt</i>.

6. Click **Save**.
</template>
<template #LarePass-desktop-or-mobile>

1. Open the LarePass desktop or mobile, and then go to the **Vault** tab.
2. Click <i class="material-symbols-outlined">add</i> in the top right corner.
3. From the **Select Vault** list, choose **My Vault** for private use or **Team Vault** for a shared one.
4. Select the category of the vault item, and then click **Confirm**.
5. Specify the detailed settings for the vault item, and then click **Save**.
</template>

<template #LarePass-browser-extension>

:::info Before you begin
- The LarePass browser extension is currently only available for Google Chrome. 
- Install it from the Chrome Web Store or the [official page](https://www.olares.com/larepass). 
- For quick access, pin the extension to your browser toolbar.
:::

1. Click the LarePass icon on your browser toolbar to open the sidebar.
2. Click **Vault**.
3. Click <i class="material-symbols-outlined">add</i> in the **All vaults** panel.
4. Select the category of the vault item, and then click **Confirm**.
5. Specify the detailed settings for the vault item, and then click **Save**.
</template>
</tabs>

## Import passwords

You can import passwords from other password managers such as 1Password and BitWarden. Supported formats include `text/plain`, `.csv`, `.pls`, `.set`, `.pbes2`, `.1pux`, and `.json`.

:::tip LarePass Desktop only
The import process must be completed using the LarePass desktop.
:::

1.  Open LarePass desktop.
2.  Click your avatar in the top-left corner and click **Settings**.
3.  In the **Settings** panel, click **Import**.
4.  Select the file you want to import, such as `bitwarden_export.json`.

      ![Vault import](/images/manual/olares/vault-import.png#bordered){width=90%}

5.  Choose the destination Vault. The default is **My Vault**, but you can also select a team vault you have created.
6.  Click **Import**. 

      Imported items are automatically tagged with the file names for easy sorting.

## Manage vault items

Keep your vault items organized and up to date.

### Edit vault items

:::info
You cannot edit vault items using the LarePass browser extension. Use the Vault app, LarePass desktop, or LarePass mobile instead.
:::

1. Open the Vault app.
2. In the **All vaults** panel, click the target vault item.
3. In the details panel on the right, click <i class="material-symbols-outlined">edit_note</i>.
4. Make changes as needed, such as setting an expiration date or attaching a file up to 1 MB.
5. Click **Save**.

### Mark favorite vault items

Mark frequently used vault items for quick access.

<tabs>
<template #Olares>

1. Open the Vault app.
2. In the **All vaults** panel, click the target vault item.
3. Click <i class="material-symbols-outlined">star_border</i> in the top right corner. The item is marked with a star in the **All vaults** panel.
</template>
<template #LarePass-desktop-or-mobile>

1. Open the LarePass desktop or mobile.
2. Go to the **Vault** tab, and then click the target vault item.
3. Click <i class="material-symbols-outlined">star_border</i> in the top right corner. The item is marked with a star in the all vaults list.
</template>
</tabs>

## Find vault items

Locate vault items quickly using keyword search or filters.

### Search

In the **All vaults** panel, click <i class="material-symbols-outlined">search</i> and enter keywords to find specific vault items.

### Filter

Use the left sidebar to narrow down the list:

- Vault category: Switch between My Vault and Team Vaults to change the scope.
- Tags: Click a tag name to view all related vault items.
- Favorites: Click **Favorites** to view all starred items.
- Recently used: Click **Recently used** to view your access history.
- Attachments: Click **Attachments** to view items containing files.

## Resources

- [Manage shared vaults](../manual/olares/vault/share-vault-items.md)
- [Autofill passwords with LarePass](../manual/larepass/autofill.md)
- [Generate two-factor authentication codes](../manual/larepass/two-factor-verification.md)
