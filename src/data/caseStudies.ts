export type CaseStudySlug =
  | "lead-qualification-nurturing"
  | "invoice-processing-ap-automation"
  | "appointment-scheduling-reminders"
  | "content-metadata-distribution";

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  shortSummary: string;
  heroSubtitle: string;
  primaryIndustryExample: string;
  reusableIndustries: string[];
  challengeStatements: string[];
  workflowSummary: Array<{
    title: string;
    description: string;
  }>;
  outcomes: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  adjacentWorkflows: Array<{
    name: string;
    description: string;
  }>;
  platformFlexibility: string[];
  cta: {
    primary: string;
    secondary: string;
    closingTitle: string;
    closingBody: string;
  };
  video: {
    placeholderTitle: string;
    placeholderDescription: string;
    loomEmbedUrl?: string;
  };
  inquiryContext: {
    subject: string;
    source: string;
  };
  cardHighlights: Array<{
    value: string;
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lead-qualification-nurturing",
    title: "Universal Lead Intake & AI Qualification",
    shortSummary:
      "Connect any lead source—from inbound marketing funnels to landing pages—and automatically qualify prospects before pushing them to your CRM.",
    heroSubtitle:
      "A universal intake engine that ensures your best opportunities are greeted with an immediate, personalized response, while the 'window shoppers' are filtered out automatically.",
    primaryIndustryExample: "High-volume operations teams managing multi-channel inbound lead funnels",
    reusableIndustries: ["Real Estate", "Legal services", "Home services", "Financial advisory", "B2B agencies", "Clinics and private practices"],
    challengeStatements: [
      "Inbound leads and channel inquiries arrive faster than your team can manually log them.",
      "High-intent prospects sit waiting in inboxes while low-intent 'window shoppers' consume your team's energy.",
      "Inconsistent follow-up speed is costing you deals that were ready to close 'right now'.",
    ],
    workflowSummary: [
      {
        title: "Omni-Channel Intake",
        description:
          "Every lead from every source lands in one unified pipe—no more manual entry from fragmented emails or platform notifications.",
      },
      {
        title: "Automated AI Scoring & Segmentation",
        description:
          "Every lead is instantly analyzed for intent, specific needs, and urgency, ensuring your team only spends time on 'ready-to-act' prospects.",
      },
      {
        title: "CRM Sync & Personalized Drafts",
        description:
          "Seamlessly bridge the gap to CRM tools like HubSpot or Airtable, generating personalized first-touch drafts for your team to review and send.",
      },
    ],
    outcomes: [
      {
        value: "<5 min",
        label: "Response time",
        description: "Don't let a lead cool down; greet every qualified prospect while they are still on their phone.",
      },
      {
        value: "Zero",
        label: "Manual data entry",
        description: "Focus on closing, not copy-pasting lead details from one tool to another.",
      },
      {
        value: "100%",
        label: "Lead coverage",
        description: "Ensure no high-intent inquiry ever falls through the cracks again.",
      },
    ],
    adjacentWorkflows: [
      {
        name: "Intelligent Lead Enrichment",
        description: "Automatically pull prospect data or market context to prep your team before they reach out.",
      },
      {
        name: "Dynamic Calendar Handoff",
        description: "Connect high-intent leads directly to your top performers' calendars based on custom logic.",
      },
      {
        name: "Automated Follow-up Sequences",
        description: "Trigger multi-channel nurturing for leads that aren't ready to buy today but need consistent touchpoints.",
      },
    ],
    platformFlexibility: [
      "The n8n automation layer can be adapted to your existing CRM (HubSpot, Salesforce, etc.), budget, and approval process.",
      "Intake can be connected to diverse source channels using standard webhooks, API connectors, or email parsing.",
      "PerceptiveOps recommends a stack using HubSpot and Airtable for the best balance of visibility, speed, and scalability.",
    ],
    cta: {
      primary: "Request This Workflow",
      secondary: "See Other Case Studies",
      closingTitle: "Tired of inbound leads dying in your inbox?",
      closingBody:
        "We can adapt this universal intake workflow to your lead volume and customer journey so your team spends more time closing and less time triaging.",
    },
    video: {
      placeholderTitle: "See Universal Lead Qualification in Action",
      placeholderDescription:
        "A walkthrough here can show how a new lead is captured via webhook, qualified by GPT-4, and handed off to HubSpot with a personalized draft ready.",
    },
    inquiryContext: {
      subject: "Case Study Inquiry - Universal Lead Intake & AI Qualification",
      source: "case-study-lead-qualification",
    },
    cardHighlights: [
      { value: "Universal", label: "intake connectivity" },
      { value: "AI Qual", label: "of buyer/seller intent" },
      { value: "Proposals", label: "generated instantly" },
    ],
  },
  {
    slug: "invoice-processing-ap-automation",
    title: "Invoice Processing & AP Automation",
    shortSummary:
      "Reduce manual invoice handling, surface exceptions early, and move payable work forward with more control and less back-and-forth.",
    heroSubtitle:
      "An accounts-payable workflow that captures invoice data, flags risks, and routes the right approvals before finance work becomes a bottleneck.",
    primaryIndustryExample: "Finance and operations teams managing supplier invoices across multiple approvers",
    reusableIndustries: ["Construction", "Logistics", "Retail", "Professional services", "Healthcare operations"],
    challengeStatements: [
      "Invoices arrive in too many formats and too many channels for the team to process consistently.",
      "Approvals stall because context is missing or someone notices issues too late.",
      "Duplicates, mismatches, and archive gaps create avoidable rework and payment risk.",
    ],
    workflowSummary: [
      {
        title: "Centralize invoice intake",
        description:
          "Invoices from email, uploads, or shared folders are collected into one consistent review path so finance is not piecing together work manually.",
      },
      {
        title: "Highlight what needs attention",
        description:
          "The workflow extracts key details, checks for duplicates or mismatches, and flags anything that needs human review before approval.",
      },
      {
        title: "Move approvals and records forward cleanly",
        description:
          "Approved invoices are packaged for the next accounting step while keeping a clear archive and recovery trail for exceptions.",
      },
    ],
    outcomes: [
      {
        value: "Less admin",
        label: "Faster invoice throughput",
        description: "Teams spend less time on repetitive entry and more time on exceptions that matter.",
      },
      {
        value: "Earlier alerts",
        label: "Visible approval blockers",
        description: "Missing approvals and mismatches get exposed before they delay payment cycles.",
      },
      {
        value: "More control",
        label: "Safer AP operations",
        description: "Finance leaders get a cleaner audit trail and fewer avoidable processing mistakes.",
      },
    ],
    adjacentWorkflows: [
      {
        name: "Purchase order and vendor onboarding flows",
        description: "Connect invoice handling to upstream vendor setup and PO validation so finance sees fewer surprises.",
      },
      {
        name: "Cash-flow and approval reporting",
        description: "Feed processed invoices into finance visibility dashboards for better planning.",
      },
      {
        name: "Document archive and retrieval",
        description: "Attach approved invoice records to a cleaner storage and retrieval workflow for audits or vendor questions.",
      },
    ],
    platformFlexibility: [
      "Teams can use lightweight automation tools, finance-focused stacks, or custom connectors based on compliance needs and budget.",
      "Accounting sync can connect to established finance systems or stay in a controlled review layer until the client is ready.",
      "PerceptiveOps keeps the solution platform-agnostic so the business is not forced into a tool it does not want to live with.",
    ],
    cta: {
      primary: "Discuss AP Automation",
      secondary: "See Other Case Studies",
      closingTitle: "Still paying for manual AP work every week?",
      closingBody:
        "This workflow is designed to help finance teams process invoices faster, catch exceptions sooner, and scale without adding process chaos.",
    },
    video: {
      placeholderTitle: "Watch the AP Workflow End to End",
      placeholderDescription:
        "A walkthrough here can show invoice intake, exception handling, approval routing, and the handoff into accounting review in one clean flow.",
    },
    inquiryContext: {
      subject: "Case Study Inquiry - Invoice Processing & AP Automation",
      source: "case-study-invoice-processing",
    },
    cardHighlights: [
      { value: "Fewer", label: "manual touchpoints" },
      { value: "Safer", label: "approval and archive control" },
      { value: "Useful", label: "for any AP-heavy team" },
    ],
  },
  {
    slug: "appointment-scheduling-reminders",
    title: "Appointment Scheduling & Reminders",
    shortSummary:
      "Reduce no-shows and admin follow-up by coordinating reminders, reschedules, and failed outreach before appointment time.",
    heroSubtitle:
      "A customer communication workflow that keeps bookings moving, adapts to schedule changes, and protects revenue from missed appointments.",
    primaryIndustryExample: "Health and wellness teams managing time-sensitive appointment attendance",
    reusableIndustries: ["Salons", "Legal consultations", "Coaching businesses", "Field services", "Private clinics"],
    challengeStatements: [
      "Booked appointments still fall through because reminders are inconsistent or too late.",
      "Reschedules and cancellations leave old reminder paths running in the background.",
      "Teams do not know which customers were never successfully reached until the slot is already at risk.",
    ],
    workflowSummary: [
      {
        title: "Watch booking activity in real time",
        description:
          "The workflow reacts to new bookings, reschedules, and cancellations so communication matches the customer's current appointment status.",
      },
      {
        title: "Send reminders through the right channels",
        description:
          "Customers receive timely reminders and confirmation prompts using the communication mix that suits the business and audience.",
      },
      {
        title: "Surface failed outreach before it costs you",
        description:
          "If reminders bounce, fail, or never land, the team can intervene before the appointment is lost entirely.",
      },
    ],
    outcomes: [
      {
        value: "Fewer",
        label: "no-shows",
        description: "Attendance improves when reminder timing and fallback communication are handled consistently.",
      },
      {
        value: "Less admin",
        label: "manual chasing",
        description: "Teams spend less time calling every booking individually just to keep the schedule full.",
      },
      {
        value: "Better visibility",
        label: "at-risk appointments",
        description: "Problem bookings become visible before they impact staff utilization or customer experience.",
      },
    ],
    adjacentWorkflows: [
      {
        name: "Pre-visit intake and onboarding",
        description: "Collect forms, instructions, or required information before the appointment without extra staff effort.",
      },
      {
        name: "Post-visit follow-up and rebooking",
        description: "Extend the workflow into review requests, treatment plans, or next-appointment prompts.",
      },
      {
        name: "Payment reminder and deposit workflows",
        description: "Combine scheduling operations with payment readiness for higher attendance and lower friction.",
      },
    ],
    platformFlexibility: [
      "Reminder orchestration can be adapted to the client's preferred booking, messaging, and outreach tools.",
      "Businesses with a simple stack can start with lightweight systems, while larger teams can plug the same logic into broader operations.",
      "PerceptiveOps recommends the setup that matches customer expectations, not a fixed list of apps.",
    ],
    cta: {
      primary: "Plan My Reminder Workflow",
      secondary: "See Other Case Studies",
      closingTitle: "Want fewer no-shows without more front-desk effort?",
      closingBody:
        "We can tailor this scheduling workflow to your booking volume, reminder cadence, and customer communication style.",
    },
    video: {
      placeholderTitle: "See the Reminder System at Work",
      placeholderDescription:
        "A walkthrough here can show reminder timing, reschedule handling, and how at-risk appointments are surfaced before the calendar takes the hit.",
    },
    inquiryContext: {
      subject: "Case Study Inquiry - Appointment Scheduling & Reminders",
      source: "case-study-appointment-scheduling",
    },
    cardHighlights: [
      { value: "Fewer", label: "missed appointments" },
      { value: "Smoother", label: "schedule changes" },
      { value: "Portable", label: "across appointment businesses" },
    ],
  },
  {
    slug: "content-metadata-distribution",
    title: "Content Metadata Management & Distribution",
    shortSummary:
      "Move media assets from upload to publish-ready packaging with cleaner metadata, fewer handoff gaps, and more confidence across channels.",
    heroSubtitle:
      "A content operations workflow that organizes media, prepares channel-ready outputs, and keeps partial publishing failures from becoming expensive cleanup work.",
    primaryIndustryExample: "Media and content teams distributing assets across multiple channels and formats",
    reusableIndustries: ["Entertainment", "Education", "Podcasting", "Marketing teams", "Creator operations"],
    challengeStatements: [
      "Media teams lose time re-entering metadata and repackaging content for each channel.",
      "Publishing breaks when one destination fails, leaving teams to manually figure out what completed and what did not.",
      "Asset organization and discovery become harder as the content library grows.",
    ],
    workflowSummary: [
      {
        title: "Receive and prepare incoming media",
        description:
          "Assets are collected into a structured flow that keeps titles, descriptions, transcripts, and supporting material from getting lost.",
      },
      {
        title: "Create channel-ready packaging",
        description:
          "The workflow prepares metadata and output variations that support different publishing or distribution needs without restarting the process each time.",
      },
      {
        title: "Track partial failures clearly",
        description:
          "If one channel or destination fails, the team can see what succeeded, what needs review, and what should be replayed.",
      },
    ],
    outcomes: [
      {
        value: "Faster",
        label: "content throughput",
        description: "Teams can ship more assets without scaling manual coordination linearly.",
      },
      {
        value: "Cleaner",
        label: "metadata consistency",
        description: "Descriptions, tags, and packaging become more usable across the whole content operation.",
      },
      {
        value: "Safer",
        label: "distribution recovery",
        description: "Publishing failures become manageable incidents instead of messy post-launch guesswork.",
      },
    ],
    adjacentWorkflows: [
      {
        name: "Approval and editorial review",
        description: "Add stakeholder sign-off before public release without rebuilding the content pipeline from scratch.",
      },
      {
        name: "Clip generation and repurposing",
        description: "Extend the same asset flow into short-form content, social packaging, or campaign distribution.",
      },
      {
        name: "Asset archive and rights tracking",
        description: "Keep creative operations aligned with storage, retrieval, and approval history.",
      },
    ],
    platformFlexibility: [
      "The media workflow can be adapted to lightweight creator tools, broader marketing stacks, or enterprise content environments.",
      "Storage, review, and distribution layers are selected based on how the client already works and what level of control is required.",
      "PerceptiveOps stays focused on reliable content operations rather than locking the workflow to one ecosystem.",
    ],
    cta: {
      primary: "Explore Content Operations Automation",
      secondary: "See Other Case Studies",
      closingTitle: "Publishing across channels without losing control",
      closingBody:
        "If your team is juggling uploads, metadata, review, and distribution manually, this workflow can help you scale output with less operational drag.",
    },
    video: {
      placeholderTitle: "Watch the Content Operation Move",
      placeholderDescription:
        "A walkthrough here can show asset intake, metadata preparation, output packaging, and recovery across channels when distribution does not go perfectly.",
    },
    inquiryContext: {
      subject: "Case Study Inquiry - Content Metadata Management & Distribution",
      source: "case-study-content-metadata",
    },
    cardHighlights: [
      { value: "Faster", label: "asset packaging" },
      { value: "Clearer", label: "channel recovery" },
      { value: "Scalable", label: "for media-heavy teams" },
    ],
  },
];

export const getCaseStudyBySlug = (slug?: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
