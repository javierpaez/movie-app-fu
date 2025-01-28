import { cookies } from "next/headers";
import { setRegion } from "@/app/actions";

const mockedSet = jest.fn();
jest.mock("next/headers", () => ({
  cookies: () => ({
    set: mockedSet
  }),
}));

describe("setRegion", () => {
  it("should set a region cookie with the correct value and options", async () => {
    const region = "US";
    await setRegion(region);

    expect(mockedSet).toHaveBeenCalledTimes(1);
    expect(mockedSet).toHaveBeenCalledWith("region", region, {
      maxAge: 60 * 60 * 24 * 365,
    });
  });
});
