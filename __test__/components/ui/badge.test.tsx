import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/badge";

describe("Badge Component", () => {
  it("should render Badge component with default variant", () => {
    render(<Badge>Default Badge</Badge>);

    expect(screen.getByText("Default Badge")).toBeInTheDocument();
  });

  it("should render Badge component with secondary variant", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);

    expect(screen.getByText("Secondary Badge")).toBeInTheDocument();

    const badge = screen.getByText("Secondary Badge");
    expect(badge).toHaveClass("border-transparent");
    expect(badge).toHaveClass("bg-secondary");
    expect(badge).toHaveClass("text-secondary-foreground");
  });

  it("should render Badge component with destructive variant", () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>);

    expect(screen.getByText("Destructive Badge")).toBeInTheDocument();

    const badge = screen.getByText("Destructive Badge");
    expect(badge).toHaveClass("border-transparent");
    expect(badge).toHaveClass("bg-destructive");
    expect(badge).toHaveClass("text-destructive-foreground");
    expect(badge).toHaveClass("shadow");
  });

  it("should render Badge component with outline variant", () => {
    render(<Badge variant="outline">Outline Badge</Badge>);

    expect(screen.getByText("Outline Badge")).toBeInTheDocument();

    const badge = screen.getByText("Outline Badge");
    expect(badge).toHaveClass("text-foreground");
  });
});
