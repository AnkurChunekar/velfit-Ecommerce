import { v4 as uuid } from "uuid";

export const addressModalInputData = [
  {
    id: uuid(),
    name: "name",
    placeholder: "Full Name",
  },
  {
    id: uuid(),
    name: "mobile",
    placeholder: "Mobile Number",
  },
  {
    id: uuid(),
    name: "address",
    placeholder: "Address",
  },
  { id: uuid(), name: "city", placeholder: "City" },
  { id: uuid(), name: "state", placeholder: "State" },
  { id: uuid(), name: "country", placeholder: "Country" },
  { id: uuid(), name: "zipcode", placeholder: "Zipcode" },
];
