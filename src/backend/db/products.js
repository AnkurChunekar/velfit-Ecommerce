import { v4 as uuid } from "uuid";
import { abRollerPI, waterBottlePI, legPressPI, pecDeckPI, platesPI, squatRackPI, jumpRopePI, latPulldownPI, dumbbellPI, onPI, mbPI, matPI, kettlebellPI, betaAlPI, bcaaPI, dumbbellsSetPI } from "../../images/index";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Optimum Nutrition Protien",
    description: "Gold Standard 100% Whey Protein",
    categoryName: "supplements",
    price: "3049",
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: onPI
  },
  {
    _id: uuid(),
    title: "Aurion Hex Dumbbells",
    description: "Best for home gym.",
    categoryName: "weights",
    price: "1100",
    inStock: true,
    isDeliveredFast: false,
    rating: 2,
    image: dumbbellPI
  },
  {
    _id: uuid(),
    title: "45deg Leg Press",
    description: "Best suited for leg exercises.",
    categoryName: "equipments",
    price: "7499",
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: legPressPI
  },
  {
    _id: uuid(),
    title: "16KG Kettlebell",
    description: "Wide Grip suited for all exercises",
    categoryName: "weights",
    price: "799",
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: kettlebellPI
  },
  {
    _id: uuid(),
    title: "Boldfit Skipping Rope",
    description: "Tangle Free Jumping Rope for Kids",
    categoryName: "accessories",
    price: "199",
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: jumpRopePI
  },
  {
    _id: uuid(),
    title: "Bigmuscles Nutrition BCAA",
    description: "30 Serving, Lychee, Advanced Intra Workout",
    categoryName: "supplements",
    price: "999",
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: bcaaPI
  },
  {
    _id: uuid(),
    title: "Ab Blaster Fitness Roller",
    description: "with Knee Mat for Men & Women",
    categoryName: "accessories",
    price: "199",
    inStock: true,
    isDeliveredFast: true,
    rating: 4,
    image: abRollerPI
  },
  {
    _id: uuid(),
    title: "Pec Deck Machine",
    description: "Best for chest exercises for Men",
    categoryName: "equipments",
    price: "9999",
    inStock: true,
    isDeliveredFast: false,
    rating: 2,
    image: pecDeckPI
  },
  {
    _id: uuid(),
    title: "Muscle Blaze Whey",
    description: "USA Certified (Rich Chocolate)",
    categoryName: "supplements",
    price: "4699",
    inStock: true,
    isDeliveredFast: true,
    rating: 2,
    image: mbPI
  },
  {
    _id: uuid(),
    title: "JX FITNESS Squat Rack",
    description: "Multi-Function Weight Lifting",
    categoryName: "equipments",
    price: "7999",
    inStock: true,
    isDeliveredFast: false,
    rating: 3,
    image: squatRackPI
  },
  {
    _id: uuid(),
    title: "Rogue's Dumbbell full set",
    description: "Rubber Encased Hex Dumbbell ",
    categoryName: "weights",
    price: "9999",
    inStock: true,
    isDeliveredFast: true,
    rating: 3,
    image: dumbbellsSetPI
  },
  {
    _id: uuid(),
    title: "Velfit's Water Bottle",
    description: "Leakproof Guarantee Sipper Bottle",
    categoryName: "accessories",
    price: "89",
    inStock: true,
    isDeliveredFast: true,
    rating: 2,
    image: waterBottlePI
  },
  {
    _id: uuid(),
    title: "Rogue's Weighted Plates",
    description: "Rubber coated plates for better grip",
    categoryName: "weights",
    price: "3999",
    inStock: false,
    isDeliveredFast: false,
    rating: 1,
    image: platesPI
  },
  {
    _id: uuid(),
    title: "Olimps Beta Alanine ",
    description: "Amino acid supplement raw powder",
    categoryName: "supplements",
    price: "1499",
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: betaAlPI
  },
  {
    _id: uuid(),
    title: "MuscleX Designer Yoga Mat",
    description: "Pure EVA Material",
    categoryName: "accessories",
    price: "149",
    inStock: true,
    isDeliveredFast: false,
    rating: 1,
    image: matPI
  },
  {
    _id: uuid(),
    title: "GDLF Lat Pull Down Machine",
    description: "Strength Training Bar Machine",
    categoryName: "equipments",
    price: "7449.99",
    inStock: true,
    isDeliveredFast: false,
    rating: 4,
    image: latPulldownPI
  }
];

