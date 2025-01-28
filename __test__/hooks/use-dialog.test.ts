import { renderHook, act } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { useDialog } from "@/hooks/use-dialog";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("useDialog", () => {
  it("should return initial open state as false", () => {
    (usePathname as jest.Mock).mockReturnValue("/home");
    const { result } = renderHook(() => useDialog());
    expect(result.current[0]).toBe(false);
  });

  it("should set open state to true when setOpen is called", () => {
    (usePathname as jest.Mock).mockReturnValue("/home");
    const { result } = renderHook(() => useDialog());

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);
  });

  it("should reset open state to false when pathname changes", () => {
    (usePathname as jest.Mock).mockReturnValue("/home");
    const { result, rerender } = renderHook(() => useDialog());

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);

    (usePathname as jest.Mock).mockReturnValue("/about");
    rerender();

    expect(result.current[0]).toBe(false);
  });
});
