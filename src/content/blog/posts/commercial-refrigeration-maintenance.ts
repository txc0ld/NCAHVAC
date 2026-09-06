import type { Post } from "../types";

export const post: Post = {
  slug: "commercial-refrigeration-maintenance-perth-cafes-restaurants",
  title: "Commercial Refrigeration Maintenance for Perth Cafes and Restaurants: How to Avoid Losing a Coolroom of Stock",
  description:
    "A maintenance plan for coolrooms, display fridges and freezers in Perth food businesses: food-safety temperatures, the checks that prevent summer failures, and what to do when a unit fails.",
  lede: "The maintenance routine that keeps coolrooms at temperature through Perth's summer and keeps a food-safety inspection boring.",
  category: "Commercial",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readingMinutes: 7,
  image: { src: "/images/commercial.jpg", alt: "Commercial refrigeration plant on a rooftop" },
  answer:
    "Commercial refrigeration in a Perth food business should be serviced at least quarterly, with condenser coils cleaned monthly in summer, door seals and temperatures checked daily, and a temperature log kept for food-safety compliance. Potentially hazardous food must be held at 5 degrees or below under the Food Standards Code, so coolrooms should run at 1 to 4 degrees and freezers at minus 18. Most summer coolroom failures trace back to a dirty condenser, a worn door seal or a refrigerant leak that showed warning signs weeks earlier.",
  keyTakeaways: [
    "Under FSANZ Standard 3.2.2, potentially hazardous food must be kept at 5 degrees or below. A coolroom drifting to 7 is a compliance problem before it is a stock problem.",
    "Clean condenser coils monthly in summer. A blocked condenser is the number one cause of Perth coolroom failures in January.",
    "Check door seals and door closers daily. A leaking seal makes the compressor run continuously and ices the evaporator.",
    "Log temperatures at least twice a day. Health inspectors ask for the log; a rising trend also gives you days of warning before a failure.",
    "Have a plan for a failure: a backup unit, an emergency call-out number and a stock-transfer arrangement.",
  ],
  body: [
    { type: "h2", text: "What temperature should a commercial coolroom be?" },
    {
      type: "p",
      text: "Set coolrooms to 1 to 4 degrees so the product stays at or below 5 degrees after door openings and restocking. Set freezers to minus 18 or lower. Display fridges for dairy, meat and prepared food also need to hold 5 degrees or below at the product, not just at the air sensor; the top shelf of an open display case on a hot afternoon is the usual place a probe finds 8 degrees.",
    },
    {
      type: "p",
      text: "The 5 degree limit comes from Standard 3.2.2 of the Australia New Zealand Food Standards Code, which Western Australian local governments enforce through their environmental health officers. The Code allows short excursions above 5 degrees during handling if the food is not held there for extended periods, which is why a temperature log matters: it shows an inspector that a reading of 6 at 2 pm was a restocking blip, not the daily state.",
    },
    { type: "h2", text: "Why commercial refrigeration fails in a Perth summer" },
    {
      type: "p",
      text: "Refrigeration rejects heat to the air around the condenser. In a Perth kitchen or a rooftop plant area in January, that air can be 40 to 50 degrees. Every degree of ambient temperature raises the condensing pressure, lengthens run time and pushes the compressor closer to its limit. Add a condenser coil furred with kitchen grease and dust, and the system loses capacity exactly when the load peaks. Most failures we attend in summer are a compressor that has been running flat out for weeks against a dirty coil.",
    },
    {
      type: "ul",
      items: [
        "Dirty or blocked condenser coils, especially in kitchens with fryers.",
        "Worn door gaskets and failed door closers letting warm, humid air in.",
        "Refrigerant leaks, often at flare fittings and vibrating pipework.",
        "Iced evaporators from failed defrost heaters, timers or a door left open.",
        "Failed fan motors and capacitors, which degrade with heat.",
        "Condenser fans blocked by cardboard, stock or a new wall.",
        "Overloading a coolroom with warm deliveries all at once.",
      ],
    },
    { type: "h2", text: "A maintenance schedule that works" },
    {
      type: "table",
      caption: "Daily and weekly checks are staff tasks. Monthly and quarterly tasks are for a refrigeration technician holding an ARC licence.",
      head: ["Frequency", "Task", "Who"],
      rows: [
        ["Daily", "Record temperatures for every unit at opening and mid-afternoon; check doors close and seal", "Staff"],
        ["Daily", "Confirm nothing blocks evaporator fans or the return-air path inside the coolroom", "Staff"],
        ["Weekly", "Wipe door gaskets, check for tears; clear drain trays; listen for new noises", "Staff"],
        ["Monthly (summer)", "Clean condenser coils; check condenser fan operation and airflow clearance", "Technician or trained staff"],
        ["Quarterly", "Full service: refrigerant charge and leak check, electrical test, defrost cycle test, evaporator clean, controller calibration, door closer adjustment", "Technician"],
        ["Annually", "Compressor amperage and oil check, contactor and capacitor replacement as needed, pipework and insulation inspection, calibrate temperature probes against a reference thermometer", "Technician"],
      ],
    },
    { type: "h2", text: "Warning signs that a failure is weeks away" },
    {
      type: "p",
      text: "Refrigeration rarely fails without warning. The log is your early-warning system. Watch for a coolroom that used to sit at 2 degrees now sitting at 4; a compressor that runs continuously through the afternoon; frost building on the evaporator between defrosts; water on the floor from a drain that used to stay dry; and any new rattle, hum or click from the plant. Each of these is a service call in the next week, not a note for the next quarterly visit.",
    },
    { type: "h2", text: "What to do when a coolroom fails" },
    {
      type: "howto",
      name: "Coolroom failure response",
      steps: [
        {
          name: "Keep the door shut and start the clock",
          text: "A full, closed coolroom holds temperature for two to four hours. Note the time and the current product temperature with a probe thermometer.",
        },
        {
          name: "Check the simple things",
          text: "Isolator and breaker on, condenser fan spinning, nothing blocking the condenser, door fully closed, controller not in defrost or a manual off state.",
        },
        {
          name: "Call for emergency service",
          text: "Give the technician the unit type, the symptom and the time it started. A capacitor or fan motor is often fixed on the first visit.",
        },
        {
          name: "Move stock before the 5 degree line",
          text: "If product reaches 5 degrees and repair is not imminent, transfer to another unit, a hired cool trailer or a neighbouring business. Food that has been above 5 degrees for more than four hours in total must be discarded under the Code's 2 hour, 4 hour rule.",
        },
        {
          name: "Record everything",
          text: "Times, temperatures and actions. It protects you with the health inspector and supports any insurance claim for stock loss.",
        },
      ],
    },
    { type: "h2", text: "How much does commercial refrigeration maintenance cost in Perth?" },
    {
      type: "p",
      text: "A quarterly service on a single coolroom or a small group of display fridges typically costs $200 to $450 per visit in Perth, with annual maintenance agreements priced lower per visit and usually including priority emergency response. Against the value of a coolroom of stock, a lost trading day and a food-safety notice, a maintenance agreement is inexpensive insurance.",
    },
    {
      type: "callout",
      title: "Refrigerant handling is licensed work",
      text: "Any work involving refrigerant on commercial equipment must be done by a technician holding an Australian Refrigeration Council (ARC) licence. Ask for the licence number, and expect leak repair rather than repeated regassing; refrigerant loss is both a running-cost problem and a regulated emissions issue.",
    },
  ],
  faqs: [
    {
      q: "How often should commercial refrigeration be serviced?",
      a: "At least quarterly for a food business, with monthly condenser cleaning through summer and daily temperature and door checks by staff. High-load kitchens with fryers near the plant often need condenser cleaning every two to three weeks in January and February.",
    },
    {
      q: "What is the legal temperature for a commercial fridge in Australia?",
      a: "Potentially hazardous food must be kept at 5 degrees or below, or 60 degrees or above, under Standard 3.2.2 of the Food Standards Code. Frozen food must be kept frozen. Set coolrooms to 1 to 4 degrees to stay compliant after door openings.",
    },
    {
      q: "How long will a coolroom stay cold if it fails?",
      a: "A full, closed coolroom usually holds safe temperature for two to four hours; a half-empty one, less. Keep the door shut, probe the product, and start moving stock once it approaches 5 degrees.",
    },
    {
      q: "Why does my coolroom keep icing up?",
      a: "Usually warm humid air entering through a worn door seal, a door left open, or a failed defrost heater or timer. Ice on the evaporator blocks airflow, so the room warms while the compressor runs continuously. A technician can fix the seal or defrost fault quickly; ignoring it leads to a compressor failure.",
    },
    {
      q: "Do you offer emergency commercial refrigeration repairs in Perth?",
      a: "Yes. NCA HVAC services commercial refrigeration across the Perth metropolitan area, including coolrooms, freezer rooms, display cabinets and under-bench units. Maintenance agreement customers get priority response.",
    },
  ],
  relatedServices: ["commercial"],
  related: [
    "pre-summer-air-conditioner-service-checklist-perth",
    "air-conditioner-not-cooling-causes-and-fixes",
  ],
};
