import type { Post } from "../types";

export const post: Post = {
  slug: "air-conditioning-running-costs-perth",
  title: "How Much Does Air Conditioning Cost to Run in Perth? (2026 Figures)",
  description:
    "Real per-hour and per-summer running costs for split, ducted and evaporative air conditioning in Perth at Synergy's 2026 tariff, with the settings that cut the bill most.",
  lede: "Per-hour and per-summer numbers for split, ducted and evaporative systems, worked at Perth's actual electricity tariff.",
  category: "Running costs",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readingMinutes: 7,
  image: { src: "/images/planning.jpg", alt: "Technician reviewing system specifications on a tablet" },
  answer:
    "In Perth, a 2.5 kW bedroom split system costs about 20 to 25 cents per hour to run, a 7 kW living-area split about 55 to 70 cents per hour, and a 14 kW ducted system with all zones open about $1.30 to $1.60 per hour, all at Synergy's residential tariff of roughly 32 cents per kilowatt-hour. A typical Perth household spends $250 to $600 on cooling over a summer, and the biggest savings come from setting 24 to 25 degrees, closing zones you are not using and keeping filters clean.",
  keyTakeaways: [
    "Running cost = power draw (kW) × hours × tariff (about $0.32 per kWh in Perth).",
    "A 2.5 kW split: roughly 20 to 25 cents an hour. A 7 kW split: 55 to 70 cents. A 14 kW ducted, all zones: $1.30 to $1.60.",
    "Every degree below 24 adds roughly 5 to 10 percent to the cooling bill.",
    "A dirty filter can add 10 to 15 percent. An annual service usually pays for itself.",
    "Evaporative coolers cost 10 to 20 cents an hour to run but only work well on dry days.",
  ],
  body: [
    { type: "h2", text: "How to work out what your air conditioner costs per hour" },
    {
      type: "p",
      text: "Multiply the unit's power input in kilowatts by the hours it runs, then by your electricity tariff. The number you need is power input, not cooling capacity. A 7 kW split system does not draw 7 kW; it draws roughly 1.8 to 2.2 kW while cooling because the refrigeration cycle moves about three units of heat for every unit of electricity. The input figure is printed on the compliance plate on the outdoor unit and on the energy rating label.",
    },
    {
      type: "p",
      text: "Our figures below use Synergy's A1 Home Plan rate, which is about 32 cents per kilowatt-hour including GST for 2025 to 2026. Check the rate on your latest bill and substitute it; the method is the same.",
    },
    { type: "h2", text: "Air conditioning running costs in Perth by system type" },
    {
      type: "table",
      caption: "Steady-state figures at 32 c/kWh. Inverter systems draw less once the room reaches temperature, so a full day averages below the peak figure.",
      head: ["System", "Typical power input", "Cost per hour", "Cost for 6 hours a day, 90 days"],
      rows: [
        ["2.5 kW split (bedroom)", "0.6 to 0.8 kW", "$0.19 to $0.26", "$105 to $140"],
        ["5 kW split (large bedroom, small living)", "1.3 to 1.6 kW", "$0.42 to $0.51", "$225 to $275"],
        ["7 kW split (open-plan living)", "1.8 to 2.2 kW", "$0.58 to $0.70", "$310 to $380"],
        ["14 kW ducted, 2 zones open", "2.0 to 2.8 kW", "$0.64 to $0.90", "$345 to $485"],
        ["14 kW ducted, all zones open", "4.0 to 5.0 kW", "$1.28 to $1.60", "$690 to $865"],
        ["18 kW ducted, all zones open", "5.0 to 6.5 kW", "$1.60 to $2.08", "$865 to $1,125"],
        ["Ducted evaporative", "0.3 to 0.6 kW", "$0.10 to $0.19", "$50 to $105 plus water"],
      ],
    },
    {
      type: "p",
      text: "The 6 hours a day for 90 days scenario is a realistic Perth summer of afternoon and evening use from December to February. Households that run cooling overnight, or that work from home, should roughly double the seasonal figure. Households that only use it on heatwave days will land well below it.",
    },
    { type: "h2", text: "What does it cost to run air conditioning all day in Perth?" },
    {
      type: "p",
      text: "A 7 kW split running 12 hours on a 38 degree day costs about $5 to $8, because an inverter unit throttles back once the room is at temperature. A 14 kW ducted system with every zone open for 12 hours on the same day costs about $12 to $19. On a mild 30 degree day both figures drop by a third or more, since the system spends most of the time idling.",
    },
    { type: "h2", text: "Is it cheaper to leave the air conditioner on all day?" },
    {
      type: "p",
      text: "Usually not. Leaving a system on all day in an empty house costs more than switching it on when you get home, even allowing for the pull-down surge. The exception is a well-insulated home on a very hot day, where holding 26 degrees from midday can cost about the same as pulling the house down from 34 at 5 pm and is far more comfortable. A schedule that starts the system 30 to 45 minutes before you arrive gives most of the comfort at a fraction of the all-day cost.",
    },
    { type: "h2", text: "What temperature is cheapest to set the air conditioner to?" },
    {
      type: "p",
      text: "Set 24 to 25 degrees for cooling. Each degree lower adds roughly 5 to 10 percent to the running cost, so 20 degrees costs around 30 to 40 percent more than 24 for the same room. The system does not cool faster at a lower setpoint; it just runs longer. For heating in winter, 18 to 20 degrees is the equivalent efficient band.",
    },
    { type: "h2", text: "Six things that cut a Perth cooling bill" },
    {
      type: "ol",
      items: [
        "Close zones and doors. On a ducted system, every open zone is a room you are paying to cool. Cool the rooms you are in.",
        "Clean the filters every two to four weeks in summer. A clogged filter restricts airflow and can add 10 to 15 percent to power draw while cooling less.",
        "Shade west-facing glass. Perth's afternoon sun through an unshaded west window can add a kilowatt of heat load on its own. External blinds or awnings outperform internal curtains.",
        "Use the fan and the aircon together. A ceiling fan lets you set the aircon 2 degrees higher for the same felt comfort, which is a 10 to 20 percent saving.",
        "Pre-cool before peak. If you are on a time-of-use tariff, cooling the house before 3 pm and coasting through the peak window is materially cheaper.",
        "Get it serviced before summer. Low refrigerant, dirty coils and failing capacitors all push power draw up and capacity down. See our pre-summer checklist.",
      ],
    },
    { type: "h2", text: "Does evaporative cooling cost less to run than refrigerated?" },
    {
      type: "p",
      text: "Per hour, yes: an evaporative unit draws only a fan and a small pump, so 10 to 20 cents an hour is typical, plus roughly 20 to 30 litres of water an hour, which is a few cents. The catch is that evaporative cooling only lowers the temperature by 8 to 12 degrees on a dry day and far less on a humid one, and it cannot heat. On the days Perth most needs cooling, a sea-breeze afternoon at 60 percent humidity, it often fails to keep up. Our evaporative vs refrigerated guide covers when each makes sense.",
    },
    {
      type: "callout",
      title: "Why your bill may not match these numbers",
      text: "Real-world draw depends on insulation, glazing, orientation, how often doors open and the outdoor temperature. A system that is undersized runs flat out and costs more than these figures; one that is oversized short-cycles and also costs more. If your summer bills look far above this table for your system size, a service and a load check usually find the reason.",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to run a split system for 8 hours?",
      a: "About $1.50 to $2 for a 2.5 kW bedroom unit and $4.50 to $5.50 for a 7 kW living-area unit at Perth's roughly 32 cent tariff, assuming a hot day and a normal setpoint of 24 degrees. Mild days and inverter throttling bring those figures down.",
    },
    {
      q: "How much does ducted air conditioning cost per month in Perth?",
      a: "For a 14 kW ducted system used six hours a day with two or three zones open, expect $20 to $30 a month in the shoulder seasons and $90 to $150 a month in December to February. Running every zone all day in summer can push a month past $300.",
    },
    {
      q: "Does a dirty filter really increase power use?",
      a: "Yes. Restricted airflow makes the compressor work harder for less cooling. Manufacturers and energy agencies commonly quote 5 to 15 percent higher consumption from neglected filters, and the cooling output drops at the same time.",
    },
    {
      q: "What is the most energy-efficient air conditioner for Perth?",
      a: "Compare the Zoned Energy Rating Label for the hot climate zone rather than the old national star rating, since it reflects Perth-like summers. Among like-for-like sizes, higher-tier inverter splits from the major Japanese brands generally lead the efficiency tables.",
    },
  ],
  relatedServices: ["residential", "preventative-maintenance"],
  related: [
    "ducted-vs-split-system-air-conditioning-perth",
    "evaporative-vs-refrigerated-air-conditioning-perth",
    "pre-summer-air-conditioner-service-checklist-perth",
  ],
};
