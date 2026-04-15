# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Configuration

The application uses **StaticForms** to handle form submissions (Consultation Modal and Case Study Inquiries).

### Environment Variables

To enable form submissions, create a `.env` file in the root directory and add your StaticForms Access Key:

```env
VITE_STATICFORMS_ACCESS_KEY=your_access_key_here
```

1. Get your access key from [StaticForms](https://www.staticforms.xyz/).
2. Add it to your local `.env` file.
3. For production (e.g., Vercel, Netlify), add this variable to your deployment settings.

### Case Study Videos

You can manage the Loom video embeds shown on Case Study detail pages in two ways:

#### 1. Environment Variables (Recommended for Production)
Add the video URLs to your `.env` file using the case study slug (in uppercase with underscores). This allows you to update videos without redeploying code.

```env
VITE_LOOM_URL_LEAD_QUALIFICATION_NURTURING=https://www.loom.com/embed/...
VITE_LOOM_URL_INVOICE_PROCESSING_AP_AUTOMATION=https://www.loom.com/embed/...
VITE_LOOM_URL_APPOINTMENT_SCHEDULING_REMINDERS=https://www.loom.com/embed/...
VITE_LOOM_URL_CONTENT_METADATA_DISTRIBUTION=https://www.loom.com/embed/...
```

#### 2. Data File
You can also update the `loomEmbedUrl` field directly in [src/data/caseStudies.ts](file:///Users/bleckcorp/IdeaProjects/perceptiveops-marketing/ai-operations-wise/src/data/caseStudies.ts).

Note: The "Watch the Story" button in the hero section will only appear if a video URL is provided via one of these methods.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
