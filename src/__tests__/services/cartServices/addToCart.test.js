import { addToCartService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const product = {
  _id: "c7ee18c1-d14a-4473-9bc6-1d39ca2c7501",
  title: "ON Protien",
  description: "100% Whey Protein.",
  categoryName: "supplements",
  price: 3049,
  inStock: true,
  isDeliveredFast: true,
  isTrending: true,
  rating: 4,
};

const token = "1";

describe("testing add to cart service", () => {
  test("should add the product to cart and return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        cart: [product],
      },
      status: 201,
    };

    axios.post.mockResolvedValue(mockData);
    const response = await addToCartService({ product, token });

    const expectedData = {
      data: {
        cart: [product],
      },
      status: 201,
    };

    expect(response).toEqual(expectedData);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await addToCartService({ product, token });
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
