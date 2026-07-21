import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "../Landing_Page/auth/Signup";

describe("Signup Component", () => {
  const renderSignup = () =>
    render(
      <Signup
        data={{ email: "" }}
        updateFormData={jest.fn()}
        next={jest.fn()}
        showLogin={jest.fn()}
      />
    );

  test("renders email input", () => {
    renderSignup();

    const input = screen.getByPlaceholderText("Email Address");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveValue("");
  });

  test("renders next button", () => {
    renderSignup();

    expect(
      screen.getByRole("button", { name: /next step/i })
    ).toBeInTheDocument();
  });

  test("renders login button", () => {
    renderSignup();

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  test("renders image", () => {
    renderSignup();

    expect(screen.getByAltText("Signup")).toBeInTheDocument();
  });
});