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
    description: "A loop of Lakeshore Drive",
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
      "A loop of Lakeshore Drive and continuing to the Lakeshore path",
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
      "3 loops of the lakefront. Each loop is 6 miles long. Regroups at NOMA at the end of each loop. Restarts on the half hour. Only occurs when daylight savings time is in effect.",
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
    description: "Race paced loop of the lakefront and city park.",
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
    description: "Fast paced group ride out to New Orleans East.",
    averageSpeed: 24,
    maxSpeed: 30,
    distance: 50,
    duration: 130,
    startTime: "7:00AM",
    startLocation:
      "Starbucks, 800 Harrison Ave, New Orleans, LA 70124",
    stravaLink: "https://www.strava.com/activities/1234567890",
    occurrence: "weekly",
    weekdays: ["Saturday", "Sunday"],
  },
  {
    id: "6",
    name: "Sugar Rush",
    description:
      "A no-drop loop of the lakefront and ends with sugary treats.",
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
    description: "Moderately paced group ride out to New Orleans East.",
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
