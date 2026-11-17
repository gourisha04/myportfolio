export const projects = [
  {
    id: "parinay-ai-wedding-planner",
    title: "Parinay — AI Wedding Planner",
    subtitle: "AI-Powered Wedding Production Roadmap System",
    category: "Full-Stack MERN & AI",
    isClient: false,
    featured: true,
    period: "2025",
    overview:
      "A full-stack MERN application that generates ceremony-specific production roadmaps for Indian weddings using generative AI. It enables couples and event planners to create multi-event schedules, specify deliverables, and receive structured video, photo, and album production plans.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
      "JWT Auth",
      "Vite"
    ],
    highlights: [
      "Generates function-wise cinematic plans: photo checklist, video checklist, camera angles, music mood, and social media reel ideas.",
      "Custom wedding album design output: cover design, page-by-page layout configurations, and typography selection.",
      "JWT-based authentication with role-based middleware, protected routes, and tabbed production notes."
    ],
    liveUrl: "https://ai-wedding-planner-eosin.vercel.app/",
    githubUrl: "https://github.com/gourisha04/AI-Wedding-Planner",
    image: "/parinay-preview.png",
    accentColor: "#E87545"
  },
  {
    id: "geet-studio",
    title: "Geet Studio",
    subtitle: "Client Platform & Studio Management System",
    category: "Full-Stack Client Project",
    isClient: true,
    featured: true,
    period: "2024 — 2025",
    overview:
      "A complete production web platform and administration portal engineered for Geet Studio in Indore across four creative verticals (Dance, Music, Fitness, Events) with student enrollment engine, community directory, and operations dashboard.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Cloudinary",
      "Vite"
    ],
    highlights: [
      "Online student class enrollment workflow with instant database capture and operational status tracking.",
      "Independent 13-category community directory for artists and vendors with quote request system.",
      "Administrative CMS panel for schedules, seat capacities, and custom analytics logging with Excel export."
    ],
    liveUrl: "https://geetstudio.in",
    githubUrl: null,
    clientNote: "Client production project under client agreement.",
    image: "/geet-studio-preview.jpg",
    accentColor: "#C96538"
  },
  {
    id: "code-editor",
    title: "Collaborative Code Editor",
    subtitle: "Real-Time Multi-User Code Editor",
    category: "Full-Stack Real-Time Application",
    isClient: false,
    featured: true,
    period: "2024",
    overview:
      "A real-time collaborative code editor enabling multiple developers to work together with live code synchronization, low-latency updates, multi-language syntax support, and live user presence.",
    stack: [
      "React.js",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
      "Express.js"
    ],
    highlights: [
      "Multi-user real-time code synchronization with live cursor tracking and instant updates.",
      "Support for multiple programming languages including JavaScript, Python, C++, and Java.",
      "In-editor communication with integrated real-time chat support."
    ],
    liveUrl: "https://livecoder-1-oe65.onrender.com/",
    githubUrl: null,
    image: "/code-editor-preview.png",
    accentColor: "#9E5531"
  },
  {
    id: "chat-karo",
    title: "Chat Karo",
    subtitle: "Real-Time Instant Messaging Platform",
    category: "Full-Stack WebSockets Application",
    isClient: false,
    featured: true,
    period: "2024",
    overview:
      "A scalable real-time messaging web application featuring WebSocket communication for instant low-latency chat, user authentication, and fluid responsive UI.",
    stack: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express.js",
      "Tailwind CSS"
    ],
    highlights: [
      "Low-latency real-time messaging powered by bidirectional WebSocket connections.",
      "Secure user authentication, persistent chat history, and online status indicators.",
      "Responsive conversation interface designed for smooth desktop and mobile messaging."
    ],
    liveUrl: "https://chattyapp-ki7g.onrender.com/",
    githubUrl: null,
    image: "/chat-karo-preview.png",
    accentColor: "#7B6252"
  }
];
