import { removeFromWishlistService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const product = {
  _id: "c7ee18c1-d14a-4473-9bc6-1d39ca2c7501",
  title: "ON Protien",
  description: "100% Whey Protein.",
  categoryName: "supplements",
};

const token = "1";

describe("testing remove from wishlist service", () => {
  test("should return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        wishlist: [product],
      },
      status: 201,
    };

    axios.delete.mockResolvedValue(mockData);
    const response = await removeFromWishlistService(token, product);

    const expectedData = {
      data: {
        wishlist: [product],
      },
      status: 201,
    };

    expect(response).toEqual(expectedData);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.delete.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await removeFromWishlistService(token, product);
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
