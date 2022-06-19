import { getAllProductsService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const token = "1";

describe("testing get all products service", () => {
  test("should return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        products: [{ title: "Dumbell", price: 5000, id: "1111" }],
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockData);
    const response = await getAllProductsService(token);

    const expectedData = {
      data: {
        products: [{ title: "Dumbell", price: 5000, id: "1111" }],
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

    const response = await getAllProductsService(token);
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
