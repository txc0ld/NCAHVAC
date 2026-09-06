import type { Post } from "../types";

export const post: Post = {
  slug: "evaporative-vs-refrigerated-air-conditioning-perth",
  title: "Evaporative vs Refrigerated Air Conditioning in Perth: What Actually Works in a Perth Summer",
  description:
    "Evaporative or refrigerated for Perth? Compare how each performs on dry easterly days versus humid sea-breeze afternoons, running cost, water use, heating and resale.",
  lede: "Perth is one of the few Australian cities where this is a genuine question. Here is how each performs on the days that matter.",
  category: "Buying guide",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readingMinutes: 7,
  image: { src: "/images/hero.jpg", alt: "Close-up of an air conditioning condenser grille" },
  answer:
    "Refrigerated reverse-cycle is the better choice for most Perth homes because it cools reliably on every day of summer, including humid sea-breeze afternoons, and it heats in winter. Evaporative cooling costs a quarter to a third as much to run and suits Perth's dry easterly days well, but it loses effectiveness above about 50 percent humidity, cannot heat, needs windows open, and struggles in the coastal suburbs where the Fremantle Doctor arrives most afternoons.",
  keyTakeaways: [
    "Evaporative works by adding moisture to air. It performs best when the air is dry and poorly when humidity is already high.",
    "Perth's hottest days are often dry easterlies, where evaporative shines, but the afternoon sea breeze raises humidity and cuts its output.",
    "Refrigerated costs three to four times more per hour to run but delivers a set temperature regardless of humidity and also heats.",
    "Evaporative cannot be used with the house closed up and does not filter pollen or smoke effectively.",
    "In Perth's eastern suburbs and hills, evaporative is a defensible choice. West of the freeway, refrigerated is usually the right call.",
  ],
  body: [
    { type: "h2", text: "How each system cools" },
    {
      type: "p",
      text: "An evaporative cooler pulls hot outside air through wet filter pads. Water evaporates into the air, absorbing heat, and a large fan pushes the cooled, humidified air through ceiling ducts. The air must escape through open windows or doors, so the house is under slight positive pressure and constantly flushed with outside air.",
    },
    {
      type: "p",
      text: "A refrigerated system, whether split or ducted reverse-cycle, moves heat from inside the house to the outdoor unit using a refrigerant cycle. It recirculates indoor air, dehumidifies as it cools, holds a set temperature, and reverses in winter to heat.",
    },
    { type: "h2", text: "Why humidity decides it in Perth" },
    {
      type: "p",
      text: "Evaporative cooling can only lower air temperature toward the wet-bulb temperature, which depends on humidity. At 38 degrees and 20 percent humidity, a typical dry Perth easterly, a good evaporative unit delivers air around 24 to 26 degrees, which feels excellent. At 32 degrees and 60 percent humidity, a classic afternoon after the sea breeze comes in, the same unit delivers air around 27 to 28 degrees while adding more moisture to an already sticky room.",
    },
    {
      type: "p",
      text: "Perth's summer pattern is a hot, dry morning with easterly winds followed, on most days, by the south-westerly sea breeze in the afternoon. Coastal suburbs from Fremantle to Joondalup get the breeze earlier and more humidly. Suburbs east of the Darling Scarp and out toward Midland and the hills stay drier for longer. That geography, more than anything else, decides whether evaporative will satisfy you.",
    },
    { type: "h2", text: "Evaporative vs refrigerated: comparison for Perth" },
    {
      type: "table",
      head: ["Factor", "Evaporative", "Refrigerated reverse-cycle"],
      rows: [
        ["Cooling on dry 38 degree easterly", "Very good", "Very good"],
        ["Cooling on humid sea-breeze afternoon", "Poor to fair", "Very good"],
        ["Temperature control", "No setpoint; depends on outside conditions", "Holds a set temperature"],
        ["Heating in winter", "None", "Yes, efficient reverse-cycle heating"],
        ["Running cost per hour (ducted, whole home)", "$0.10 to $0.20 plus 20 to 30 L water", "$1.30 to $2.00 with all zones open"],
        ["Installed cost (whole home)", "$4,000 to $7,000", "$8,000 to $15,000"],
        ["Windows and doors", "Must be open", "Must be closed"],
        ["Air quality", "Brings in outside air, pollen and smoke", "Filters recirculated air; better for allergies"],
        ["Maintenance", "Pad replacement every 3 to 5 years, water treatment, winter cover", "Annual service, filter cleaning"],
        ["Bushfire smoke and dust days", "Unsuitable", "Fine"],
        ["Resale appeal in Perth", "Neutral to slightly negative", "Positive"],
      ],
    },
    { type: "h2", text: "Running cost: the case for evaporative" },
    {
      type: "p",
      text: "This is where evaporative wins clearly. A ducted evaporative cooler draws only a fan motor and a small pump, typically 300 to 600 watts, which is 10 to 20 cents an hour at Perth's tariff. It also uses 20 to 30 litres of water an hour on a hot day, which is only a few cents but adds up to several kilolitres over a summer. A ducted refrigerated system cooling the whole house draws 4 to 6 kW, which is $1.30 to $2.00 an hour. Over a summer of heavy use, the difference can be several hundred dollars.",
    },
    {
      type: "p",
      text: "That gap narrows when refrigerated is zoned properly. Cooling two rooms on a ducted refrigerated system, or running a single split, costs 40 to 70 cents an hour. And evaporative has no winter benefit, so a home with evaporative cooling still needs a separate heating solution.",
    },
    { type: "h2", text: "Comfort: the case for refrigerated" },
    {
      type: "p",
      text: "Refrigerated cooling delivers the temperature you set, with lower humidity, every day of summer. Evaporative delivers whatever the outside air allows, and on the sticky days you cannot tighten it further. Refrigerated lets you shut the house up, which also keeps out dust, pollen and bushfire smoke. Evaporative requires open windows, which brings all three in and makes security a consideration overnight.",
    },
    { type: "h2", text: "Who should choose evaporative in Perth" },
    {
      type: "ul",
      items: [
        "Homes in the eastern suburbs, foothills and hills where afternoon humidity stays lower.",
        "Households that prioritise running cost over guaranteed comfort on the worst days.",
        "Larger, older homes with high ceilings and good cross-ventilation that suit flushing with outside air.",
        "Anyone who already has separate heating, such as a wood heater or gas, and only needs summer cooling.",
      ],
    },
    { type: "h2", text: "Who should choose refrigerated" },
    {
      type: "ul",
      items: [
        "Coastal and western suburbs where the sea breeze arrives early and humid.",
        "Anyone who wants heating from the same system.",
        "Allergy and asthma households, and anyone affected by smoke or dust days.",
        "Homes where windows must stay closed for security, noise or a pool fence.",
        "Owners thinking about resale in the next decade.",
      ],
    },
    {
      type: "callout",
      title: "Replacing an old evaporative unit?",
      text: "Many Perth homes built in the 1990s and 2000s have an ageing evaporative unit on the roof. Replacing it like for like is the cheapest option. Replacing it with ducted reverse-cycle usually reuses the ceiling vents' positions but needs new insulated ducting and a roof-space fan-coil, plus a dedicated circuit. Ask for both quotes; the running cost and comfort difference over ten years is what should decide it.",
    },
  ],
  faqs: [
    {
      q: "Does evaporative cooling work in Perth?",
      a: "Yes on dry days, which Perth has plenty of, and poorly on humid days, which Perth's coastal suburbs get most summer afternoons once the sea breeze arrives. It works best east of the coastal plain and in homes where windows can stay open.",
    },
    {
      q: "Is evaporative cooling cheaper than air conditioning?",
      a: "Much cheaper to run, at roughly 10 to 20 cents an hour against $1.30 to $2.00 for whole-home refrigerated cooling, and cheaper to install. It is not cheaper if you also need heating, since it provides none.",
    },
    {
      q: "Can you run evaporative cooling with windows closed?",
      a: "No. The cooled air must exit the house or the unit just raises humidity and pressure. Windows or doors need to be open in the rooms you are cooling, which affects security, noise and dust.",
    },
    {
      q: "Which is better for allergies, evaporative or refrigerated?",
      a: "Refrigerated. It recirculates and filters indoor air and lowers humidity, which limits mould and dust mites. Evaporative brings in outside air with its pollen and humidifies the house.",
    },
    {
      q: "How much water does an evaporative air conditioner use?",
      a: "Roughly 20 to 30 litres an hour on a hot day, plus periodic dump cycles to flush salts. Over a Perth summer that is typically several kilolitres, a small cost in dollars but worth knowing in a dry climate.",
    },
  ],
  relatedServices: ["residential"],
  related: [
    "ducted-vs-split-system-air-conditioning-perth",
    "air-conditioning-running-costs-perth",
  ],
};
