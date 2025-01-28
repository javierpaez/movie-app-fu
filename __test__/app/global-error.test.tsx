import "@testing-library/jest-dom";

import * as Sentry from "@sentry/nextjs";
import { render, screen, waitFor } from "@testing-library/react";

import GlobalError from "@/app/global-error";

jest.mock("@sentry/nextjs", () => ({
  captureException: jest.fn(),
}));
describe("GlobalError", () => {
  it("should call Sentry with the error object", async () => {
    const error = new Error("Test Error");
    render(<GlobalError error={error} />);

    await waitFor(() => {
      expect(Sentry.captureException).toHaveBeenCalledTimes(1);
      expect(Sentry.captureException).toHaveBeenCalledWith(error);
    });
  });
  it("should render the NextError component with statusCode 500", () => {
    const error = new Error("Test Error");

    render(<GlobalError error={error} />);

    const nextErrorComponent = screen.getByText(/Application error/);
    expect(nextErrorComponent).toBeInTheDocument();
  });
});
