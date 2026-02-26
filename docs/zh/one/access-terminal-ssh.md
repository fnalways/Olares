---
outline: [2, 3]
description: Learn how to access the Olares One host terminal for command-line usage via Control Hub or SSH.
head:
  - - meta
    - name: keywords
      content: SSH, Olares Terminal, Control Hub
---

# Connect to Olares One via SSH  <Badge type="tip" text="10 min" />

Certain development and operational tasks, such as connecting Olares One with other devices to form a cluster, require direct command-line access. 

Olares One is primarily used as a headless device, so you can access the terminal remotely without a monitor or keyboard connected to it.

You can connect to the host shell using one of the following methods:
- **Control Hub Terminal** is a web-based interface for direct root access. It is recommended for quick tasks.
- **Secure Shell (SSH)** is the standard protocol for remote management and complex operations.

## Before you begin

- The default username and password for Olares One are both `olares`. 
   :::warning Reset default SSH password
   Even if you primarily use the Control Hub terminal, you must reset this password immediately to secure your device against unauthorized access. For details, see [Reset SSH password](#reset-ssh-password).
   :::
- SSH access grants powerful control over the system. Ensure you keep your credentials secure.

## Prerequisites
**Hardware**
- Your Olares One is set up and connected to a network.
- A client device, such as a computer, is required to access the terminal.

**Experience**
- Basic familiarity with terminal commands and the command-line interface (CLI).

**LarePass** (Required for remote access)
- The LarePass app is installed on your device. This is required only if you plan to connect via SSH from a remote location outside your local network.

## Method 1: Access via Control Hub
For quick access without configuring SSH clients, you can use the web-based terminal built directly into Control Hub.

1. Open the Control Hub app. 
2. In the left sidebar, under the **Terminal** section, click **Olares**.
   ![Terminal](/images/manual/olares/controlhub-terminal.png#bordered)

You can now execute system commands directly in the embedded terminal.

:::tip Run as `root`
The Control Hub terminal runs as `root` by default. You do not need to use `sudo` before commands.
:::

## Method 2: Access via SSH

SSH establishes a secure session over the network, allowing you to use command-line operations for Olares One on your current device.

### Get IP address of Olares One
To connect via SSH, you first need to find the internal IP address of your Olares One.

1. Open the LarePass app, and go to **Settings** > **System** to navigate to the **Olares management** page.
   ![Tap the System card](/images/manual/get-started/larepass-system.png#bordered)

2. Tap on the device card.
3. Scroll down to the **Network** section. You can find the **Intranet IP** there.

:::tip Check via Control Hub
You can check the IP using the `ifconfig` command in the Control Hub terminal.

Look for your active connection, typically named `enp3s0` (wired) or `wlo1` (wireless). The IP address follows `inet`.
:::
### Connect via SSH (local network)
If your computer and the Olares One are on the same Wi-Fi or LAN:

1. Open a terminal on your computer. 
2. Run the `ssh` command using Olares One's local IP address:
    ```bash
    ssh <username>@<host_ip_address>
    ```
    For example:

    ```bash
    ssh olares@192.168.31.155
    ```
3. Enter the host password when prompted.

### Connect via SSH (remote access)
If you are away from home, you can use LarePass VPN to bridge the connection securely.

#### Allow SSH access via VPN
For security, SSH access via VPN is disabled by default. You must enable it once.
1. On Olares, open the Settings app. 
2. Navigate to **VPN**. 
3. Toggle on **Allow SSH via VPN**.

#### Enable LarePass VPN
1. Open the LarePass desktop client on your computer. 
2. Click your avatar in the top-left corner and toggle on **VPN connection**.
    ![Enable LarePass VPN on desktop](/images/manual/get-started/larepass-vpn-desktop.png#bordered)

3. Open a terminal on your computer. 
4. Run the `ssh` command using Olares One's local IP address. LarePass handles the routing automatically.
    ```bash
    ssh <username>@<host_ip_address>
    ```
    For example:

    ```bash
    ssh olares@192.168.31.155
    ```
5. Enter the host password when prompted.

## Reset SSH password

### Reset upon activation
Right after you activate Olares, you will be prompted to reset the SSH password on the LarePass app. The password is automatically generated and saved to your Vault.

To view the saved password in Vault:

1. Tap **Vault** in the LarePass app. When prompted, enter your local password to unlock.
2. In the top-right corner, tap **Authenticator** to open the side navigation, then tap **All vaults** to display all saved items.
    ![Switch Vault filter](/images/one/ssh-switch-filter.png#bordered)

3. Find the item with the <span class="material-symbols-outlined">terminal</span> icon and tap it to reveal the password.
    ![Check saved SSH password in Vault](/images/one/ssh-check-password-in-vault.png#bordered)

### Reset in Olares Settings
If you prefer to use an SSH password instead of the automatically generated one, you can manually reset the password in Settings.
:::info
If you reset the SSH password here, it will not be saved to your Vault automatically.
:::
1. Open Settings. On the **My Olares** page, select **My hardware**.
2. Select **Reset SSH login password** at the bottom.
   ![Reset SSH login password](/images/one/ssh-reset-password-in-settings.png#bordered){width=70%}

3. In the dialog, enter a new SSH password that meets all strength requirements, then click **OK**.
4. Open the LarePass app and scan the QR code shown on the screen.
5. Click **Confirm** on LarePass to finish.