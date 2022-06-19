import { signupService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const userData = {
  firstName: "ankur",
  lastName: "chunekar",
  email: "ankurchunekar@gmail.com",
  password: "ankurchunekar123",
};

describe("testing login service", () => {
  test("should return response if API call succeeds", async () => {
    const mockData = {
      data: {
        createdUser: {
          email: "ankurchunekar@gmail.com",
          firstName: "ankur",
          id: "4",
          lastName: "chunekar",
          password: "ankurchunekar123",
          _id: "a3ccfd10-6f1f-4049-92f9-d974cf27ffc4",
        },
        encodedToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ",
      },
    };

    axios.post.mockResolvedValue(mockData);

    const response = await signupService(userData);

    const expectedData = {
      data: {
        createdUser: {
          email: "ankurchunekar@gmail.com",
          firstName: "ankur",
          id: "4",
          lastName: "chunekar",
          password: "ankurchunekar123",
          _id: "a3ccfd10-6f1f-4049-92f9-d974cf27ffc4",
        },
        encodedToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ",
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

    const response = await signupService(userData);

    expect(response).toEqual({ message: "user not found" });
    expect(axios.isAxiosError).toBeCalledTimes(1);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await signupService(userData);

    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
