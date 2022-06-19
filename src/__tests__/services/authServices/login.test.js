import { loginService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const userData = {
  email: "shellyburton@gmail.com",
  password: "shellyburton123",
  rememberUser: true,
};

describe("testing login service", () => {
  test("should return response if API call succeeds", async () => {
    const mockData = {
      data: {
        foundUser: {
          email: "shellyburton@gmail.com",
          firstName: "Shelly",
          id: "2",
          lastName: "Burton",
          _id: "4d119402-c316-4425-9db2-529a423e3d97",
        },
      },
    };

    axios.post.mockResolvedValue(mockData);

    const response = await loginService(userData);

    const expectedData = {
      data: {
        foundUser: {
          email: "shellyburton@gmail.com",
          firstName: "Shelly",
          id: "2",
          lastName: "Burton",
          _id: "4d119402-c316-4425-9db2-529a423e3d97",
        },
      },
    };

    expect(response).toEqual(expectedData);
  });

  test("should return error message from error object if API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: true,
      response: { data: { message: "user not found" } },
    });

    axios.isAxiosError.mockImplementation(() => true);

    const response = await loginService(userData);

    expect(response).toEqual({ message: "user not found" });
    expect(axios.isAxiosError).toBeCalledTimes(1);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await loginService(userData);

    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
