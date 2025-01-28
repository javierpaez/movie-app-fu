import { render, screen } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(
      <Avatar className="custom-avatar">
        <AvatarImage className="custom-avatar-image" src="https://example.com/avatar.jpg" alt="Avatar image" />
        <AvatarFallback className="custom-avatar-fallback">AB</AvatarFallback>
      </Avatar>
    );

    const avatarFB = screen.getByText("AB");

    expect(avatarFB).toBeInTheDocument();
  });
});
