import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import NotFound from "@/app/not-found";

describe("NotFound", () => {
  it("renders a NotFound page", () => {
    render(<NotFound />);

    const notFoundCode = screen.getByText(/404/);

    expect(notFoundCode).toBeInTheDocument();
  });
});
