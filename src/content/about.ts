export const about = {
  overline: "About NCA HVAC",
  headline: ["Personal service.", "Direct accountability."],
  body: [
    "NCA HVAC is a Perth-based, family-run and owner-operated air-conditioning and refrigeration business servicing residential and commercial customers.",
    "Customers deal directly with the qualified technician responsible for assessing and completing the work, providing clear communication and accountability from enquiry through to completion.",
    "The owner brings over a decade of hands-on HVAC industry experience across residential and commercial systems. NCA HVAC is a new chapter built on that experience: honest advice, quality workmanship and long-term relationships with local customers.",
  ],
  image: {
    src: "/images/technician.jpg",
    alt: "Qualified technician standing beside wall-mounted equipment",
  },
} as const;

export const aboutPage = {
  values: [
    {
      icon: "user-check-linear",
      title: "Owner-operated",
      body: "The person who quotes the job is the person who turns up and does the work. No handoffs, no call centres.",
    },
    {
      icon: "chat-round-check-linear",
      title: "Direct communication",
      body: "You speak with the qualified technician responsible for the work, from first enquiry through to completion.",
    },
    {
      icon: "diploma-verified-linear",
      title: "Qualified & licensed",
      body: "Qualified, licensed and fully insured, with more than a decade of hands-on HVAC industry experience behind the owner.",
    },
    {
      icon: "hearts-linear",
      title: "Family-run, Perth-based",
      body: "A local family business focused on practical advice, quality workmanship and long-term relationships with the Perth community.",
    },
  ],
} as const;
