---
outline: [2, 3]
description: Install and set up Netdata on Olares for real-time infrastructure monitoring with dashboards, alerts, and metric analysis.
head:
  - - meta
    - name: keywords
      content: Olares, Netdata, monitoring, infrastructure, metrics, dashboard, alerts, self-hosted
app_version: "1.0.9"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Monitor your Olares infrastructure with Netdata

Netdata is an open-source, real-time infrastructure monitoring platform. It collects thousands of metrics from your system, containers, and applications, and presents them in interactive dashboards.

Running Netdata on Olares gives you full visibility into your device's health, including CPU, memory, disk, network, and application-level metrics, all without sending data to external services.

## Learning objectives

In this guide, you will learn how to:
- Install Netdata on Olares.
- Sign in and complete the initial setup.
- Explore monitoring dashboards and alerts.
- Create rooms and add integrations for multi-server monitoring.

## Install Netdata

1. Open Market and search for "Netdata".
   <!-- ![Netdata](/images/manual/use-cases/netdata.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Sign in to Netdata

Netdata does not have a default account. You need to create one using your email address during the first sign-in.

1. Open Netdata from Launchpad.
   <!-- ![Netdata home](/images/manual/use-cases/netdata-home.png#bordered) -->

2. Click **Sign in**, and enter your email address on the sign-in page.

3. Check your inbox for a verification email from Netdata, and follow the instructions to complete the sign-in.

4. When prompted for a session ID, retrieve it from the Olares terminal. Open Control Hub, navigate to **Netdata** pod's terminal, and run:

   ```bash
   cat /var/lib/netdata/netdata_random_session_id
   ```

   Copy the output and paste it into the session ID field to complete the sign-in.
   <!-- ![Netdata session ID](/images/manual/use-cases/netdata-session-id.png#bordered) -->

5. When prompted to upgrade, select the free plan. Click **Upgrade**, close the pricing dialog, and click **Select** on the free tier.
   <!-- ![Netdata free plan](/images/manual/use-cases/netdata-free-plan.png#bordered) -->

## Use Netdata

### Explore the monitoring dashboard

The monitoring dashboard provides several views, each accessible from the top navigation:

| Tab | Description |
|:-----|:------------|
| Nodes | Node index with alert status and key metrics |
| Metrics | System, container, VM, and application metrics |
| Top | Process, container, service, and system component details |
| Logs | System and application logs |
| Dashboard | Custom dashboards you can create and configure |
| Alerts | Alert rules and notifications |
| Anomalies | Anomaly detection across metrics |
| Events | Activity feed |

<!-- ![Netdata dashboard](/images/manual/use-cases/netdata-dashboard.png#bordered) -->

### Filter by time range

Click the time control in the toolbar to select a predefined or custom time range. You can also filter by tags to narrow down the data displayed.

<!-- ![Netdata time filter](/images/manual/use-cases/netdata-time-filter.png#bordered) -->

### Navigate with the sidebar

When viewing metrics, use the sidebar on the right to quickly jump to specific metric categories. This is faster than scrolling through the full dashboard.

To return to the overview, click **System** in the top-left corner.

<!-- ![Netdata sidebar](/images/manual/use-cases/netdata-sidebar.png#bordered) -->

### Use metric correlations

Click **Metric Correlations** in the toolbar, then select a time range on any chart. Netdata will identify all metrics that changed significantly during that period, helping you quickly find related events.

<!-- ![Netdata metric correlations](/images/manual/use-cases/netdata-correlations.png#bordered) -->

### Create rooms and add integrations

Rooms let you organize monitoring by environment, such as separating production and staging servers.

1. Click the arrow on the left to expand the sidebar menu.

2. Click the **+** icon next to **Rooms** to create a new room.

3. Select the room, then click **Room Settings** to access the setup page. Copy the provided `wget` or `curl` command and run it on the server you want to monitor.
   <!-- ![Netdata room setup](/images/manual/use-cases/netdata-room-setup.png#bordered) -->

To add third-party integrations, click **Integrations** in the sidebar. Browse available services and data collectors, then follow the provided installation commands on your target server.

## FAQ

### The sidebar collapses immediately after opening

Refresh the page to resolve this issue.

### Page data is missing or not loading

Refresh the page. The data should restore after a reload.

### How to completely remove Netdata data after uninstalling

After uninstalling Netdata from Market, open Files and delete the `netdata` folder under `Application/Data` to remove all remaining data.
