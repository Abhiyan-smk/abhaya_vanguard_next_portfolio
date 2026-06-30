import type { LucideIcon } from "lucide-react";
import { Building2, DraftingCompass, Map, Waves, Mountain, Hammer, Mail, FileText, Linkedin, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  category: "GIS" | "Hydrology" | "Geotechnical" | "Transport" | "Structural";
  image: string;
  tools: string[];
  problem: string;
  action: string;
  result: string;
  keywords: string[];
};

export const profile = {
  name: "Abhaya Simkhada",
  role: "Civil Engineering Technology Graduate",
  location: "Toowoomba, Queensland",
  email: "abhaya123simkhada@gmail.com",
  phone: "0451 991 281",
  linkedin: "https://linkedin.com/in/abhaya-simkhada-57171b305",
  website: "https://abhayasimkhada.com",
  summary:
    "Civil Engineering Technology graduate specialising in GIS-based infrastructure planning, transport networks, stormwater analysis and local government infrastructure support."
};

export const roleFits = [
  {
    icon: Building2,
    title: "Graduate Civil Engineer",
    fit: "Best match",
    detail: "Infrastructure, transport, stormwater, documentation and consulting project support.",
    bullets: ["Technical reports", "Design support", "Engineering calculations"]
  },
  {
    icon: Map,
    title: "Transport / Planning Assistant",
    fit: "Strong match",
    detail: "Walking network planning, footpath scoring, bus stop data and active transport evidence.",
    bullets: ["GIS mapping", "Spatial data checks", "Infrastructure prioritisation"]
  },
  {
    icon: Waves,
    title: "Stormwater / Water Support",
    fit: "Strong match",
    detail: "Hydrology, rainfall analysis, routed hydrographs and drainage concept support.",
    bullets: ["ARR 2019", "RORB / Excel", "Drainage reports"]
  },
  {
    icon: DraftingCompass,
    title: "Civil Design / Project Support",
    fit: "Also suitable",
    detail: "Drawing review, quantity/cost awareness, project coordination and team communication.",
    bullets: ["AutoCAD", "Civil 3D exposure", "Stakeholder updates"]
  }
];

export const projects: Project[] = [
  {
    title: "USQ Campus Catchment Flood Management",
    category: "Hydrology",
    image: "/images/project-hydrology.png",
    tools: ["RORB", "ARR Data Hub", "Excel", "Technical report"],
    problem: "Urban catchment needed rainfall, discharge and drainage concept evidence.",
    action: "Estimated design rainfall, peak discharge and routed hydrographs, then documented a conceptual drainage network.",
    result: "Produced a standards-aligned hydrology workflow and report structure suitable for civil engineering review.",
    keywords: ["hydrology", "stormwater", "ARR 2019", "RORB", "drainage"]
  },
  {
    title: "Future Walking Network Plan 2024",
    category: "GIS",
    image: "/images/project-walking-network.png",
    tools: ["GIS", "Excel", "Intramaps", "Queensland Globe"],
    problem: "Council planning work required clear evidence for future walking network priorities.",
    action: "Checked spatial data, scored footpath priorities and mapped future pedestrian routes using proximity criteria.",
    result: "Supported active transport planning with organised GIS evidence and readable outputs.",
    keywords: ["GIS", "transport planning", "footpath network", "spatial analysis"]
  },
  {
    title: "Geology and Geomechanics Study",
    category: "Geotechnical",
    image: "/images/project-geotech.png",
    tools: ["Field mapping", "Atterberg limits", "Compaction", "Permeability"],
    problem: "Site conditions and soil/rock behaviour needed interpretation through field and lab evidence.",
    action: "Completed geological mapping, rock classification and core geotechnical laboratory tests.",
    result: "Built practical understanding of material behaviour, constraints and documentation requirements.",
    keywords: ["geotechnical", "field mapping", "lab testing", "soil classification"]
  },
  {
    title: "Transit-Oriented Car Park Design",
    category: "Transport",
    image: "/images/project-carpark.png",
    tools: ["Capstone", "ARR 2019", "Cost estimation", "Transit flow"],
    problem: "A scalable parking and transit concept needed flow, cost and stormwater considerations.",
    action: "Contributed to a concept for 500–2,000 vehicles/day with project planning and technical documentation.",
    result: "Delivered structured engineering support across design thinking, reporting and team coordination.",
    keywords: ["transport", "civil design", "stormwater", "cost estimation"]
  },
  {
    title: "Structural Truss Design and Testing",
    category: "Structural",
    image: "/images/project-truss.png",
    tools: ["AS 4100", "AS 1720", "Load testing", "Member forces"],
    problem: "A roof truss system needed design checks and physical load testing evidence.",
    action: "Designed, fabricated and tested truss systems while calculating member forces and limit-state checks.",
    result: "Demonstrated structural behaviour, failure modes and design documentation discipline.",
    keywords: ["structural", "truss", "load testing", "limit-state design"]
  }
];

export const evidenceCards = [
  {
    image: "/images/evidence-dashboard.png",
    label: "Work evidence",
    title: "Clear evidence structure",
    text: "Workplace evidence, project outputs, tools and metrics are grouped so employers can review experience quickly."
  },
  {
    image: "/images/evidence-gis.png",
    label: "GIS / transport",
    title: "Walking network prioritisation",
    text: "Spatial thinking behind footpath scoring, route mapping, infrastructure layers and practical council planning."
  },
  {
    image: "/images/evidence-hydrology.png",
    label: "Hydrology / stormwater",
    title: "Design hydrograph thinking",
    text: "Rainfall, peak discharge, routed hydrographs and conceptual stormwater outputs aligned with engineering standards."
  }
];

export const keywordCloud = [
  "Graduate Civil Engineer",
  "Civil Engineering",
  "Transport Planning",
  "GIS",
  "Spatial Analysis",
  "Infrastructure Planning",
  "Stormwater",
  "Hydrology",
  "Drainage",
  "ARR 2019",
  "RORB",
  "Excel",
  "AutoCAD",
  "Civil 3D",
  "Technical Reporting",
  "Footpath Network",
  "Walking Network",
  "Bus Stop Data",
  "Project Support",
  "Stakeholder Communication"
];

export const actions = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Website", href: profile.website, icon: ExternalLink }
];
