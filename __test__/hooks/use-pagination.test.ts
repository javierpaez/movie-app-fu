import { renderHook } from "@testing-library/react";
import { usePagination } from "@/hooks/use-pagination";
import { usePathname, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("usePagination", () => {
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUsePathname.mockReturnValue("/some/path");
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  it("should generate correct page numbers", () => {
    const { result } = renderHook(() => usePagination({ totalPages: 10, currentPage: 5 }));

    expect(result.current.numbers).toEqual([1, "ellipsis1", 3, 4, 5, 6, 7, "ellipsis2", 10]);
  });

  it("should generate correct previous and next links", () => {
    const { result } = renderHook(() => usePagination({ totalPages: 10, currentPage: 5 }));

    expect(result.current.prevLink).toBe("/some/path?page=4");
    expect(result.current.nextLink).toBe("/some/path?page=6");
  });

  it("should generate correct page link", () => {
    const { result } = renderHook(() => usePagination({ totalPages: 10, currentPage: 5 }));

    expect(result.current.pageLink(6)).toBe("/some/path?page=6");
  });

  it("should handle edge cases for start and end pages", () => {
    const { result } = renderHook(() => usePagination({ totalPages: 10, currentPage: 2 }));

    expect(result.current.numbers).toEqual([1, 2, 3, 4, "ellipsis2", 10]);
  });
});
