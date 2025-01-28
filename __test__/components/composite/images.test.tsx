import { render } from "@testing-library/react";
import { GridBg } from "@/components/composite/images";

describe("GridBg", () => {
  it("should render the GridBg component", () => {
    render(<GridBg />);
    const gridBg = document.getElementsByClassName("absolute bottom-0 h-[30dvh] w-full bg-gradient-to-t from-background");
    expect(gridBg[0]).toBeInTheDocument();
  });
});
