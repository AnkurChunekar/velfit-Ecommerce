import { getProductService } from "../../../services";
import axios from "axios";

jest.mock("axios");

describe("testing get single product service", () => {
  test("should return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        product: [
          {
            _id: "c7ee18c1",
            title: "ON Protien",
            description: "100% Whey Protein.",
            categoryName: "supplements",
          },
        ],
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockData);
    const response = await getProductService("c7ee18c1");

    const expectedData = {
      data: {
        product: [
          {
            _id: "c7ee18c1",
            title: "ON Protien",
            description: "100% Whey Protein.",
            categoryName: "supplements",
          },
        ],
      },
      status: 200,
    };

    expect(response).toEqual(expectedData);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.get.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await getProductService("c7ee18c1");
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
