import type { Post } from "../types";

export const post: Post = {
  slug: "reduce-commercial-hvac-energy-costs-perth",
  title: "How to Cut Commercial HVAC Energy Costs in a Perth Building: 10 Measures Ranked by Payback",
  description:
    "HVAC is often 40 percent of a Perth commercial building's electricity bill. Ten measures ranked by payback, from setpoints and scheduling to economy cycle, VSDs and demand charge management.",
  lede: "Ten measures ranked by payback for offices, retail, warehouses and multi-tenant buildings, with the Perth-specific detail on tariffs and demand charges.",
  category: "Commercial",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readingMinutes: 9,
  image: { src: "/images/planning.jpg", alt: "Technician reviewing building system data on a tablet" },
  answer:
    "The fastest savings on commercial HVAC energy in Perth come from operational changes that cost nothing: raise cooling setpoints to 24 degrees, tighten start and stop schedules to occupancy, and stop after-hours running. Next come low-cost maintenance measures, since dirty filters and coils can add 10 to 20 percent to consumption. Capital measures with two to five year paybacks include economy cycle on air handlers, variable speed drives on fans and pumps, and controls upgrades. Buildings on demand-based tariffs also save by managing peak demand, not just kilowatt-hours.",
  keyTakeaways: [
    "HVAC is commonly 40 percent or more of electricity use in a Perth office or retail building, so a 20 percent HVAC saving is an 8 percent cut to the whole bill.",
    "Setpoints, schedules and after-hours control are free and usually deliver the first 10 to 15 percent.",
    "Maintenance is the second lever. Clean coils and filters and correct refrigerant charge recover capacity you are already paying for.",
    "Perth business tariffs include demand charges. Reducing your 30-minute peak on a hot afternoon lowers the bill for the whole month.",
    "Economy cycle, VSDs and controls upgrades typically pay back in two to five years on plant that runs long hours.",
  ],
  body: [
    { type: "h2", text: "Start with how your building is billed" },
    {
      type: "p",
      text: "Most Perth businesses above the small-business threshold are on a Synergy or contestable-retailer tariff with two components: energy in cents per kilowatt-hour, often with peak and off-peak periods, and a demand charge based on your highest half-hour draw in the billing period. HVAC drives both. On a 40 degree February afternoon, every rooftop unit starting at once sets the demand peak that you pay for all month. Any measure that flattens that peak, such as staggered starts, pre-cooling before the peak window or locking out non-essential zones, saves money beyond the kilowatt-hours it avoids.",
    },
    { type: "h2", text: "The 10 measures, ranked by payback" },
    {
      type: "table",
      caption: "Indicative figures for Perth commercial buildings. Actual savings depend on plant type, hours of operation and current condition.",
      head: ["#", "Measure", "Typical HVAC saving", "Cost", "Payback"],
      rows: [
        ["1", "Raise cooling setpoint to 24 to 25 degrees, heating to 20 to 21", "5 to 10 percent per degree changed", "Nil", "Immediate"],
        ["2", "Match schedules to occupancy; stop after-hours operation", "10 to 20 percent", "Nil to low", "Immediate"],
        ["3", "Filter and coil cleaning programme", "5 to 15 percent", "Low", "Under 1 year"],
        ["4", "Refrigerant charge and leak repair", "5 to 10 percent on affected units", "Low to moderate", "Under 1 year"],
        ["5", "Sensor calibration and control tuning", "5 to 10 percent", "Low", "Under 1 year"],
        ["6", "Demand management: staggered starts, pre-cooling, load shedding", "Reduces demand charge 5 to 15 percent", "Low with existing BMS", "Under 1 year"],
        ["7", "Economy cycle (free cooling with outside air) on air handlers", "5 to 15 percent of cooling energy", "Moderate", "2 to 4 years"],
        ["8", "Variable speed drives on fans and pumps", "20 to 50 percent of fan and pump energy", "Moderate", "2 to 4 years"],
        ["9", "Controls or BMS upgrade with optimised start and zone control", "10 to 20 percent", "Moderate to high", "3 to 5 years"],
        ["10", "Replace ageing plant with high-efficiency inverter or VRF systems", "20 to 40 percent on replaced units", "High", "5 to 10 years, less if plant is failing"],
      ],
    },
    { type: "h2", text: "1 and 2: Setpoints and schedules" },
    {
      type: "p",
      text: "Each degree of cooling setpoint is worth roughly 5 to 10 percent of cooling energy. A building held at 22 degrees costs 15 to 25 percent more to cool than one held at 24, and most occupants cannot tell the difference once air movement is adequate. Set a deadband so heating and cooling never fight, typically cooling at 24 and heating at 20. Then look at schedules: plant that starts at 6 am for a 8:30 am occupancy and runs to 7 pm for staff who leave at 5:30 is common, and an optimised start that calculates the latest start time from outdoor and indoor temperature fixes it.",
    },
    { type: "h2", text: "3 to 5: Maintenance that pays for itself" },
    {
      type: "p",
      text: "Dirty filters and coils force fans and compressors to work harder for less output. A fouled condenser coil on a rooftop unit in a Perth summer can add 15 percent or more to its consumption while cutting its capacity. Low refrigerant charge from an unrepaired leak has the same effect. And a supply-air sensor reading two degrees low makes the whole system overcool. None of these show on an energy bill as a line item; they show as a building that costs more each year while comfort gets worse. A quarterly maintenance agreement is the vehicle for fixing all three.",
    },
    { type: "h2", text: "6: Demand management" },
    {
      type: "p",
      text: "If your tariff includes a demand charge, your bill is set by the worst half hour of the month. Three practical moves: stagger plant start times so compressors do not all start together; pre-cool the building before the afternoon peak window so plant can throttle back when the demand charge bites; and set the BMS or a simple load controller to shed non-critical zones, such as back-of-house and storage, when total demand approaches a threshold. Most sites with a BMS can do this with configuration rather than hardware.",
    },
    { type: "h2", text: "7 and 8: Economy cycle and variable speed drives" },
    {
      type: "p",
      text: "Perth has many hours in spring and autumn, and on summer mornings, when the outside air is cooler than the return air. An economy cycle opens the outside air dampers and cools with outside air instead of running compressors. Air handlers built without it, or with economisers that have seized, waste that free cooling. Variable speed drives on supply fans, condenser fans and chilled water pumps reduce power roughly with the cube of speed, so running a fan at 80 percent speed uses about half the energy. On plant that runs 3,000 hours a year, both measures typically pay back inside four years.",
    },
    { type: "h2", text: "9 and 10: Controls and replacement" },
    {
      type: "p",
      text: "A controls upgrade delivers optimised start, proper zoning, occupancy-based operation and remote monitoring. It is the measure that makes the others stick, because setpoints and schedules drift without it. Plant replacement is the biggest-ticket item, but if a 15 year old packaged unit is failing, the replacement decision is really a repair-versus-replace decision, and a modern inverter or VRF system at 20 to 40 percent lower consumption changes the payback. Ask for the Zoned Energy Rating figures for the hot climate zone when comparing options.",
    },
    { type: "h2", text: "A practical order of work for a Perth site" },
    {
      type: "ol",
      items: [
        "Pull 12 months of bills and note the demand charge and peak-period energy.",
        "Walk the building: check setpoints, schedules, filter condition, and which zones run after hours.",
        "Fix setpoints and schedules the same day.",
        "Book a full service and get a written condition report with priced defects.",
        "Configure demand management if you have a BMS.",
        "Evaluate economy cycle, VSDs and controls against the report and the bills.",
        "Re-check the bills after three months and after the first summer.",
      ],
    },
    {
      type: "callout",
      title: "Where to start if you only do one thing",
      text: "Get the plant serviced and the setpoints and schedules corrected before summer. In our experience across Perth commercial sites, that combination alone lands the first 10 to 20 percent, costs almost nothing, and produces the condition report you need to justify anything bigger.",
    },
  ],
  faqs: [
    {
      q: "What percentage of a commercial building's energy is HVAC?",
      a: "Commonly 40 percent or more of electricity use in Australian office and retail buildings, and higher in Perth's climate for buildings with long summer operating hours. That makes HVAC the largest single lever on the electricity bill.",
    },
    {
      q: "What is the most energy-efficient temperature for an office air conditioner?",
      a: "24 to 25 degrees for cooling and 20 to 21 for heating, with a deadband between so the two never fight. Each degree of cooling below 24 adds roughly 5 to 10 percent to cooling energy.",
    },
    {
      q: "What is a demand charge and how does HVAC affect it?",
      a: "A demand charge bills you for the highest half-hour power draw in the billing period, in addition to energy used. HVAC typically sets that peak on hot afternoons. Staggering starts, pre-cooling and shedding non-critical zones lowers the peak and therefore the charge.",
    },
    {
      q: "Is it cheaper to leave commercial air conditioning running overnight?",
      a: "Almost never. Overnight operation in an unoccupied building wastes energy and shortens plant life. An optimised start, which calculates the latest start time that still reaches setpoint by occupancy, gives the comfort without the overnight cost.",
    },
    {
      q: "Can NCA HVAC help reduce our building's HVAC running costs?",
      a: "Yes. NCA HVAC services commercial sites across Perth and can carry out a plant condition assessment, correct setpoints and schedules, complete maintenance that restores capacity, and advise on economy cycle, drives and replacement options with indicative paybacks.",
    },
  ],
  relatedServices: ["commercial", "preventative-maintenance"],
  related: [
    "commercial-hvac-maintenance-contract-perth-what-to-expect",
    "commercial-refrigeration-maintenance-perth-cafes-restaurants",
    "air-conditioning-running-costs-perth",
  ],
};
