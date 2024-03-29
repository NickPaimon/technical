import { Candidate } from "@/types";

const names = [
  "John",
  "Jane",
  "Bob",
  "Alice",
  "Charlie",
  "Emma",
  "Tom",
  "Sophia",
  "Max",
  "Olivia",
  "James",
  "Ava",
  "William",
  "Isabella",
  "Jacob",
  "Mia",
  "Michael",
  "Charlotte",
  "Ethan",
  "Amelia",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Wilson",
  "Martinez",
  "Anderson",
  "Taylor",
  "Thomas",
  "Hernandez",
  "Moore",
  "Martin",
  "Jackson",
  "Thompson",
  "White",
];
const genders = ["man", "woman"];
const locations = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
];
const companies = [
  "TechCorp",
  "Innovatech",
  "DevFactory",
  "BuildIt",
  "CodeSolid",
  "BinaryBros",
  "PixelPioneers",
  "LogicLegends",
  "SyntaxSquad",
  "AlgoArtisans",
];

export const mockData: Candidate[] = names.map((name, index) => ({
  firstName: name,
  lastName: lastNames[index],
  gender: genders[index % 2],
  location: locations[index % 10],
  workHistory: [
    {
      company: companies[index % 10],
      title: "Software Engineer",
      startDate: `2018-0${(index % 9) + 1}-01`,
      endDate: `2020-0${(index % 9) + 1}-30`,
    },
    {
      company: companies[(index + 1) % 10],
      title: "Senior Developer",
      startDate: `2020-0${(index % 9) + 1}-01`,
      endDate: `2023-0${(index % 9) + 1}-15`,
    },
  ],
}));
