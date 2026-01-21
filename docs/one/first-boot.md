---
description: Learn how to set up your Olares One for the first time, including setting up hardware, installing the client app, creating your account, connecting to your device, installing & activating the system, and logging into your Olares.
---

# First boot

Follow the steps on this page to set up your Olares One hardware, connect to the network, and activate your system for the first time.

## 1. Set up hardware

Start by connecting your Olares One to power and the network.

1. Plug the included power adapter into the **Power port** on the Olares One, and then connect it to a power outlet.
2. (Recommended) Connect one end of an Ethernet cable to the **2.5G Ethernet port** on the Olares One, and then connect the other end to your router or switch.

    :::tip
    The wired LAN connection provides the best stability and performance. If the wired connection is not available, you can configure Wi-Fi via Bluetooth in later steps.
    :::

3. Press the **Power** button on the Olares One. The status LED turns solid white, indicating the device is powered on successfully.

## 2. Install LarePass

To interact with your Olares One without a monitor, you need the **LarePass** app. It is the companion mobile app for managing your Olares identity and verifying logins.

Search for "LarePass" in the Apple App Store or Google Play Store and install it on your mobile device.

## 3. Create Olares ID

To manage your Olares One securely and independently, you need an Olares ID. This unique identifier acts as your username across the entire Olares ecosystem, serving as your digital identity and gateway to various services.

1. Open the LarePass app, and then tap **Create an account**.
2. Enter a unique Olares ID.
3. Click **Continue**. Your Olares ID is created.

For more information, see [Olares ID](../developer/concepts/olares-id.md).

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

With the connection established between your mobile device and the Olares One, you can now proceed with the system installation and activation.

1. In the LarePass app, tap **Install now** to install the Olares OS.
2. Tap **Activate now** to activate and initialize the system.
3. Select a reverse proxy node that is closest to your location and tap **Confirm**.
4. Set the login password for Olares as prompted.
5. Copy or note down your personal URL. For example, `https://desktop.{your-olares-id}.olares.com`. You need this URL to access your Olares later.

## 6. Log in to Olares

Now that setup is completed, switch to your computer's web browser to access your Olares desktop.

1. Go to your personal URL.
2. Enter the login password you set in the previous step.
3. Verify your login using one of the following methods:
    - Tap **Confirm** in the **Confirm Login** notification sent to your LarePass app.
    - Enter the 6-digit authenticator code that is displayed on the **Settings** page in the LarePass app.

### Use custom domains

By default, your Olares ID uses the olares.com domain. This means you access your Olares services through URLs like desktop.{your-username}.olares.com without complex network configurations.

When you are familiar with the system, you might want to use a custom domain such as employee@company.com or me@my-personal-domain.com for a personalized experience.

For more information, see [Set up a custom domain for your Olares](../manual/best-practices/set-custom-domain.md).
