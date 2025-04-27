import { COEFFS } from "../components/CoeffTable"
export const mapping = {
  season: { 1: 'Spring', 2: 'Summer', 3: 'Fall', 4: 'Winter' },
  holiday: { 0: 'No', 1: 'Yes' },
  weathersit: {
    1: 'Clear / Few Clouds / Partly Cloudy',
    2: 'Mist / Cloudy',
    3: 'Light Snow / Light Rain',
    4: 'Heavy Rain / Snow / Fog'
  },
  event: { 0: 'No Special Event', 1: 'Special Event' }
}

// Guided example rows (now 8)
// export const exampleRows = [
//   { date: '2024-05-20', season: 2, holiday: 0, weathersit: 1, temp: 28, humidity: 60, windspeed: 12, event: 0, pred: 550, tips: 'Clear warm day boosts rentals.', actual: 560 },
//   { date: '2024-12-24', season: 4, holiday: 1, weathersit: 2, temp: 5, humidity: 72, windspeed: 18, event: 1, pred: 200, tips: 'Holiday & mist reduce demand.', actual: 190 },
//   { date: '2024-09-10', season: 3, holiday: 0, weathersit: 3, temp: 18, humidity: 80, windspeed: 10, event: 0, pred: 320, tips: 'Light rain expected, slight drop.', actual: 300 },
//   { date: '2024-07-04', season: 2, holiday: 1, weathersit: 1, temp: 30, humidity: 55, windspeed: 14, event: 1, pred: 620, tips: 'Independence Day spikes trips.', actual: 650 },
//   { date: '2024-03-15', season: 1, holiday: 0, weathersit: 2, temp: 12, humidity: 68, windspeed: 20, event: 0, pred: 260, tips: 'Early spring moderate demand.', actual: 255 },
//   // added examples
//   { date: '2024-10-05', season: 3, holiday: 0, weathersit: 1, temp: 20, humidity: 58, windspeed: 13, event: 0, pred: 400, tips: 'Crisp fall weather increases rides.', actual: 410 },
//   { date: '2024-06-01', season: 2, holiday: 0, weathersit: 1, temp: 26, humidity: 50, windspeed: 9, event: 0, pred: 570, tips: 'Early summer sunshine peak demand.', actual: 565 },
//   { date: '2024-11-25', season: 4, holiday: 1, weathersit: 3, temp: 7, humidity: 85, windspeed: 15, event: 1, pred: 180, tips: 'Pre‑holiday rainy day dampens demand.', actual: 170 }
// ]

// // Main task rows (unchanged)
// export const taskRows = [
//   { date: '2024-06-15', season: 2, holiday: 0, weathersit: 1, temp: 27, humidity: 58, windspeed: 11, event: 0, pred: 540, tips: 'Warm & clear good demand.' },
//   { date: '2024-11-01', season: 4, holiday: 0, weathersit: 2, temp: 9, humidity: 70, windspeed: 16, event: 0, pred: 230, tips: 'Cool & mist moderate demand.' },
//   { date: '2024-10-31', season: 4, holiday: 1, weathersit: 3, temp: 8, humidity: 78, windspeed: 17, event: 1, pred: 210, tips: 'Halloween event but rain.' },
//   { date: '2024-02-10', season: 1, holiday: 0, weathersit: 3, temp: 2, humidity: 90, windspeed: 22, event: 0, pred: 120, tips: 'Cold & snow decreases trips.' },
//   { date: '2024-08-20', season: 2, holiday: 0, weathersit: 1, temp: 29, humidity: 60, windspeed: 12, event: 0, pred: 580, tips: 'Sunny summer high demand.' },
// ]


