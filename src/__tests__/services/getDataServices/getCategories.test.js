import { getCategoriesService } from "../../../services";
import axios from "axios";

jest.mock("axios");

describe("testing get all categories service", () => {
  test("should return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        categories: [
          {
            _id: "1212",
            categoryName: "weights",
            description: "literature in the form of prose, especially novels",
          },
        ],
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockData);
    const response = await getCategoriesService();

    const expectedData = {
      data: {
        categories: [
          {
            _id: "1212",
            categoryName: "weights",
            description: "literature in the form of prose, especially novels",
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

    const response = await getCategoriesService();
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
