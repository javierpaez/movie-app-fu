import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "@/components/ui/textarea";

describe("Textarea Component", () => {
  it("should render with default styles", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass(
      "flex", 
      "min-h-[60px]", 
      "w-full", 
      "rounded-md", 
      "border", 
      "border-input", 
      "bg-transparent", 
      "px-3", 
      "py-2", 
      "text-sm", 
      "shadow-sm",
      "placeholder:text-muted-foreground", 
      "focus-visible:outline-none", 
      "focus-visible:ring-1", 
      "focus-visible:ring-ring", 
      "disabled:cursor-not-allowed", 
      "disabled:opacity-50"
    );
  });

  it("should apply custom className when provided", () => {
    render(<Textarea className="h-24 w-96" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("h-24", "w-96");
  });

  it("should update value when user types", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello, World!" } });

    expect(textarea).toHaveValue("Hello, World!");
  });
});