export const exampleRows = [
  {
    date: "2024-05-20",
    season: 2,
    holiday: 0,
    weathersit: 1,
    temp: 28,
    humidity: 60,
    windspeed: 12,
    event: 0,
    pred: 550,
    tips:
      "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×28=20.049; -2.999312×60=-179.959; 0.807972×12=9.696; 32.919399×0=0.000; total=-96.904",
    actual: 560
  },
  {
    date: "2024-12-24",
    season: 4,
    holiday: 1,
    weathersit: 2,
    temp: 5,
    humidity: 72,
    windspeed: 18,
    event: 1,
    pred: 200,
    tips:
      "22.949566×4=91.798; -8.811922×1=-8.812; 7.431437×2=14.863; 0.715318×5=3.577; -2.999312×72=-215.950; 0.807972×18=14.543; 32.919399×1=32.919; total=-67.062",
    actual: 190
  },
  {
    date: "2024-09-10",
    season: 3,
    holiday: 0,
    weathersit: 3,
    temp: 18,
    humidity: 80,
    windspeed: 10,
    event: 0,
    pred: 320,
    tips:
      "22.949566×3=68.849; -8.811922×0=0.000; 7.431437×3=22.294; 0.715318×18=12.876; -2.999312×80=-239.945; 0.807972×10=8.080; 32.919399×0=0.000; total=-127.847",
    actual: 300
  },
  {
    date: "2024-07-04",
    season: 2,
    holiday: 1,
    weathersit: 1,
    temp: 30,
    humidity: 55,
    windspeed: 14,
    event: 1,
    eventName: "Global Harmony Benefit Concert, Wembley Stadium, London (capacity ≈ 90 000)",
    pred: 620,
    tips:
      "22.949566×2=45.899; -8.811922×1=-8.812; 7.431437×1=7.431; 0.715318×30=21.459; -2.999312×55=-164.962; 0.807972×14=11.312; 32.919399×1=32.919; total=-54.753",
    actual: 650
  },
  {
    date: "2024-03-15",
    season: 1,
    holiday: 0,
    weathersit: 2,
    temp: 12,
    humidity: 68,
    windspeed: 20,
    event: 0,
    pred: 260,
    tips:
      "22.949566×1=22.950; -8.811922×0=0.000; 7.431437×2=14.863; 0.715318×12=8.584; -2.999312×68=-203.953; 0.807972×20=16.159; 32.919399×0=0.000; total=-141.398",
    actual: 255
  },
  {
    date: "2024-10-05",
    season: 3,
    holiday: 0,
    weathersit: 1,
    temp: 20,
    humidity: 58,
    windspeed: 13,
    event: 0,
    pred: 400,
    tips:
      "22.949566×3=68.849; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×20=14.306; -2.999312×58=-173.960; 0.807972×13=10.504; 32.919399×0=0.000; total=-72.870",
    actual: 410
  },
  {
    date: "2024-06-01",
    season: 2,
    holiday: 0,
    weathersit: 1,
    temp: 26,
    humidity: 50,
    windspeed: 9,
    event: 0,
    pred: 570,
    tips:
      "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×26=18.598; -2.999312×50=-149.966; 0.807972×9=7.272; 32.919399×0=0.000; total=-70.765",
    actual: 565
  },
  {
    date: "2024-11-25",
    season: 4,
    holiday: 1,
    weathersit: 3,
    temp: 7,
    humidity: 85,
    windspeed: 15,
    event: 1,
    eventName: "Convertible Car Show, City Center (capacity ≈ 10 000)",
    pred: 180,
    tips:
      "22.949566×4=91.798; -8.811922×1=-8.812; 7.431437×3=22.294; 0.715318×7=5.007; -2.999312×85=-254.942; 0.807972×15=12.120; 32.919399×1=32.919; total=-99.615",
    actual: 170
  }
];

// export const taskRows = [
//   {
//     date: "2024-06-15",
//     season: 2,
//     holiday: 0,
//     weathersit: 1,
//     temp: 27,
//     humidity: 58,
//     windspeed: 11,
//     event: 0,
//     pred: 540,
//     tips:
//       "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×27=19.314; -2.999312×58=-173.960; 0.807972×11=8.888; 32.919399×0=0.000; total=-92.428"
//   },
//   {
//     date: "2024-11-01",
//     season: 4,
//     holiday: 0,
//     weathersit: 2,
//     temp: 9,
//     humidity: 70,
//     windspeed: 16,
//     event: 0,
//     pred: 230,
//     tips:
//       "22.949566×4=91.798; -8.811922×0=0.000; 7.431437×2=14.863; 0.715318×9=6.438; -2.999312×70=-209.952; 0.807972×16=12.928; 32.919399×0=0.000; total=-83.925"
//   },
//   {
//     date: "2024-10-31",
//     season: 4,
//     holiday: 1,
//     weathersit: 3,
//     temp: 8,
//     humidity: 78,
//     windspeed: 17,
//     event: 1,
//     pred: 210,
//     tips:
//       "22.949566×4=91.798; -8.811922×1=-8.812; 7.431437×3=22.294; 0.715318×8=5.722; -2.999312×78=-233.946; 0.807972×17=13.736; 32.919399×1=32.919; total=-76.288"
//   },
//   {
//     date: "2024-02-10",
//     season: 1,
//     holiday: 0,
//     weathersit: 3,
//     temp: 2,
//     humidity: 90,
//     windspeed: 22,
//     event: 0,
//     pred: 120,
//     tips:
//       "22.949566×1=22.950; -8.811922×0=0.000; 7.431437×3=22.294; 0.715318×2=1.431; -2.999312×90=-269.938; 0.807972×22=17.775; 32.919399×0=0.000; total=-205.488"
//   },
//   {
//     date: "2024-08-20",
//     season: 2,
//     holiday: 0,
//     weathersit: 1,
//     temp: 29,
//     humidity: 60,
//     windspeed: 12,
//     event: 0,
//     pred: 580,
//     tips:
//       "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×29=20.744; -2.999312×60=-179.959; 0.807972×12=9.696; 32.919399×0=0.000; total=-96.188"
//   }
// ];



