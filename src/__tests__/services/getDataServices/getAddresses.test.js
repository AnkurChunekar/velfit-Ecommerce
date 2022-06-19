import { getAddressesService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const token = "1";

describe("testing get Addresses service", () => {
  test("should return the response if API call succeeds", async () => {
    const mockData = {
      data: {
        address: [{ city: "Mumbai", country: "India", name: "Shelly Burton" }],
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockData);
    const response = await getAddressesService(token);

    const expectedData = {
      data: {
        address: [{ city: "Mumbai", country: "India", name: "Shelly Burton" }],
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

    const response = await getAddressesService(token);
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
