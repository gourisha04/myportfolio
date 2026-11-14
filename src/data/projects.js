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
      "A complete full-stack web platform and administration system built for Geet Studio, a premier dance, music, fitness, and event production studio based in Indore. The platform unites a cinematic public brand experience with a direct student enrollment engine, community vendor directory, and operations CMS.",
    contribution:
      "Developed the responsive React frontend with fluid motion design, designed MongoDB collections with Mongoose, built the Express REST API, and created a custom analytics engine with Excel reporting.",
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
      "A full-stack AI wedding planning platform that generates complete cinematic production roadmaps for Indian weddings. Users register, create a wedding project with ceremony details and budget, and receive a Gemini-powered plan covering function-wise video shot lists, album layout designs, highlight film structures, reel concepts, and production notes — all in a single output dashboard.",
    contribution:
      "Built the complete MERN stack architecture: developed the React frontend with Framer Motion animations and a multi-page dashboard, designed the Express REST API with JWT authentication and role-based middleware, created MongoDB schemas for weddings, events, album designs, and video plans, and integrated the Google Gemini API for structured AI plan generation with a structured mock fallback.",
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
