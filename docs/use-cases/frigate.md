---
outline: [2, 3]
description: Set up Frigate NVR on Olares for local home surveillance with real-time object detection, recording, and live streaming from IP cameras.
head:
  - - meta
    - name: keywords
      content: Olares, Frigate, NVR, home surveillance, IP camera, object detection, RTSP, Hikvision, Dahua, self-hosted
app_version: "1.0.2"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Set up home surveillance with Frigate

Frigate is a local NVR (Network Video Recorder) with real-time object detection for IP cameras. It uses OpenCV and TensorFlow to detect objects like people, cars, and animals directly on your device, with no cloud dependency.

Running Frigate on Olares gives you a private, always-on surveillance system. You can monitor live camera feeds, record motion events, and review detection history from the Frigate web interface.

## Learning objectives

In this guide, you will learn how to:
- Install Frigate on Olares
- Configure Frigate to work with IP cameras (Hikvision, Dahua, or both)
- Set up object detection, motion-triggered recording, and snapshots

## Prerequisites

- Olares admin privileges
- One or more RTSP-compatible IP cameras on the same local network
- Camera credentials (username and password) and IP addresses

:::tip Find your camera's IP address
Check your camera's admin interface or your router's DHCP client list to find the camera's IP address. Refer to your camera manufacturer's documentation for details.
:::

## Install Frigate

