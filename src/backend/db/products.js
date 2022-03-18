import { v4 as uuid } from "uuid";
import { abRollerPI, waterBottlePI, legPressPI, pecDeckPI, platesPI, squatRackPI, jumpRopePI, latPulldownPI, dumbbellPI, onPI, mbPI, matPI, kettlebellPI, betaAlPI, bcaaPI, dumbbellsSetPI } from "../../images/index";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "ON Protien",
    description: "100% Whey Protein.",
    categoryName: "supplements",
    price: 3049,
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: onPI
  },
  {
    _id: uuid(),
    title: "Aurion Hex Dumbbells",
    description: "Rubber Coated.",
    categoryName: "weights",
    price: 1100,
    inStock: true,
    isDeliveredFast: false,
    rating: 2,
    image: dumbbellPI
  },
  {
    _id: uuid(),
    title: "Leg Press",
    description: "Best suited for leg exercises.",
    categoryName: "equipments",
    price: 7499,
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: legPressPI
  },
  {
    _id: uuid(),
    title: "16KG Kettlebell",
    description: "Wide Rubber Grip.",
    categoryName: "weights",
    price: 799,
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: kettlebellPI
  },
  {
    _id: uuid(),
    title: "kipping Rope",
    description: "Tangle Free for Kids",
    categoryName: "accessories",
    price: 199,
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: jumpRopePI
  },
  {
    _id: uuid(),
    title: "BCAA Energy",
    description: "30 Serving, Lychee",
    categoryName: "supplements",
    price: 999,
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: bcaaPI
  },
  {
    _id: uuid(),
    title: "Ab Roller",
    description: "Crush Ab exercises",
    categoryName: "accessories",
    price: 199,
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: abRollerPI
  },
  {
    _id: uuid(),
    title: "Pec Deck",
    description: "Best for chest exercises",
    categoryName: "equipments",
    price: 9999,
    inStock: true,
    isDeliveredFast: false,
    rating: 5,
    image: pecDeckPI
  },
  {
    _id: uuid(),
    title: "MB Whey",
    description: "Rich Chocolate Flavor",
    categoryName: "supplements",
    price: 4699,
    inStock: true,
    isDeliveredFast: true,
    rating: 2,
    image: mbPI
  },
  {
    _id: uuid(),
    title: "Squat Rack",
    description: "Best Build Quality",
    categoryName: "equipments",
    price: 7999,
    inStock: true,
    isDeliveredFast: false,
    rating: 3,
    image: squatRackPI
  },
  {
    _id: uuid(),
    title: "Dumbbells full set",
    description: "Rubber Encased Dumbbell",
    categoryName: "weights",
    price: 9999,
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: dumbbellsSetPI
  },
  {
    _id: uuid(),
    title: "Water Bottle",
    description: "Leakproof Sipper",
    categoryName: "accessories",
    price: 89,
    inStock: true,
    isDeliveredFast: true,
    rating: 2,
    image: waterBottlePI
  },
  {
    _id: uuid(),
    title: "Weighted Plates",
    description: "Rubber coated plates",
    categoryName: "weights",
    price: 3999,
    inStock: false,
    isDeliveredFast: false,
    rating: 1,
    image: platesPI
  },
  {
    _id: uuid(),
    title: "Beta Alanine ",
    description: "Amino acid supplement",
    categoryName: "supplements",
    price: 1499,
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: betaAlPI
  },
  {
    _id: uuid(),
    title: "MuscleX Yoga Mat",
    description: "Pure EVA Material",
    categoryName: "accessories",
    price: 149,
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: matPI
  },
  {
    _id: uuid(),
    title: "Lat Pull Down",
    description: "For Strength Training",
    categoryName: "equipments",
    price: 5449.99,
    inStock: true,
    isDeliveredFast: false,
    rating: 4,
    image: latPulldownPI
  }
];

