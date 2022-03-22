import { v4 as uuid } from "uuid";
import { categorySupplements, categoryAccessories, categoryEquipments, categoryWeights } from "../../images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "weights",
    description:
      "literature in the form of prose, especially novels",
      image: categoryWeights
  },
  {
    _id: uuid(),
    categoryName: "equipments",
    description:
      "Non-fiction is writing that gives information or describes real events",
      image: categoryEquipments
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    description:
      "Meant to cause discomfort and fear for both the character and readers",
      image: categoryAccessories
  },
  {
    _id: uuid(),
    categoryName: "supplements",
    description:
      "Meant to cause discomfort and fear for both the character and readers",
      image: categorySupplements
  },
];
