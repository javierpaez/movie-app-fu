import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { useActiveNav } from "@/hooks/use-active-nav";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("useActiveNav", () => {
  it("should return true when pathname matches the href for '/'", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    const { result } = renderHook(() => useActiveNav("/"));
    expect(result.current).toBe(true);
  });

  it("should return true when pathname starts with the href", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    const { result } = renderHook(() => useActiveNav("/about"));
    expect(result.current).toBe(true);
  });

  it("should return false when pathname does not start with the href", () => {
    (usePathname as jest.Mock).mockReturnValue("/contact");
    const { result } = renderHook(() => useActiveNav("/about"));
    expect(result.current).toBe(false);
  });

  it("should return false when pathname does not match the href for '/'", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    const { result } = renderHook(() => useActiveNav("/"));
    expect(result.current).toBe(false);
  });
});
