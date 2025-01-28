import { render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("should render Button with default props", () => {
    render(<Button>Default Button</Button>);

    expect(screen.getByText("Default Button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("bg-primary text-primary-foreground shadow");
  });

  it("should render Button as a Slot when 'asChild' is true", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );

    const linkButton = screen.getByText("Link Button");
    expect(linkButton.tagName).toBe("A");
    expect(linkButton).toHaveAttribute("href", "#");
  });

  it("disables the button correctly", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:pointer-events-none disabled:opacity-50");
  });
});
