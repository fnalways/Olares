---
outline: [2, 3]
description: Use Focalboard on Olares to manage projects with kanban boards, organize tasks with cards and templates, and collaborate with your team.
head:
  - - meta
    - name: keywords
      content: Olares, Focalboard, kanban, project management, task management, self-hosted, collaboration
app_version: "1.0.3"
doc_version: "1.0"
doc_updated: "2026-04-13"
---

# Manage projects with Focalboard

Focalboard is an open-source project management tool that organizes work using kanban boards and cards. It supports custom card templates, team collaboration with granular permissions, and category-based board organization. Running Focalboard on Olares keeps your project data fully under your control.

## Install Focalboard

1. Open Market and search for "Focalboard".
   <!-- ![Focalboard](/images/manual/use-cases/focalboard.png#bordered) -->

2. Click **Get**, then **Install**, and wait for installation to complete.

## Set up Focalboard

### Register the admin account

When you open Focalboard for the first time, you will be prompted to register. The first user to register becomes the admin.

<!-- ![Register](/images/manual/use-cases/focalboard-register.png#bordered) -->

:::warning Keep your credentials safe
Focalboard currently only supports password reset through command-line scripts, which can be complex. Make sure to store your username and password securely.
:::

### Invite team members

After logging in as the admin, you can invite others to register:

1. Click the Focalboard logo in the top-right corner.
2. Select **Invite users**.
3. Copy the invitation link and share it with your team members.

<!-- ![Invite users](/images/manual/use-cases/focalboard-invite.png#bordered) -->

Other users can only register through this invitation link. Once registered, they automatically become team members.

## Use Focalboard

### Create boards and card templates

Focalboard organizes data using boards and cards. You can define card templates to standardize the fields for all cards in a board.

1. Click **+ Add board** and select **Create an empty board**.

   <!-- ![Add board](/images/manual/use-cases/focalboard-add-board.png#bordered) -->

2. Edit the board title and choose a view style (such as Board, Table, or Gallery).

   <!-- ![Board title](/images/manual/use-cases/focalboard-board-title.png#bordered) -->

3. Click **New** in the top-right corner, then select **New Template** to define card fields for this board. In addition to fixed property fields, you can add free-form content like text and images at the bottom of the template.

   <!-- ![Card template](/images/manual/use-cases/focalboard-card-template.png#bordered) -->

### Add and edit cards

1. Click **+ New** to create a blank card, or select an existing template to create a card with preset values.

   <!-- ![New card](/images/manual/use-cases/focalboard-new-card.png#bordered) -->

2. Fill in the card properties and add content in the description area.

:::tip Card covers
By default, Focalboard uses the first image in a card as its cover image.
:::

### Edit card descriptions

The description area uses a block-based editor:

- Click **Add content** at the bottom to insert text, images, dividers, or checkboxes.
- Click the **...** button before a content block to insert new content above it.
- Drag the handle before a content block to reorder it.

### Manage boards

Click the **...** button next to a board name to access management options. You can duplicate or delete a board.

To organize boards into categories:

1. Click **+ Create a category** in the sidebar to add a new category.
2. Drag boards into the category to group them.
3. To move a board to a different category, click **...** next to the board and select **Move to**.
4. To rename or delete a category, click **...** next to the category name. Deleting a category moves all its boards back to the default **Boards** section.

<!-- ![Board categories](/images/manual/use-cases/focalboard-categories.png#bordered) -->

## Collaborate on boards

To share a board with team members:

1. Open the board you want to share.
2. Click **Share** in the top-right corner.
3. Add team members and assign their permissions (viewer, commenter, editor, or admin).

You can also remove a member from the board through the same panel.

<!-- ![Share board](/images/manual/use-cases/focalboard-share.png#bordered) -->

## FAQ

### How do I import data from Notion?

Focalboard supports importing data from Notion. For detailed steps, see the [Mattermost migration guide](https://docs.mattermost.com/boards/migrate-to-boards.html#import-from-notion).

### How do I access the database directly?

Focalboard on Olares uses PostgreSQL as its database. You can access it for advanced queries or troubleshooting:

1. Open Control Hub and navigate to the Focalboard container terminal.

   <!-- ![Control Hub container](/images/manual/use-cases/focalboard-container.png#bordered) -->

2. Install the PostgreSQL client (required after each container restart):

   ```bash
   apt update && apt install -y postgresql-client
   ```

3. View the database connection info:

   ```bash
   cat config.json
   ```

   Look for the `dbconfig` field containing the connection string, for example:

   ```text
   "dbconfig": "postgres://focalboard_<username>_focalboard:focalboard@citus-master-svc.user-system-<username>/focalboard_<username>_focalboard?sslmode=disable&connect_timeout=10"
   ```

4. Connect to the database using the host and username from the connection string:

   ```bash
   psql -h citus-master-svc.user-system-<username> -U focalboard_<username>_focalboard
   ```

   Enter `focalboard` as the password when prompted.

5. Once connected, you can run SQL queries. For example:

   ```bash
   # List all tables
   \dt

   # View table structure
   SELECT column_name, data_type, is_nullable
   FROM information_schema.columns
   WHERE table_name = 'boards';

   # Query recent data
   SELECT * FROM boards ORDER BY create_at DESC LIMIT 1;
   ```

## Learn more

- [Focalboard documentation](https://www.focalboard.com/guide/user/): Official Focalboard user guide.
