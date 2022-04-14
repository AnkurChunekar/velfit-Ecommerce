import { v4 as uuid } from "uuid";

export const addressModalInputData = [
    {
      id: uuid(),
      name: "name",
      placeholder: "John Doe",
      labelText: "Label Text",
    },
    {
      id: uuid(),
      name: "address",
      placeholder: "E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho....",
      labelText: "Address",
    },
    { id: uuid(), name: "city", placeholder: "Mumbai", labelText: "City" },
    { id: uuid(), name: "state", placeholder: "Maharashtra", labelText: "State" },
    { id: uuid(), name: "country", placeholder: "India", labelText: "Country" },
    { id: uuid(), name: "zipcode", placeholder: "405003", labelText: "Zipcode" },
    {
      id: uuid(),
      name: "mobile",
      placeholder: "9912127832",
      labelText: "Mobile Number",
    },
  ];
