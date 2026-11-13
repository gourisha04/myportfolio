export const projects = [
  {
    id: "geet-studio",
    number: "01",
    title: "Geet Studio",
    subtitle: "Client Platform & Studio Management System",
    category: "Full-Stack Client Project",
    isClient: true,
    featured: true,
    period: "2024 — 2025",
    overview:
      "A complete full-stack web platform and administration system built for Geet Studio, a premier dance, music, fitness, and event production studio based in Indore. The platform unites a cinematic public brand experience with a direct student enrollment engine, community vendor directory, and operations CMS.",
    contribution:
      "Engineered the full-stack architecture from the ground up: developed the responsive React frontend with fluid motion design, designed 9 MongoDB collections with Mongoose, built the Express REST API, and built the custom analytics engine with Excel reporting.",
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
    githubUrl: null, // Private client codebase
    clientNote: "Client production project. Codebase is proprietary under client agreement.",
    image: "/about.png",
    accentColor: "#E87545"
  },
  {
    id: "smart-event-booking",
    number: "02",
    title: "Smart Event Booking",
    subtitle: "Event Discovery & Dynamic Ticketing Platform",
    category: "Full-Stack Web Application",
    isClient: false,
    featured: true,
    period: "2024",
    overview:
      "An end-to-end event discovery and ticket reservation system that allows users to explore upcoming conferences, workshops, and concerts, calculate seat pricing dynamically, and book tickets through a clean, intuitive booking flow backed by MySQL.",
    contribution:
      "Architected both frontend and backend services: built modular React views with live ticket total computation, implemented MySQL database schemas for events and bookings, and designed an administrative control panel for event scheduling.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "Framer Motion"
    ],
    highlights: [
      "Categorized event exploration with instant search and filtering by date, category, and pricing.",
      "Dynamic event detail pages with venue map embeds, schedule timeline, and available seat quotas.",
      "Interactive checkout flow with live price updates and instant booking confirmation.",
      "Administrative dashboard allowing organizers to add, update, and manage event listings and view attendee rosters.",
      "Relational MySQL schema ensuring seat availability constraints and booking audit records."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/gourisha04",
    image: "/profile.jpg",
    accentColor: "#C96538"
  },
  {
    id: "interactive-3d-portfolio",
    number: "03",
    title: "Interactive 3D Portfolio Space",
    subtitle: "WebGL & Three.js Creative Developer Showcase",
    category: "Creative Development",
    isPlaceholder: true,
    featured: false,
    period: "2024",
    overview:
      "A creative developer experiment combining React, Three.js, and GSAP to deliver an immersive 3D scene with dynamic camera tracking, physics-based object interactions, and responsive WebGL canvas rendering.",
    contribution:
      "Modeled interactive 3D assets, integrated React Three Fiber with Rapier physics, and built custom GSAP timeline transitions tied to scroll velocity.",
    stack: [
      "React",
      "Three.js",
      "@react-three/fiber",
      "GSAP",
      "TypeScript",
      "Tailwind CSS"
    ],
    highlights: [
      "Interactive WebGL canvas with custom materials, shadows, and camera movements.",
      "Smooth scroll choreography synchronized with GSAP ScrollTrigger.",
      "Performance-monitored 60 FPS rendering pipeline with responsive fallback for mobile devices."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/gourisha04",
    accentColor: "#9E5531"
  },
  {
    id: "cloud-collaboration-hub",
    number: "04",
    title: "Team Sync Workspace",
    subtitle: "Real-Time Collaboration & Kanban Platform",
    category: "MERN Stack Project",
    isPlaceholder: true,
    featured: false,
    period: "2024",
    overview:
      "A productivity web app designed for agile teams, featuring real-time task boards, drag-and-drop state management, customizable workflows, and collaborative project timelines.",
    contribution:
      "Implemented optimistic UI updates with React, built WebSocket event handlers for team sync, and developed RESTful API endpoints for workspace configuration.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets"
    ],
    highlights: [
      "Smooth drag-and-drop task progression across custom sprint columns.",
      "Instant multi-user updates via bidirectional WebSocket connections.",
      "Granular role-based permissions (Owner, Editor, Observer) with audit activity history."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/gourisha04",
    accentColor: "#7B6252"
  },
  {
    id: "creative-prompt-studio",
    number: "05",
    title: "PromptCraft Studio",
    subtitle: "Developer Utility & Markdown Publishing Tool",
    category: "Frontend Application",
    isPlaceholder: true,
    featured: false,
    period: "2024",
    overview:
      "A minimalist, distraction-free markdown studio for engineering teams to draft, test, organize, and export documentation, structured system prompts, and technical notes.",
    contribution:
      "Designed the typography-first user interface, implemented instant live markdown parsing, and created client-side export pipelines for PDF and raw markdown.",
    stack: [
      "React",
      "Tailwind CSS",
      "LocalStorage API",
      "Vite",
      "Lucide Icons"
    ],
    highlights: [
      "Instant dual-pane live markdown preview with code block syntax highlighting.",
      "Offline-first architecture with automatic LocalStorage sync and document tagging.",
      "Keyboard shortcut workflow designed for rapid developer note-taking."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/gourisha04",
    accentColor: "#8D705C"
  }
];
