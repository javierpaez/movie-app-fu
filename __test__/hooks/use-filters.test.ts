import { renderHook, act } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFilters } from "@/hooks/use-filters";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("useFilters", () => {
  const mockReplace = jest.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it("should initialize filters with parsed search params", () => {
    const activeParams = { genre: "comedy", year: "2022" };
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(activeParams));
    const { result } = renderHook(() => useFilters("movie"));

    expect(result.current.filters).toEqual({});
  });

  it("should get a filter value", () => {
    const { result } = renderHook(() => useFilters("movie"));
    act(() => {
      result.current.setFilter({ genre: "comedy" });
    });

    expect(result.current.getFilter("genre")).toBe("comedy");
  });

  it("should set a new filter", () => {
    const { result } = renderHook(() => useFilters("movie"));
    act(() => {
      result.current.setFilter({ genre: "comedy" });
    });

    expect(result.current.filters).toEqual({ genre: "comedy" });
  });

  it("should save filters", () => {
    const { result } = renderHook(() => useFilters("movie"));
    act(() => {
      result.current.setFilter({ genre: "comedy" });
      result.current.saveFilters();
    });

    expect(mockReplace).toHaveBeenCalledWith("/movie/discover?");
  });

  it("should clear filters", () => {
    const { result } = renderHook(() => useFilters("movie"));
    act(() => {
      result.current.setFilter({ genre: "comedy" });
      result.current.clearFilters();
    });

    expect(result.current.filters).toEqual({});
    expect(mockReplace).toHaveBeenCalledWith("/movie/discover");
  });

  it("should return the correct count of active filters", () => {
    const { result } = renderHook(() => useFilters("movie"));
    act(() => {
      result.current.setFilter({ genre: "comedy", year: "2022" });
    });

    expect(result.current.count).toBe(2);
  });
});
