import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "@/components/ui/checkbox";

describe("Checkbox Component", () => {
  it("should render the checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass("peer h-4 w-4 shrink-0 rounded-sm border border-primary");
  });

  it("should be unchecked by default", () => {
    render(<Checkbox />);
    
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should be checked when clicked", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("should have correct styles when checked", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toHaveClass("data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground");
  });

  it("should be disabled when the 'disabled' prop is passed", () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass("disabled:cursor-not-allowed disabled:opacity-50");
  });

  it("should call onChange when clicked", () => {
    const onChange = jest.fn();
    render(<Checkbox onCheckedChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should render with custom className", () => {
    render(<Checkbox className="custom-class" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("custom-class");
  });
});
