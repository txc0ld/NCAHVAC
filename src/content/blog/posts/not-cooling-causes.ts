import type { Post } from "../types";

export const post: Post = {
  slug: "air-conditioner-not-cooling-causes-and-fixes",
  title: "Air Conditioner Not Cooling? 9 Causes, What You Can Fix, and When to Call a Technician",
  description:
    "Air conditioner running but not cooling? Work through the 9 most common causes from dirty filters to refrigerant leaks and failed capacitors, with the fixes you can do yourself.",
  lede: "A diagnostic order that goes from the free fixes to the faults that need an ARC-licensed technician.",
  category: "Troubleshooting",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readingMinutes: 7,
  image: { src: "/images/repair.jpg", alt: "Technician testing an air conditioning outdoor unit with gauges" },
  answer:
    "If your air conditioner runs but does not cool, check the four free fixes first: the mode is set to cool and not fan or dry, the filters are clean, the outdoor unit is clear and its fan is spinning, and the setpoint is below room temperature. If those are fine and the air from the vents is not noticeably cold, the likely causes are low refrigerant from a leak, a frozen evaporator coil, a failed capacitor or contactor, or a dirty condenser coil. Those need a licensed technician.",
  keyTakeaways: [
    "Check mode, setpoint, filters and the outdoor unit before anything else. They account for a large share of no-cooling calls.",
    "Supply air should be 10 to 14 degrees colder than the room. Less than that with clean filters points to refrigerant or a mechanical fault.",
    "Ice on the pipes or indoor coil means switch it off and let it thaw; running it frozen can damage the compressor.",
    "Refrigerant is never used up. Low refrigerant means a leak that should be repaired, not just topped up.",
    "Outdoor fan not spinning while the compressor hums is usually a failed capacitor, a cheap part but a licensed-electrical job.",
  ],
  body: [
    { type: "h2", text: "First, a two-minute test" },
    {
      type: "p",
      text: "Set the system to cool at 20 degrees, fan on high, and wait ten minutes. Hold a thermometer, or your hand, at a supply vent and compare with the air at the return grille. A healthy refrigerated system delivers supply air roughly 10 to 14 degrees colder than the return air. If the vents are cold but the room stays warm, you have an airflow, sizing or heat-load problem. If the vents are barely cooler than the room, you have a refrigeration or mechanical problem.",
    },
    { type: "h2", text: "The 9 most common reasons an air conditioner stops cooling" },
    { type: "h3", text: "1. Wrong mode or setpoint" },
    {
      type: "p",
      text: "More common than anyone admits. Dry mode, fan mode and auto mode all blow air without necessarily cooling. Check the controller shows a snowflake or cool symbol and the setpoint is at least three degrees below the current room temperature. On ducted systems, also check the zone you are standing in is actually open.",
    },
    { type: "h3", text: "2. Dirty filters" },
    {
      type: "p",
      text: "A clogged filter starves the indoor coil of air. Cooling output drops, the coil can ice over, and the unit can trip on a protection fault. Wash the filters and let them dry before refitting. In Perth summers, filters need cleaning every two to four weeks in a busy household.",
    },
    { type: "h3", text: "3. Blocked or dirty outdoor unit" },
    {
      type: "p",
      text: "The outdoor unit rejects the heat pulled from the house. If its coil is packed with dust, grass or cobwebs, or it is hemmed in by a fence or bins, it cannot dump heat and the system loses capacity, most obviously on the hottest days. Clear at least 500 mm around it and gently hose the fins from the inside out. A chemical coil clean by a technician restores heavily fouled coils.",
    },
    { type: "h3", text: "4. Outdoor fan not running" },
    {
      type: "p",
      text: "If the outdoor unit hums or the compressor runs but the fan does not spin, the fan capacitor has usually failed. It is a small, cheap part, and one of the most common heatwave failures in Perth because capacitors degrade with heat. Switch the system off; a compressor running with no condenser fan overheats quickly. This is a licensed-electrical repair.",
    },
    { type: "h3", text: "5. Low refrigerant from a leak" },
    {
      type: "p",
      text: "Symptoms are gradual loss of cooling over weeks, ice on the small copper pipe or the indoor coil, a hissing sound and the system running non-stop. Refrigerant is a sealed charge; it does not get used up, so low refrigerant always means a leak. A technician with an ARC licence will pressure test, locate the leak, repair it and then recharge to the manufacturer's specification. Regassing without repairing the leak is a waste of money and, under Australian refrigerant handling rules, poor practice.",
    },
    { type: "h3", text: "6. Frozen evaporator coil" },
    {
      type: "p",
      text: "Ice on the indoor coil or the pipework is caused by low airflow, low refrigerant or running in cool mode when it is cold outside. Turn cooling off and run fan only for an hour or two to thaw it. If it refreezes with clean filters, the cause is refrigerant or a fan fault and needs a technician.",
    },
    { type: "h3", text: "7. Blocked condensate drain" },
    {
      type: "p",
      text: "Many units have a float switch that stops cooling when the drain pan fills. Water dripping from the indoor unit or pooling near the outdoor unit points to a blocked drain, usually from dust, mould or an insect nest. A technician flushes the drain and treats the pan. Ignored, this leads to ceiling and wall damage.",
    },
    { type: "h3", text: "8. Failed compressor, contactor or control board" },
    {
      type: "p",
      text: "If the indoor fan runs but the outdoor unit is completely silent, the contactor, control board or compressor may have failed, or the outdoor unit has lost power. Check the isolator switch next to the outdoor unit and the breaker in the switchboard. If they are on and the outdoor unit is dead, stop there and book a technician.",
    },
    { type: "h3", text: "9. The system is undersized or the heat load has changed" },
    {
      type: "p",
      text: "If the vents are cold but a west-facing room never gets below 28 on a 40 degree afternoon, the unit may simply be too small for the load, or the load has grown: new glazing, removed shade trees, a darker roof, more people. This is a design issue, not a fault. Shading, insulation, a larger unit or a second unit are the options.",
    },
    { type: "h2", text: "Quick diagnosis by symptom" },
    {
      type: "table",
      head: ["What you notice", "Most likely cause", "Who fixes it"],
      rows: [
        ["Blows air, not cold, unit sounds normal", "Mode, setpoint, dirty filter, low refrigerant", "You, then technician"],
        ["Cold at first, then warms up, ice on pipes", "Frozen coil from low airflow or low refrigerant", "Thaw, then technician"],
        ["Outdoor unit hums, fan not spinning", "Failed fan capacitor", "Technician"],
        ["Indoor fan runs, outdoor unit silent", "Isolator or breaker off, contactor, board or compressor", "Check switches, then technician"],
        ["Water dripping from indoor unit", "Blocked drain, float switch stopping cooling", "Technician"],
        ["Cools at night, cannot keep up on 40 degree days", "Undersized, dirty condenser, heat load", "Technician assessment"],
        ["Cools most rooms, one zone stays warm", "Failed zone damper or split duct", "Technician"],
        ["Musty smell with weak cooling", "Mould on coil and in drain pan, dirty filter", "Clean, then technician for coil treatment"],
      ],
    },
    { type: "h2", text: "When to call a technician" },
    {
      type: "ul",
      items: [
        "Any ice on the pipes or coil that comes back after thawing.",
        "The outdoor fan not running, or the outdoor unit silent while the indoor unit works.",
        "Water leaking indoors.",
        "A burning smell, tripping breaker or a unit that stops and restarts every few minutes.",
        "Supply air less than 8 degrees cooler than return air with clean filters.",
        "Any suspected refrigerant issue. Refrigerant handling requires an ARC licence in Australia.",
      ],
    },
    {
      type: "callout",
      title: "Heatwave etiquette that saves your compressor",
      text: "On a 40 degree day, do not keep restarting a system that has stopped cooling. Each failed start on a weak capacitor or low charge stresses the compressor, which is the one part that turns a $200 repair into a $2,000 replacement. Switch it off at the controller and the isolator, and call for a service.",
    },
  ],
  faqs: [
    {
      q: "Why is my air conditioner running but not blowing cold air?",
      a: "Most often the mode is wrong, the filters are dirty or the outdoor unit is blocked. If those are fine, the usual causes are low refrigerant from a leak, a frozen coil, or a failed outdoor fan capacitor. Compare the supply air with the room temperature; less than a 10 degree difference points to a refrigeration fault.",
    },
    {
      q: "Why does my air conditioner have ice on it?",
      a: "Ice forms when the coil gets too cold from low airflow or low refrigerant. Turn cooling off, run fan only to thaw, clean the filters and try again. If it refreezes, book a technician; running it frozen can damage the compressor.",
    },
    {
      q: "Can I regas my air conditioner myself?",
      a: "No. In Australia, handling refrigerant requires an Australian Refrigeration Council (ARC) licence. A licensed technician will also find and repair the leak rather than just topping up, which is the only fix that lasts.",
    },
    {
      q: "How much does it cost to fix an air conditioner that is not cooling?",
      a: "A capacitor replacement in Perth is usually $150 to $300. A drain flush $100 to $200. A refrigerant leak repair and recharge $400 to $900 depending on the leak location and refrigerant type. A compressor replacement can approach the cost of a new unit, which is why early diagnosis matters.",
    },
    {
      q: "Why does my air conditioner work at night but not during the day?",
      a: "That is a capacity problem rather than a fault. Either the outdoor coil is dirty and cannot reject heat in the afternoon, the system is undersized for the room, or the heat load through west-facing glass is too high. A condenser clean and a load check are the first steps.",
    },
  ],
  relatedServices: ["breakdown-repair", "preventative-maintenance"],
  related: [
    "pre-summer-air-conditioner-service-checklist-perth",
    "air-conditioning-running-costs-perth",
  ],
};
