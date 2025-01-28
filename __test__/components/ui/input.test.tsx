import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("should render an input element", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("should accept user input", () => {
    render(<Input placeholder="Type something" />);
    const input = screen.getByPlaceholderText("Type something");

    fireEvent.change(input, { target: { value: "Hello, World!" } });
    expect(input).toHaveValue("Hello, World!");
  });

  it("should apply custom className", () => {
    render(<Input placeholder="Custom style" className="custom-class" />);
    const input = screen.getByPlaceholderText("Custom style");

    expect(input).toHaveClass("custom-class");
  });

  it("should have the correct type", () => {
    render(<Input placeholder="Password" type="password" />);
    const input = screen.getByPlaceholderText("Password");

    expect(input).toHaveAttribute("type", "password");
  });

  it("should be disabled when the disabled prop is passed", () => {
    render(<Input placeholder="Disabled input" disabled />);
    const input = screen.getByPlaceholderText("Disabled input");

    expect(input).toBeDisabled();
  });

  it("should show the correct placeholder", () => {
    render(<Input placeholder="Search here" />);
    const input = screen.getByPlaceholderText("Search here");

    expect(input).toHaveAttribute("placeholder", "Search here");
  });

  it("should have focus styles when focused", () => {
    render(<Input placeholder="Focus test" />);
    const input = screen.getByPlaceholderText("Focus test");

    fireEvent.focus(input);
    expect(input).toHaveClass("focus-visible:ring-1");
  });

  it("should render with a default value", () => {
    render(<Input defaultValue="Initial text" />);
    const input = screen.getByDisplayValue("Initial text");

    expect(input).toBeInTheDocument();
  });

  it("should handle change events", () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Type here");

    fireEvent.change(input, { target: { value: "New Value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
