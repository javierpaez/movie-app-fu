import { render, screen, fireEvent } from "@testing-library/react";
import { Calendar } from "@/components/ui/calendar"; 

jest.mock("react-day-picker", () => ({
  DayPicker: jest.fn(() => <div data-testid="day-picker-mock" />),
}));

describe("Calendar Component", () => {
  it("should render the calendar with default props", () => {
    render(<Calendar />);
    expect(screen.getByTestId("day-picker-mock")).toBeInTheDocument();
  });

  it("should not show outside days if 'showOutsideDays' is false", () => {
    render(<Calendar showOutsideDays={false} />);
    const outsideDays = screen.queryAllByRole("button", { name: /outside/i });
    expect(outsideDays.length).toBe(0);
  });
});
