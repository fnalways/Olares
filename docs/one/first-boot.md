---
description: Learn how to set up your Olares One for the first time, including setting up hardware, installing the client app, creating your Olares account, connecting to your device, installing & activating the system, and logging into your Olares.
head:
  - - meta
    - name: keywords
      content: Olares, Olares One, first boot, initial setup, first time use
---

# First boot <Badge type="tip" text="15 min" />

This guide walks you through setting up your Olares One for the first time.

## Learning objectives

This setup process includes:
- Connect physical power and network cables.
- Install the LarePass app to act as your setup controller.
- Create an Olares ID, your digital identity.
- Pair your LarePass with the Olares One.
- Activate the system and obtain your access URL.

## Before you begin

Ensure that you have prepared the following items:
- An iOS or Android mobile device to run the LarePass app
- A power outlet near your installation location
- (Recommended) An Ethernet cable connected to your router or switch

    :::tip
    A wired connection is recommended for stability and speed during the initial installation. If wired access is not available, you can configure Wi-Fi via Bluetooth during setup.
    :::

## 1. Set up hardware

Start by connecting the physical hardware components.

1. Plug the included power adapter into the **Power port** on the Olares One, and then connect it to a power outlet.
2. (Recommended) Connect one end of an Ethernet cable to the **2.5G Ethernet port** on the Olares One, and then connect the other end to your router or switch.
3. Press the **Power** button on the Olares One. The status LED turns solid white, indicating the device is powered on successfully.

## 2. Install LarePass mobile

To interact with your Olares One without a monitor, you need the **LarePass** app. It is the companion mobile app for managing your Olares identity and verifying logins.

1. Search for "LarePass" in the Apple App Store or Google Play Store.
2. Install and open the app on your mobile device.

## 3. Create Olares ID

To manage your Olares One securely and independently, you need an Olares ID. This unique identifier acts as your username across the entire Olares ecosystem, serving as your digital identity and gateway to various services.

1. In the LarePass app, tap **Create an account**.
2. Enter a unique Olares ID.
3. Click **Continue**. Your Olares ID is now created and ready to use.

## 4. Connect LarePass to Olares One

Use the LarePass app to locate and connect to your Olares One. This connection is required to link the device to your Olares ID and install the Olares OS in the next step.

Choose one of the following methods according to your network setup.

### Method A: Wired LAN (Recommended)

If Olares One connects to a wired LAN and your phone is on the same network, use this method.

1. In the LarePass app, tap **Discover nearby Olares**.
2. Select your Olares One from the list of available devices.

### Method B: Wi-Fi via Bluetooth

If a wired LAN connection is unavailable, use this method.

1. In the LarePass app, tap **Discover nearby Olares**.
2. Tap **Bluetooth network setup**.
3. When your device appears, tap **Network setup**.
4. Connect to the Wi‑Fi your phone is currently using.
5. Return to the device scan page and tap **Discover nearby Olares** again.
6. Select your Olares One from the list of available devices.

## 5. Install & activate Olares OS

With device paired, you can proceed with the system installation and activation.

1. In the LarePass app, tap **Install now** to install the Olares OS.
2. Tap **Activate now** to activate and initialize the system.
3. Select a reverse proxy node that is closest to your location and tap **Confirm**.
4. Set the login password for Olares as prompted.
5. Copy or note down your personal URL. For example, `https://desktop.{your-olares-id}.olares.com`. You need this URL to access your Olares later.
6. Tap **I got it**. Your Olares One is now ready to use.

:::tip
Your system is now accessible via this default address without any complex network configuration. You can configure a custom domain later  if you prefer a personalized address.
:::

## Next steps

Your Olares One is already set up and active. Here are the recommended ways to access Olares and start working with your system:
- [Access using URL](acccess-olares.md)
- [Access using local network](access-olares.md)

<!--### Access using URL

1. On your computer, open a web browser and go to your personal URL. Screen ask you to Confirm on LarePass app, verify using one-time password from LarePass
3. Open larepass, enter password, tap **Complete**. You log in to larepass app.
2. Enter the login password you set in the previous step.
3. Verify your login using one of the following methods:
    - Tap **Confirm** in the **Confirm Login** notification sent to your LarePass app.
    - Click Verify using one-time password from LarePass. then Enter the 6-digit authenticator code that is displayed on the **Vault** tab in the LarePass app.<-->

## Resources

- [Olares ID](../developer/concepts/olares-id.md)
- [Back up mnemonic phrase](../manual/larepass/back-up-mnemonics.md)
- [Set up a custom domain for your Olares](../manual/best-practices/set-custom-domain.md)
