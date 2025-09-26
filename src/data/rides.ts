export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type Ride = {
  id: string;
  name: string;
  description: string;
  averageSpeed: number;
  maxSpeed: number;
  distance: number;
  duration: number;
  startTime: string;
  startLocation: string;
  stravaLink: string;
  occurrence: "weekly" | "monthly" | "one-time";
  weekdays: Weekday[];
};

const rides: Ride[] = [
  {
    id: "1",
    name: "Mellow Monday",
    description:
      "A moderate pace group ride on Lakeshore Drive. Smooth rotations keep the speed steady without being all out.",
    averageSpeed: 21,
    maxSpeed: 26,
    distance: 17,
    duration: 50,
    startTime: "6:00AM",
    startLocation:
      "New Orleans Museum of Art, One Collins C. Diboll Circle, City Park, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Monday"],
  },
  {
    id: "2",
    name: "Tuesday/Thursday Ride",
    description:
      "A steady endurance ride that begins with a Lakeshore Drive loop and extends along the lakeshore path. A solid midweek effort at a controlled pace.",
    averageSpeed: 20,
    maxSpeed: 23,
    distance: 35,
    duration: 75,
    startTime: "6:00AM",
    startLocation:
      "New Orleans Museum of Art, One Collins C. Diboll Circle, City Park, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Tuesday", "Thursday"],
  },
  {
    id: "3",
    name: "Tuesday Loops",
    description:
      "Three hard loops of the lakefront at race pace, each six miles long. Riders regroup at NOMA after every loop and restart on the half hour. Runs only during daylight savings time.",
    averageSpeed: 26,
    maxSpeed: 33,
    distance: 6,
    duration: 25,
    startTime: "6:00PM",
    startLocation:
      "New Orleans Museum of Art, One Collins C. Diboll Circle, City Park, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Tuesday"],
  },
  {
    id: "4",
    name: "WeMoRi",
    description:
      "A full gas morning ride with a fast loop around the lakefront and through City Park. Expect attacks, rotations, and a race like feel.",
    averageSpeed: 26,
    maxSpeed: 33,
    distance: 22,
    duration: 50,
    startTime: "5:45AM",
    startLocation:
      "Robert's Parking lot, 135 Allen Toussaint Blvd, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Wednesday"],
  },
  {
    id: "5",
    name: "Giro",
    description:
      "The signature New Orleans weekend ride. A fast group push out to New Orleans East with a long sustained effort at high speed.",
    averageSpeed: 24,
    maxSpeed: 30,
    distance: 50,
    duration: 130,
    startTime: "7:00AM",
    startLocation: "Starbucks, 800 Harrison Ave, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Saturday", "Sunday"],
  },
  {
    id: "6",
    name: "Sugar Rush",
    description:
      "A relaxed no drop ride around the lakefront that ends with a stop for sweet treats. A social spin at beginner friendly speeds.",
    averageSpeed: 15,
    maxSpeed: 20,
    distance: 15,
    duration: 60,
    startTime: "6:00PM",
    startLocation:
      "New Orleans Museum of Art, One Collins C. Diboll Circle, City Park, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Friday"],
  },
  {
    id: "7",
    name: "SaMoRi",
    description:
      "A solid endurance ride out to New Orleans East at a moderate to fast pace. Demanding but steadier than the Giro.",
    averageSpeed: 21,
    maxSpeed: 26,
    distance: 50,
    duration: 145,
    startTime: "6:30AM",
    startLocation:
      "Across from Felix's, 7400 Lakeshore Dr, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Saturday"],
  },
];


export default rides;
