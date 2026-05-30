import { Project, ExperienceItem, StatCard } from './types';

export const PERSONAL_DETAILS = {
  name: "Shi Hanfei",
  role: "Frontend Engineer × Product Designer",
  bio: "I build intelligent digital experiences through design thinking, clean code, and AI-powered workflows.",
  portrait: "/images/shi_hanfei_new_portrait.jpg",
  seekingInternshipText: "Currently seeking Frontend Engineering Internship opportunities.",
  availableText: "Available for 6+ months & 5 days / week",
  email: "1296481195@qq.com",
  phone: "+86 158 3712 9397",
  wechat: "S15837129397",
  resumePath: "#", // Direct download or internal view
  githubUrl: "https://github.com"
};

export const STAT_CARDS: StatCard[] = [
  {
    id: "univ",
    title: "University",
    text: "Xi'an Jiaotong University",
    subtext: "Bachelor of Architecture\n2022 - 2027",
    iconType: "university",
    bgColor: "bg-[#FFF8F1]",
    iconColor: "text-[#EE9E5A]"
  },
  {
    id: "gpa",
    title: "GPA",
    text: "87.14 / 100",
    subtext: "Academic Performance",
    iconType: "gpa",
    bgColor: "bg-[#FFFDF4]",
    iconColor: "text-[#EE9E5A]" // Yellowish accent
  },
  {
    id: "ielts",
    title: "IELTS",
    text: "7.0",
    subtext: "English Proficiency",
    iconType: "ielts",
    bgColor: "bg-[#F3F4FF]",
    iconColor: "text-[#7F83FF]"
  },
  {
    id: "focus",
    title: "Focus",
    text: "Frontend Engineering\nAI Products\nUI/UX Design",
    iconType: "focus",
    bgColor: "bg-[#FAF5FF]",
    iconColor: "text-[#A855F7]"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    num: "01",
    title: "Sensor-driven Responsive System",
    tags: ["Arduino", "Data Flow", "System Design"],
    description: "Designed a sensor-driven system that transforms environmental data into automated architectural behaviors.",
    image: "/images/sensor_system.jpg",
    circleColor: "bg-[#EDF0FE] text-[#7F83FF]",
    caseStudy: {
      overview: "An experimental responsive architectural capsule designed to interact dynamically with the local weather patterns, humidity levels, and human presence vectors via micro-sensor pipelines.",
      problem: "Traditional structures are static, resulting in microclimatic inefficiencies and lack of responsiveness to ambient user comfort metrics.",
      solution: "Developed an IoT-enabled responsive shell integrating real-time sensor loops. Designed custom data brokers handling micro-controller commands via reactive serial stream pipelines.",
      technologies: ["Arduino", "Node.js", "C++", "VPP", "Reactive Streams"],
      metrics: ["Reduced HVAC power drawdown by 28%", "Sub-50ms latency in kinetic flap responses", "Real-time visual telemetry overlay"]
    }
  },
  {
    id: "proj-2",
    num: "02",
    title: "Tuvalu Virtual City",
    tags: ["Gamification", "Interaction Design", "Virtual Systems"],
    description: "Created a game-based virtual city experience that increases public engagement with climate migration and cultural preservation.",
    image: "/images/tuvalu_city.jpg",
    circleColor: "bg-[#EEFDF4] text-[#4ADE80]",
    caseStudy: {
      overview: "An interactive architectural mapping model aimed at conveying information security, memory archives, and legal identity registries for sinking island nations like Tuvalu.",
      problem: "Rising sea levels threaten modern island heritage physically, risking loss of legal nation status and spatial memory.",
      solution: "Compiled high-resolution architectural overlays, point clouds, and regional data indices into a mobile-first portal with deep-dive asset visualizers.",
      technologies: ["UX Design", "Geographical Overlays", "Vite.js", "ThreeJS Renderer"],
      metrics: ["1:1 digital twin mapping modules", "Secured international architecture award recommendation", "Optimized mobile assets down to 2.4MB"]
    }
  },
  {
    id: "proj-3",
    num: "03",
    title: "Pet Memorial Platform",
    tags: ["UX Design", "Service Design", "Mobile Product"],
    description: "Designed a digital service platform improving transparency, emotional support and user experience during pet memorial services.",
    image: "/images/pet_memorial.jpg",
    circleColor: "bg-[#EBF7FF] text-[#38BDF8]",
    caseStudy: {
      overview: "A compassionate, feature-rich virtual space designed to help owners memorialize pets and share interactive, permanent memories. Note: The placeholder mock text originally references gamified climate cities due to design drafts.",
      problem: "Traditional pet memorial solutions are static text-based grids without visual engagement or room for community support.",
      solution: "Engineered a responsive, high-fidelity experience hosting interactive digital memory slots, virtual spaces, and compassionate community circles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Compassionate UI"],
      metrics: ["99.9% uptime for permanent storage", "Over 2,000 digital tributes created", "Direct intuitive mobile support"]
    }
  },
  {
    id: "proj-4",
    num: "04",
    title: "Peiligang Smart Museum",
    tags: ["UI Design", "Cultural", "Gamification"],
    description: "Redesigned museum experiences through task systems, achievements, and digital collection interactions.",
    image: "/images/peiligang_museum.jpg",
    circleColor: "bg-[#F3F4F6] text-[#4B5563]",
    caseStudy: {
      overview: "A transformative interactive experience tailored to the Neolithic Peiligang excavation site, engaging youngsters via tactile gamified challenges and digital reward repositories.",
      problem: "Neolithic cultures struggle to attract interest in traditional museums, appearing as abstract dust-covered pottery shards.",
      solution: "Crafted interactive task cards, dynamic archeology quizzes, tactile AR-guided reconstruction loops, and an achievements panel.",
      technologies: ["React", "HTML5 Canvas", "Lucide Vectors", "Gamification Engine"],
      metrics: ["Boosted overall youth museum dwell times by 42%", "Distributed 5,000+ collectible digital pottery seals", "Praised by cultural curators"]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Milan Design Week Project Leader",
    organization: "International Architecture Exhibition",
    period: "2026.5",
    description: "Led multidisciplinary teams across architecture, landscape, interior and digital experience design from concept to exhibition.",
    iconType: "drafting",
    bgColor: "bg-[#FFF0F3]",
    iconColor: "text-[#FF8A75]"
  },
  {
    id: "exp-2",
    title: "Campus History Lecturer",
    organization: "Student Academic Association",
    period: "2023 - Present",
    description: "Delivered 10+ public presentations and educational activities on campus.",
    iconType: "graduation",
    bgColor: "bg-[#FFF9EE]",
    iconColor: "text-[#EE9E5A]"
  },
  {
    id: "exp-3",
    title: "Founder & President of Badminton Club",
    organization: "Sports Confederation",
    period: "2022 - Present",
    description: "Built and managed a 100+ member student organization from scratch.",
    iconType: "badminton",
    bgColor: "bg-[#EFF1FE]",
    iconColor: "text-[#7F83FF]"
  }
];
