import { addNewAddressService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGIxMzYzMS1mZTFiLTRmMjMtYTIwNy00NjRiOTM1NzJhOGEiLCJlbWFpbCI6InNoZWxseWJ1cnRvbkBnbWFpbC5jb20iLCJpYXQiOjE2NTU2MDkxNzV9.B1jV5KHvf7EmOhEQ9UmfdWWDSld8zbdPR13l_pbo-mw";

const address = {
  city: "Mumbai",
  country: "India",
  mobile: "8877665544",
  name: "Shelly Burton",
  state: "Maharashtra",
  street: "E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho Kabir",
  zipCode: "784411",
  _id: "3b463d0c-5092-43ef-8aaa-58525a173cba",
};

describe("testing add new address service", () => {
  test("should add new address return addresses and status if API call succeeds", async () => {
    const data = {
      data: {
        address: [
          {
            city: "Mumbai",
            country: "India",
            mobile: "8877665544",
            name: "Shelly Burton",
            state: "Maharashtra",
            street:
              "E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho Kabir",
            zipCode: "784411",
            _id: "3b463d0c-5092-43ef-8aaa-58525a173cba",
          },
        ],
      },
      status: 201,
    };

    axios.post.mockResolvedValue(data);

    const response = await addNewAddressService({ address, token });

    expect(response).toEqual(data);
  });

  test("should return error message from error object if API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: true,
      response: { data: { message: "user not found" } },
    });

    axios.isAxiosError.mockImplementation(() => true);

    const response = await addNewAddressService({ address, token });

    expect(response).toEqual({ message: "user not found" });
    expect(axios.isAxiosError).toBeCalledTimes(1);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.post.mockImplementation(() =>
      Promise.reject({ message: "Something went wrong!" })
    );

    const response = await addNewAddressService({ address, token });
    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
