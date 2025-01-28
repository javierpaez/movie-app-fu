import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

describe("Alert Component", () => {
  it("should render Alert component with default variant", () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert Description")).toBeInTheDocument();

    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("bg-background");
    expect(alert).toHaveClass("text-foreground");
  });

  it("should render Alert component with destructive variant", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert Description")).toBeInTheDocument();

    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("border-destructive/50");
    expect(alert).toHaveClass("text-destructive");
  });

  it("should apply custom class names correctly", () => {
    render(
      <Alert className="custom-class" variant="destructive">
        <AlertTitle className="custom-title-class">Alert Title</AlertTitle>
        <AlertDescription className="custom-description-class">Alert Description</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("custom-class");
    expect(screen.getByText("Alert Title")).toHaveClass("custom-title-class");
    expect(screen.getByText("Alert Description")).toHaveClass("custom-description-class");
  });

  it("should render AlertTitle and AlertDescription components", () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert Description")).toBeInTheDocument();

    expect(screen.getByText("Alert Title")).toHaveClass("mb-1");
    expect(screen.getByText("Alert Title")).toHaveClass("font-medium");

    expect(screen.getByText("Alert Description")).toHaveClass("text-sm");
  });
});
