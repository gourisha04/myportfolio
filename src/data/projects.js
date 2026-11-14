export const projects = [
  {
    id: "geet-studio",
    title: "Geet Studio",
    subtitle: "Client Platform & Studio Management System",
    category: "Full-Stack Client Project",
    isClient: true,
    featured: true,
    period: "2024 — 2025",
    overview:
      "A production full-stack web platform and administration portal developed for Geet Studio in Indore. The application provides an interactive public brand experience across four creative verticals alongside class enrollment workflows, a community artist directory, and an operations management dashboard.",
    contribution:
      "Engineered the full-stack architecture: built responsive React components with Tailwind CSS and Framer Motion, implemented Express.js REST API endpoints with Mongoose schemas across 9 collections, integrated role-based authentication, and created a custom analytics logger with Excel export.",
    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Cloudinary",
      "Vite"
    ],
    highlights: [
      "Four dedicated studio service verticals: Dance, Music, Fitness, and Events & Productions.",
      "Online student class enrollment workflow with instant database capture and operational status tracking (NEW, CONTACTED, CONFIRMED, CLOSED).",
      "Independent 13-category community directory for artists, DJs, and vendors with a private middleman quote request system.",
      "Multi-role authentication system (Administrator, Community Lead, User) with secure session handling.",
      "Custom analytics engine logging page entries, session durations, and funnel drop-offs with one-click Excel data export.",
      "Non-technical administrative CMS panel for schedules, seat capacities, and content updates."
    ],
    liveUrl: "https://geetstudio.vercel.app",
    githubUrl: null,
    clientNote: "Client production project. Codebase is proprietary under client agreement.",
    image: "/geet-studio-preview.jpg",
    accentColor: "#E87545"
  },
  {
    id: "parinay-ai-wedding-planner",
    title: "Parinay",
    subtitle: "AI-Powered Wedding Planning & Production System",
    category: "Full-Stack MERN Application",
    isClient: false,
    featured: true,
    period: "2025",
    overview:
      "A full-stack MERN application that generates ceremony-specific production roadmaps for Indian weddings using generative AI. It allows couples and event planners to create multi-event schedules, specify budgets and deliverables, and receive structured production plans across dedicated dashboard views.",
    contribution:
      "Designed and developed the full system: constructed modular React interfaces with Framer Motion transitions, implemented Express.js routes with JWT authentication and role-based middleware, modeled Mongoose schemas for multi-day events and media references, and integrated the Google Gemini API with fallback handling to reliably produce structured JSON production guides.",
    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
      "JWT Auth",
      "Multer",
      "Vite"
    ],
    highlights: [
      "Google Gemini AI generates structured JSON wedding production plans: function-wise video plans, shot lists, album layouts, highlight film structures, and reel concepts.",
      "Per-function cinematic plans: photo checklist, video checklist, camera angles, drone shots, music mood, color grading style, editing pace, and social media reel ideas.",
      "Wedding album design output: cover design, page-by-page layout configurations (Full Bleed, Grid, Collage, Portrait Focus, Panoramic), colour palette, and typography.",
      "JWT-based authentication with role-based middleware (user/admin), protected dashboard routes, and secure session handling.",
      "Media upload system using Multer for uploading reference files per wedding function, stored and linked to AI-generated plans.",
      "Tabbed AI output dashboard: Function-Wise Plans, Shot Checklists, Album Layout, Highlight Structure, and Production Notes — all from a single AI call."
    ],
    liveUrl: "https://ai-wedding-planner-eosin.vercel.app/",
    githubUrl: "https://github.com/gourisha04/AI-Wedding-Planner",
    image: "/parinay-preview.png",
    accentColor: "#C96538"
  }
];