1. Open Market and search for "Frigate".
   <!-- ![Frigate](/images/manual/use-cases/frigate.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Configure Frigate

After installation, you need to provide a configuration file that tells Frigate how to connect to your cameras.

1. Open Frigate from Launchpad.
2. Navigate to **Settings** > **Configuration Editor**.
3. Replace the default configuration with your own YAML config. See the [example configuration](#example-configuration) below and modify it with your camera information.
4. Click **Save**, then restart Frigate for the changes to take effect.

<!-- ![Frigate configuration editor](/images/manual/use-cases/frigate-config-editor.png#bordered) -->

### Example configuration

The following example sets up two cameras: one Hikvision and one Dahua. It includes live streaming with audio, CPU-based object detection, motion-triggered recording, and snapshots.

:::tip Adapt for your setup
This example covers the most common dual-camera setup. If you have a different combination, see [Adapt for other camera setups](#adapt-for-other-camera-setups) for guidance.
:::

```yaml
# ==========================================================
# Frigate configuration - Hikvision + Dahua (dual cameras)
# ==========================================================
# Before you start:
#   1. Replace YOUR_PASSWORD with your actual camera password
#   2. Replace camera IP addresses with your actual IPs
#   3. Save and restart Frigate after making changes

# ----------------------------------------------------------
# go2rtc - stream relay for live view with audio
# ----------------------------------------------------------
# Stream names must match camera names for automatic association.
# See https://github.com/AlexxIT/go2rtc for more details.
go2rtc:
  streams:
    hikvision_camera:
      # Hikvision main stream (Channel 101 = high-res, Channel 102 = low-res)
      - rtsp://admin:YOUR_PASSWORD@192.168.50.104:554/Streaming/Channels/101
    dahua_camera:
      # Dahua main stream (subtype=0 = high-res, subtype=1 = low-res)
      - rtsp://admin:YOUR_PASSWORD@192.168.50.105:554/cam/realmonitor?channel=1&subtype=0

# ----------------------------------------------------------
# MQTT - disabled by default
# ----------------------------------------------------------
# Enable for Home Assistant integration.
# See https://docs.frigate.video/integrations/home-assistant/
mqtt:
  enabled: false

# ----------------------------------------------------------
# Database
# ----------------------------------------------------------
database:
  path: /media/frigate/frigate.db

# ----------------------------------------------------------
# Detectors - CPU-based detection (works out of the box)
# ----------------------------------------------------------
# Other options: onnx, edgetpu (Coral), openvino.
# See https://docs.frigate.video/configuration/object_detectors/
detectors:
  default:
    type: cpu

# ----------------------------------------------------------
# Cameras
# ----------------------------------------------------------
cameras:
  # ======================================================
  # Hikvision camera (192.168.50.104)
  # ======================================================
  # Uses dual-stream: sub-stream for detection (lower CPU),
  # main stream for recording (higher quality).
  hikvision_camera:
    enabled: true
    ffmpeg:
      inputs:
        # Sub-stream for detection (lower resolution, better performance)
        - path: rtsp://admin:YOUR_PASSWORD@192.168.50.104:554/Streaming/Channels/102
          roles:
            - detect
          input_args:
            - -rtsp_transport
            - tcp        # TCP is more stable than UDP
            - -fflags
            - nobuffer
            - -flags
            - low_delay
        # Main stream for recording (2K with audio)
        - path: rtsp://admin:YOUR_PASSWORD@192.168.50.104:554/Streaming/Channels/101
          roles:
            - record
          input_args:
            - -rtsp_transport
            - tcp
            - -fflags
            - nobuffer
            - -flags
            - low_delay
            - -use_wallclock_as_timestamps
            - "1"        # Prevents timestamp errors that corrupt recordings
      output_args:
        # Transcode audio from PCM_ALAW to AAC for MP4 compatibility
        record: preset-record-generic-audio-aac

    detect:
      enabled: true
      width: 1280        # 720p for balanced accuracy and performance
      height: 720
      fps: 5             # Recommended value

    motion:
      threshold: 25      # Lower than default (30) for better sensitivity
      contour_area: 50   # 10 = high, 30 = medium, 50 = low sensitivity

    record:
      enabled: true
      alerts:
        retain:
          days: 30       # Keep alert recordings for 30 days
          mode: motion   # Record on motion (options: all, motion, active_objects)
      detections:
        retain:
          days: 30
          mode: motion

    snapshots:
      enabled: true
      retain:
        default: 10      # Keep last 10 snapshots per object type

  # ======================================================
  # Dahua camera (192.168.50.105)
  # ======================================================
  # Uses single main stream for both detection and recording.
  # Some Dahua cameras have unstable sub-streams. Using the
  # main stream for both roles is more reliable.
  dahua_camera:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:YOUR_PASSWORD@192.168.50.105:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect
            - record
          input_args:
            - -rtsp_transport
            - tcp
            - -fflags
            - nobuffer
            - -flags
            - low_delay
            - -use_wallclock_as_timestamps
            - "1"
      output_args:
        record: preset-record-generic-audio-aac

    detect:
      enabled: true
      width: 1280
      height: 720
      fps: 5

    motion:
      threshold: 25
      contour_area: 50

    record:
      enabled: true
      alerts:
        retain:
          days: 30
          mode: motion
      detections:
        retain:
          days: 30
          mode: motion

    snapshots:
      enabled: true
      retain:
        default: 10

# ----------------------------------------------------------
# Global detection
# ----------------------------------------------------------
detect:
  enabled: true

# ----------------------------------------------------------
# Object tracking - specify which objects to detect
# ----------------------------------------------------------
# See https://docs.frigate.video/configuration/objects/
objects:
  track:
    - person
    - car
    - dog
    - cat

# ----------------------------------------------------------
# Config version - should match your Frigate version
# ----------------------------------------------------------
version: 0.17
```

### Adapt for other camera setups

The example above uses Hikvision + Dahua. Here is how to adapt the configuration for other setups.

#### RTSP URL formats

| Brand | Main stream (high-res) | Sub-stream (low-res) |
|:------|:----------------------|:--------------------|
| Hikvision | `rtsp://admin:PASSWORD@IP:554/Streaming/Channels/101` | `rtsp://admin:PASSWORD@IP:554/Streaming/Channels/102` |
| Dahua | `rtsp://admin:PASSWORD@IP:554/cam/realmonitor?channel=1&subtype=0` | `rtsp://admin:PASSWORD@IP:554/cam/realmonitor?channel=1&subtype=1` |

#### Single camera

Remove the second camera block from the `cameras` section, and remove the corresponding stream from `go2rtc.streams`.

#### Dual-stream vs single-stream

- **Hikvision**: Supports stable dual-stream. Use the sub-stream (`Channels/102`) for detection and the main stream (`Channels/101`) for recording. This reduces CPU usage.
- **Dahua**: Some models have unstable sub-streams. If your Dahua camera's sub-stream is unreliable, use the main stream for both `detect` and `record` roles (as shown in the example). If your model supports a stable sub-stream, you can split the roles for better performance.

#### Alternative RTSP URLs for Dahua

If the default Dahua RTSP format does not work, try these alternatives:
- `rtsp://admin:PASSWORD@IP:554/h264/ch1/main/av_stream` (main stream)
- `rtsp://admin:PASSWORD@IP:554/h264/ch1/sub/av_stream` (sub-stream)

## Learn more

- [Frigate documentation](https://docs.frigate.video/): Full configuration reference and advanced features.
- [Frigate configuration reference](https://docs.frigate.video/configuration/reference/): Complete list of all configuration options.
