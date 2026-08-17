export interface ServiceGroup {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
  icon: string;
  image: {
    src: string;
    alt: string;
  };
}

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "residential",
    eyebrow: "Residential",
    title: "Residential Air Conditioning",
    summary:
      "Split-system and ducted installation, replacement, upgrades, servicing, repairs and performance checks.",
    items: [
      "Split-system installation and replacement",
      "Ducted air-conditioning installation",
      "Home air-conditioning upgrades",
      "Air-conditioning servicing",
      "Breakdown repairs and fault-finding",
      "Preventative maintenance",
      "Airflow and performance checks",
      "Energy-efficient replacement recommendations",
    ],
    icon: "home-2-linear",
    image: {
      src: "/images/residential.jpg",
      alt: "Modern Perth home at dusk with landscaped garden",
    },
  },
  {
    slug: "commercial",
    eyebrow: "Commercial",
    title: "Commercial HVAC",
    summary:
      "Planned and reactive maintenance, installations, equipment replacement, fault diagnosis, testing and commissioning.",
    items: [
      "Planned and reactive maintenance",
      "Commercial breakdown repairs",
      "Commercial HVAC installations",
      "Equipment replacement and upgrades",
      "Fault diagnosis and troubleshooting",
      "Equipment testing and commissioning",
      "Equipment condition inspections",
      "Commercial refrigeration services",
      "Central plant maintenance",
      "Ventilation and air-conditioning services",
      "Preventative maintenance programs",
    ],
    icon: "buildings-2-linear",
    image: {
      src: "/images/commercial.jpg",
      alt: "Insulated ductwork and air-handling units in a commercial plant room",
    },
  },
  {
    slug: "breakdown-repair",
    eyebrow: "Repair",
    title: "Breakdown & Repair",
    summary:
      "Fault-finding for cooling, heating, refrigeration, airflow, drainage, controls, noise and vibration issues.",
    items: [
      "Air-conditioning breakdowns",
      "Refrigeration faults",
      "Systems not heating or cooling correctly",
      "Airflow and temperature problems",
      "Water leaks and drainage issues",
      "Unusual noises or vibrations",
      "Equipment and control faults",
      "Repair and replacement recommendations",
    ],
    icon: "settings-linear",
    image: {
      src: "/images/repair.jpg",
      alt: "Manifold gauges connected to a split-system condenser during fault-finding",
    },
  },
  {
    slug: "preventative-maintenance",
    eyebrow: "Maintenance",
    title: "Preventative Maintenance",
    summary:
      "Scheduled servicing, filters, coils, drains, system performance checks, condition reporting and maintenance schedules.",
    items: [
      "Scheduled air-conditioning servicing",
      "Filter inspections and cleaning",
      "Coil inspections",
      "Drain and condensate checks",
      "System performance checks",
      "Equipment condition reporting",
      "Repair recommendations",
      "Residential and commercial maintenance schedules",
    ],
    icon: "snowflake-linear",
    image: {
      src: "/images/maintenance.jpg",
      alt: "Outdoor condenser unit coil detail in low light",
    },
  },
];
