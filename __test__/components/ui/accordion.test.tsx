import { ChevronDownIcon } from "@radix-ui/react-icons";
import { fireEvent, render, screen } from "@testing-library/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

describe("Accordion Component", () => {
  it("should render the accordion items correctly", () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="title">
          <AccordionTrigger>Title Text</AccordionTrigger>
          <AccordionContent>Content Text</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Title Text")).toBeInTheDocument();
  });

  it("should show and hide content when the trigger is clicked", () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="title">
          <AccordionTrigger>Title Text</AccordionTrigger>
          <AccordionContent>Content Text</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.queryByText("Content Text")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Title Text"));
    expect(screen.getByText("Content Text")).toBeVisible();

    fireEvent.click(screen.getByText("Title Text"));
    expect(screen.queryByText("Content Text")).not.toBeInTheDocument();
  });
});
