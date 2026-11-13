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
    id: "smart-event-booking",
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
    image: null,
    accentColor: "#C96538"
  }
];
