import { editAddressService } from "../../../services";
import axios from "axios";

jest.mock("axios");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGIxMzYzMS1mZTFiLTRmMjMtYTIwNy00NjRiOTM1NzJhOGEiLCJlbWFpbCI6InNoZWxseWJ1cnRvbkBnbWFpbC5jb20iLCJpYXQiOjE2NTU2MDkxNzV9.B1jV5KHvf7EmOhEQ9UmfdWWDSld8zbdPR13l_pbo-mw";

const _id = "eyJhbGciOiJIUzI1NiIsI";

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


describe("testing edit address service", () => {
  test("should edit address and return addresses and status if API call succeeds", async () => {
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

    const response = await editAddressService({ token, _id, address });

    const exepectedData = {
      addresses: [
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
      status: 201,
    };

    expect(response).toEqual(exepectedData);
  });

  test("should return error message from error object if API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: true,
      response: { data: { message: "user not found" } },
    });

    axios.isAxiosError.mockImplementation(() => true);

    const response = await editAddressService({ _id, token, address });

    expect(response).toEqual({ message: "user not found" });
    expect(axios.isAxiosError).toBeCalledTimes(1);
  });

  test("should return the deafult error message when API call fails", async () => {
    axios.post.mockRejectedValue({
      isAxiosError: false,
      message: "some error occured",
    });

    const response = await editAddressService({ _id, token, address });

    expect(response).toEqual({ message: "Something went wrong!" });
  });
});
