import { renderHook, act } from "@testing-library/react";
import { useMultiSelect } from "@/hooks/use-multi-select";

describe("useMultiSelect", () => {
  it("should toggle selection correctly for 'and' logic", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      useMultiSelect({ value: "1,2", logic: "and", onChange })
    );

    act(() => {
      result.current.toggleSelection(3);
    });

    expect(onChange).toHaveBeenLastCalledWith("1,2,3");

    act(() => {
      result.current.toggleSelection(2);
    });

    expect(onChange).toHaveBeenLastCalledWith("1");

    act(() => {
      result.current.toggleSelection(1);
    });

    expect(onChange).toHaveBeenLastCalledWith("2");
  });

  it("should toggle selection correctly for 'or' logic", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      useMultiSelect({ value: "1|2", logic: "or", onChange })
    );

    act(() => {
      result.current.toggleSelection(3);
    });

    expect(onChange).toHaveBeenLastCalledWith("1|2|3");

    act(() => {
      result.current.toggleSelection(2);
    });

    expect(onChange).toHaveBeenLastCalledWith("1");

    act(() => {
      result.current.toggleSelection(1);
    });

    expect(onChange).toHaveBeenLastCalledWith("2");
  });

  it("should clear selections correctly", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      useMultiSelect({ value: "1,2", logic: "and", onChange })
    );

    act(() => {
      result.current.clearSelection();
    });

    expect(onChange).toHaveBeenCalledWith("");
  });
});
