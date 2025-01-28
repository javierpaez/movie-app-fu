import { render, screen } from "@testing-library/react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

describe("RadioGroup Component", () => {
  it("should render the RadioGroup with items", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
        <RadioGroupItem value="option3" />
      </RadioGroup>
    );

    const items = screen.getAllByRole("radio");
    expect(items).toHaveLength(3);
  });
});
