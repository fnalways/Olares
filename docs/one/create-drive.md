---
outline: [2, 3]
description: Reinstall Olares OS on Olares One using a bootable USB to restore the device to factory state.
head:
  - - meta
    - name: keywords
      content: Olares One, reinstall, factory reset, bootable USB, installation USB
---

# Reset to factory settings using installation USB <Badge type="tip" text="10 min"/>

Resetting to factory settings returns your Olares One to the initial setup state. You can reinstall Olares OS using the bootable USB drive included with Olares One.

:::warning Data loss
This will permanently delete all accounts, settings, and data on the device. This action cannot be undone.
:::

## Prerequisites
**Hardware**<br>
- The bootable USB drive that came with Olares One.
- A monitor and keyboard connected to Olares One.

## Step 1. Boot from the USB drive

1. Insert the bootable USB drive into Olares One.
2. Power on Olares One or restart if it is already running.
3. Immediately press the **Delete** key repeatedly to enter **BIOS setup**.
4. Set **USB Boot** as the first boot option.
5. Press **F10**, then select **Yes** to save and exit. Olares One will restart and boot into the Olares installer interface.

## Step 2. Install Olares to disk

1. From the installer interface, select **Install Olares to Hard Disk** and press **Enter**.
2. The installer lists available disks (e.g. `nvme0n1 2000G`). Type `/dev/` followed by the disk name (e.g. `/dev/nvme0n1`) as the installation target. Installation usually takes **4–5 minutes**.
   :::tip
   If you see prompts about NVIDIA GPU drivers, press **Enter** to accept the default.
   :::
3. When you see **Installation completed successfully!**, the reinstall is done.
4. Remove the USB drive, then press **Ctrl + Alt + Delete** to restart.

## Step 3. Verify and activate

After reboot, the system starts in a clean state.

1. Log in with the default credentials:
   - **Username**: `olares`
   - **Password**: `olares`
2. (Optional) In a terminal, run:
   ```bash
   sudo olares-check
   ```
   If the output shows success for Olaresd and Containerd, Olares is installed correctly.

3. Complete activation via LarePass. For detailed instructions, see [First boot](first-boot.md).
