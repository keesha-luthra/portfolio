export type ProjectImage = {
  src: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  narrative: string;
  description: string;
  why: string;
  tech: string[];
  github?: string;
  live?: string;
  devfolio?: string;
  color: string;
  experience?: string;
  images?: ProjectImage[];
};

export const projectsData: Project[] = [
  {
    slug: "aisle-iq",
    name: "AisleIQ",
    narrative: "What if a camera could do more than just watch?",
    description: "• Tracks unique visitors across multiple camera feeds.\n• Measures queue lengths and customer flow in real time.\n• Generates heatmaps to visualize movement patterns.\n• Detects unusual activity and operational bottlenecks.\n• Exposes retail intelligence through APIs and a live dashboard.",
    why: "• I wanted to explore how computer vision could be used outside of traditional surveillance.\n• I was fascinated by the idea of turning raw video footage into actionable insights.\n• I wanted to challenge myself with a project that combined backend engineering, real-time processing, and machine learning.\n• I was curious how much information about a physical space could be extracted from something as simple as a camera feed.",
    experience: "I started this project thinking I was building a retail analytics platform.\n\nHalfway through, I realized I was actually learning debugging, system design, computer vision, and patience.\n\nMostly patience.",
    tech: ["React (Vite)", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "YOLOv8n", "OSNet", "Docker", "AWS"],
    github: "https://github.com/keesha-luthra/aisle-iq",
    color: "var(--color-brand-mint)",
    images: [
      { src: "/projects/aisle-iq/dashboard.png", caption: "Store Intelligence API Dashboard" },
      { src: "/projects/aisle-iq/heatmap.png", caption: "Real-time visitor density heatmap" },
      { src: "/projects/aisle-iq/cameras.png", caption: "Camera integration view" },
      { src: "/projects/aisle-iq/funnel.png", caption: "Visitor traffic funnel analysis" }
    ]
  },
  {
    slug: "evia",
    name: "Evia",
    narrative: "Built for the moment when a pimple looks dangerous enough to Google, but not dangerous enough to book a doctor's appointment.",
    description: "• AI-powered skin health analysis platform.\n• Upload images for instant AI-assisted analysis.\n• Women's health assistant powered by Gemini.\n• Interactive healthcare guidance tools.\n• AR-powered visualization features.\n• Personalized health recommendations.",
    why: "• Sometimes health questions start at 1 AM, not in a doctor's office.\n• I wanted to explore how AI could make health information more accessible.\n• I care deeply about technology that genuinely helps women.\n• This project let me combine machine learning with a problem that felt meaningful.",
    experience: "This started as a machine learning coursework project.\n\nSomewhere between training models, debugging predictions, and convincing everything to work together, it became much more than an assignment.\n\nIt ended up being the project that introduced me to machine learning.\n\nI've been falling down that rabbit hole ever since.",
    tech: ["Next.js", "Tailwind CSS", "Flask", "Gemini AI", "MongoDB", "Prisma", "Leaflet"],
    github: "https://github.com/keesha-luthra/Evia",
    live: "https://evia-mocha.vercel.app/",
    color: "var(--color-brand-pink)",
    images: [
      { src: "/projects/evia/dashboard.png", caption: "User health tracking dashboard" },
      { src: "/projects/evia/upload.png", caption: "Skin condition image upload interface" },
      { src: "/projects/evia/results.png", caption: "AI analysis results and confidence scores" },
      { src: "/projects/evia/chat.png", caption: "Context-aware Women's Health Assistant" }
    ]
  },
  {
    slug: "peerpath",
    name: "PeerPath",
    narrative: "Everyone says 'find a mentor.' Nobody tells you where.",
    description: "• Connects students with mentors across different domains.\n• Mentor discovery through specialized profiles.\n• Personalized learner and mentor dashboards.\n• Secure authentication and user management.\n• Streamlined mentorship matching experience.",
    why: "• Finding the right mentor is harder than people make it sound.\n• Most students don't know where to start.\n• I wanted to make guidance more accessible.\n• The idea came from a problem I had personally experienced.",
    experience: "We built this during a hackathon and ended up winning.\n\nMore importantly, it was the first time I watched an idea that existed only in my head become something other people immediately understood.\n\nThat's when I realized engineering isn't just about writing code.\n\nIt's about building things people care about.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Nodemailer", "Vanilla HTML/CSS"],
    github: "https://github.com/keesha-luthra/PeerPath-mentorship-platform",
    live: "https://peerpath-mentorship-platform.onrender.com/",
    devfolio: "https://devfolio.co/projects/peerpath-a715",
    color: "var(--color-brand-mauve)",
    images: [
      { src: "/projects/peerpath/home.png", caption: "PeerPath Homepage" },
      { src: "/projects/peerpath/mentor.png", caption: "Mentor Discovery Interface" },
      { src: "/projects/peerpath/dashboard.png", caption: "User Dashboard" },
      { src: "/projects/peerpath/auth.png", caption: "Secure Authentication" }
    ]
  },
  {
    slug: "travelin",
    name: "TravelIN",
    narrative: "Planning a trip shouldn't require opening 47 tabs.",
    description: "• Curated travel itineraries for popular Indian destinations.\n• Day-by-day trip planning and recommendations.\n• Consolidates travel information into one place.\n• Responsive web experience optimized for discovery.\n• Production-ready deployment with monitoring and CI/CD.",
    why: "• Planning trips online is surprisingly chaotic.\n• I found myself jumping between blogs, booking sites, and random PDFs.\n• I wanted one place that answered the important questions.\n• It also became my excuse to learn how production systems are deployed and maintained.",
    experience: "I built this during the first hackathon I ever participated in.\n\nNothing about it was perfect.\n\nThe code wasn't perfect.\nThe architecture wasn't perfect.\nI definitely wasn't perfect.\n\nBut it was the first time I experienced the thrill of turning an idea into something real.\n\nThat's probably when I got addicted to hackathons.",
    tech: ["Node.js", "Express.js", "Docker", "GitHub Actions", "Vanilla HTML/CSS/JS"],
    github: "https://github.com/keesha-luthra/travelIn",
    live: "https://travel-in-seven.vercel.app/",
    color: "var(--color-brand-blue)",
    images: [
      { src: "/projects/travelin/home-dashboard.png", caption: "The main discovery dashboard" },
      { src: "/projects/travelin/tour-itinerary.png", caption: "Detailed day-by-day itinerary view" },
      { src: "/projects/travelin/mobile-view.png", caption: "Fully responsive mobile experience" }
    ]
  },
  {
    slug: "snack-space",
    name: "Snack Space",
    narrative: "Have you ever been hungry at 2 AM during a hackathon?",
    description: "• Food ordering platform for students and events.\n• Restaurant and menu discovery.\n• Real-time ordering and tracking.\n• Restaurant management dashboard.\n• Cloud-based menu and media management.\n• End-to-end ordering workflow.",
    why: "• Every hackathon somehow turns into a food logistics problem.\n• We wanted a simpler way to discover and order food.\n• It was a fun excuse to build a complete full-stack application.\n• The problem was surprisingly real.",
    experience: "We built this for a hackathon and somehow walked away with third place.\n\nThe project was fun.\nThe food jokes practically wrote themselves.\nThe competition was intense.\n\nI still maintain that solving hunger is a noble engineering pursuit.",
    tech: ["Node.js", "Express.js", "MongoDB", "Handlebars", "Cloudinary"],
    github: "https://github.com/keesha-luthra/SnackSpace-restaurant-management",
    live: "https://snackspace-restaurant-management-2.onrender.com/",
    color: "var(--color-brand-lemon)",
    images: [
      { src: "/projects/snack-space/home-page.png", caption: "User ordering interface" },
      { src: "/projects/snack-space/dashboard.png", caption: "Customer order dashboard" },
      { src: "/projects/snack-space/admin-panel.png", caption: "Restaurant admin management panel" }
    ]
  },
  {
    slug: "emotion-detector",
    name: "Emotion Detection System",
    narrative: "Can machines understand what we feel?",
    description: "• Multimodal emotion recognition system.\n• Facial expression analysis.\n• Speech-based emotion detection.\n• Text sentiment analysis.\n• Weighted fusion of multiple signals.\n• Real-time emotion prediction.",
    why: "• I was learning machine learning and kept asking questions.\n• One of those questions was: what happens if we combine multiple models instead of relying on one?\n• I wanted to explore NLP and Computer Vision together.\n• This project became a playground for experimentation.",
    experience: "This was one of several projects I built while desperately trying to learn machine learning.\n\nEvery week I discovered a new concept I didn't understand.\n\nThen I built something around it.\n\nThis project was basically me learning in public.",
    tech: ["Python", "PyTorch", "Hugging Face", "FER", "OpenCV", "Flask"],
    github: "https://github.com/keesha-luthra/emotion-detector",
    color: "var(--color-brand-mint)",
    images: []
  },
  {
    slug: "edm2-guidance-ablation-study",
    name: "EDM2 Guidance Ablation Study",
    narrative: "Sometimes the most fascinating discoveries happen when we take things apart.",
    description: "Evaluates the trade-offs between image quality (fidelity) and sample diversity in diffusion-based generative models. By reproducing the state-of-the-art EDM2 framework on the ImageNet-64 benchmark, it generates ~50,000 images and tests alternative Classifier-Free Guidance (CFG) strategies.",
    why: "This was built as a research study to investigate the limitations of standard Classifier-Free Guidance. The project was created to test new guidance formulations aimed at amplifying class-salient features and stabilizing reverse diffusion.",
    experience: "This is actually not a project, this is something I did in my 6th semester which I think deserves some recognition. I remember using up all the servers provided and getting banned from using those at all so yeah this is kind of special.",
    tech: ["Python", "PyTorch", "TensorFlow", "Diffusion Models"],
    github: "https://github.com/keesha-luthra/edm2-guidance-ablation-study",
    color: "var(--color-brand-pink)",
    images: [
      { src: "/projects/edm2/seed0_original.png", caption: "Original EDM2 Baseline (Seed 0)" },
      { src: "/projects/edm2/seed0_modified.png", caption: "Modified Guidance Implementation (Seed 0)" },
      { src: "/projects/edm2/seed2_original.png", caption: "Original EDM2 Baseline (Seed 2)" },
      { src: "/projects/edm2/seed2_modified.png", caption: "Modified Guidance Implementation (Seed 2)" }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => p.slug === slug);
}
