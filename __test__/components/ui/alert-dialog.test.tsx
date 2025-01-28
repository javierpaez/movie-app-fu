import { render, screen, fireEvent } from "@testing-library/react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";

describe("AlertDialog Component", () => {
  it("should render AlertDialog and its components", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogAction>Action</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(screen.getByText("Open Dialog")).toBeInTheDocument();

    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Dialog Description")).not.toBeInTheDocument();
  });

  it("should open and close the AlertDialog when triggered", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogAction>Action</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Dialog Description")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Dialog"));

    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog Description")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Dialog Description")).not.toBeInTheDocument();
  });

  it("should trigger the action button on click", () => {
    const mockAction = jest.fn();

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogAction onClick={mockAction}>Action</AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    fireEvent.click(screen.getByText("Open Dialog"));

    fireEvent.click(screen.getByText("Action"));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
