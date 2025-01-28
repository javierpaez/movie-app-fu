import { render, screen } from "@testing-library/react";

import { Separator } from "@/components/ui/separator";

describe("Separator Component", () => {
  it("should render the Separator", () => {
    render(<Separator></Separator>);

    const items = screen.getAllByRole("none");
    expect(items).toHaveLength(1);
  });
});
