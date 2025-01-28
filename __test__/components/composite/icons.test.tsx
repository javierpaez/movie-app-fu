import { render, screen } from "@testing-library/react";
import { Icons } from "@/components/composite/icons";

describe("Icons", () => {
  it("should render the Logo icon", () => {
    render(<Icons.Logo data-testid="logo-icon" />);
    const logoIcon = screen.getByTestId("logo-icon");
    expect(logoIcon).toBeInTheDocument();
  });

  it("should render the Vercel icon", () => {
    render(<Icons.Vercel data-testid="vercel-icon" />);
    const vercelIcon = screen.getByTestId("vercel-icon");
    expect(vercelIcon).toBeInTheDocument();
    expect(vercelIcon).toHaveAttribute("role", "img");
    expect(vercelIcon).toContainHTML("<title>Vercel</title>");
    expect(vercelIcon).toContainHTML('<path d="M24 22.525H0l12-21.05 12 21.05z" />');
  });
});