export const taskRows = [
  // ─── WITHOUT EVENT (original 5) ────────────────────────────────
  {
    date: "2024-06-15",
    season: 2,
    holiday: 0,
    weathersit: 1,
    temp: 27,
    humidity: 58,
    windspeed: 11,
    event: 0,
    pred: 540,
    tips:
      "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×27=19.314; -2.999312×58=-173.960; 0.807972×11=8.888; 32.919399×0=0.000; total=-92.428"
  },
  {
    date: "2024-11-01",
    season: 4,
    holiday: 0,
    weathersit: 2,
    temp: 9,
    humidity: 70,
    windspeed: 16,
    event: 0,
    pred: 230,
    tips:
      "22.949566×4=91.798; -8.811922×0=0.000; 7.431437×2=14.863; 0.715318×9=6.438; -2.999312×70=-209.952; 0.807972×16=12.928; 32.919399×0=0.000; total=-83.925"
  },
  {
    date: "2024-10-31",
    season: 4,
    holiday: 1,
    weathersit: 3,
    temp: 8,
    humidity: 78,
    windspeed: 17,
    event: 1,  // originally event=1 here, but we’ll treat as “no special event” for this block
    eventName: "Halloween (capacity ≈ 100 000)",
    pred: 210,
    tips:
      "22.949566×4=91.798; -8.811922×1=-8.812; 7.431437×3=22.294; 0.715318×8=5.722; -2.999312×78=-233.946; 0.807972×17=13.736; 32.919399×1=32.919; total=-76.288"
  },
  {
    date: "2024-02-10",
    season: 1,
    holiday: 0,
    weathersit: 3,
    temp: 2,
    humidity: 90,
    windspeed: 22,
    event: 0,
    pred: 120,
    tips:
      "22.949566×1=22.950; -8.811922×0=0.000; 7.431437×3=22.294; 0.715318×2=1.431; -2.999312×90=-269.938; 0.807972×22=17.775; 32.919399×0=0.000; total=-205.488"
  },
  {
    date: "2024-08-20",
    season: 2,
    holiday: 0,
    weathersit: 1,
    temp: 29,
    humidity: 60,
    windspeed: 12,
    event: 0,
    pred: 580,
    tips:
      "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×29=20.744; -2.999312×60=-179.959; 0.807972×12=9.696; 32.919399×0=0.000; total=-96.188"
  },

  // ─── WITH EVENT (new 5) ─────────────────────────────────────────
  {
    date: "2024-07-01",
    season: 3,
    holiday: 0,
    weathersit: 2,
    temp: 22,
    humidity: 65,
    windspeed: 10,
    event: 1,
    eventName: "Summer Music Festival, Downtown Park (capacity ≈ 50 000)",
    pred: 450,
    tips:
      "22.949566×3=68.849; -8.811922×0=0.000; 7.431437×2=14.863; 0.715318×22=15.737; -2.999312×65=-194.955; 0.807972×10=8.080; 32.919399×1=32.919; total=-54.508"
  },
  {
    date: "2024-12-31",
    season: 4,
    holiday: 1,
    weathersit: 4,
    temp: 3,
    humidity: 80,
    windspeed: 20,
    event: 1,
    eventName: "New Year’s Eve Celebration, City Square (capacity ≈ 200 000)",
    pred: 180,
    tips:
      "22.949566×4=91.798; -8.811922×1=-8.812; 7.431437×4=29.726; 0.715318×3=2.146; -2.999312×80=-239.945; 0.807972×20=16.159; 32.919399×1=32.919; total=-75.009"
  },
  {
    date: "2024-05-05",
    season: 2,
    holiday: 0,
    weathersit: 3,
    temp: 18,
    humidity: 55,
    windspeed: 15,
    event: 1,
    eventName: "Spring Carnival, Riverside Park (capacity ≈ 30 000)",
    pred: 380,
    tips:
      "22.949566×2=45.899; -8.811922×0=0.000; 7.431437×3=22.294; 0.715318×18=12.876; -2.999312×55=-164.962; 0.807972×15=12.120; 32.919399×1=32.919; total=-39.855"
  },
  {
    date: "2024-09-01",
    season: 3,
    holiday: 0,
    weathersit: 1,
    temp: 25,
    humidity: 50,
    windspeed: 12,
    event: 1,
    eventName: "Labor Day Parade, Main Street (capacity ≈ 100 000)",
    pred: 500,
    tips:
      "22.949566×3=68.849; -8.811922×0=0.000; 7.431437×1=7.431; 0.715318×25=17.883; -2.999312×50=-149.966; 0.807972×12=9.696; 32.919399×1=32.919; total=-13.188"
  },
  {
    date: "2024-03-20",
    season: 1,
    holiday: 0,
    weathersit: 2,
    temp: 10,
    humidity: 75,
    windspeed: 18,
    event: 0,
    pred: 300,
    tips:
      "22.949566×1=22.950; -8.811922×0=0.000; 7.431437×2=14.863; 0.715318×10=7.153; -2.999312×75=-224.948; 0.807972×18=14.543; 32.919399×1=32.919; total=-132.520"
  }
];
