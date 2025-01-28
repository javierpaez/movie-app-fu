import { render, screen } from "@testing-library/react";
import { Progress } from "@/components/ui/progress";

describe("Progress Component", () => {
  it("should render a progress bar", () => {
    render(<Progress value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("relative h-2 w-full overflow-hidden rounded-full bg-primary/20");
  });

  it("should render the progress indicator with the correct width", () => {
    render(<Progress value={50} />);
    const progressIndicator = screen.getByRole("progressbar").querySelector(".h-full");
    expect(progressIndicator).toHaveStyle("transform: translateX(-50%)");
  });

  it("should apply custom className", () => {
    render(<Progress value={75} className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("custom-class");
  });

  it("should handle 100 value correctly", () => {
    render(<Progress value={100} />);
    const progressIndicator = screen.getByRole("progressbar").querySelector(".h-full");
    expect(progressIndicator).toHaveStyle("transform: translateX(-0%)");
  });

  it("should apply a dynamic transform based on the value prop", () => {
    const { rerender } = render(<Progress value={30} />);
    const progressIndicator = screen.getByRole("progressbar").querySelector(".h-full");
    expect(progressIndicator).toHaveStyle("transform: translateX(-70%)");

    rerender(<Progress value={90} />);
    expect(progressIndicator).toHaveStyle("transform: translateX(-10%)");
  });
});
