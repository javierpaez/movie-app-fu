import { render, screen } from "@testing-library/react";
import { Label } from "@/components/ui/label";

describe("Label Component", () => {
  it("should render a label element", () => {
    render(<Label htmlFor="input-id">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "input-id");
  });

  it("should apply the correct default className", () => {
    render(<Label>Default Label</Label>);
    const label = screen.getByText("Default Label");
    expect(label).toHaveClass("text-sm font-medium leading-none");
  });

  it("should accept and apply custom className", () => {
    render(<Label className="custom-class">Custom Label</Label>);
    const label = screen.getByText("Custom Label");
    expect(label).toHaveClass("custom-class");
  });

  it("should be disabled when peer is disabled", () => {
    render(
      <>
        <input id="input-id" disabled />
        <Label htmlFor="input-id">Disabled Label</Label>
      </>
    );
    const label = screen.getByText("Disabled Label");
    expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
    expect(label).toHaveClass("peer-disabled:opacity-70");
  });

  it("should correctly apply custom variants from cva", () => {
    render(<Label className="text-red-500">Styled Label</Label>);
    const label = screen.getByText("Styled Label");
    expect(label).toHaveClass("text-red-500");
  });
});
