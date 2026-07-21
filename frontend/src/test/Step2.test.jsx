import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Step2 from "../Landing_Page/auth/Step2";

describe("Step2 Component", () => {
  const renderStep2 = () =>
    render(
      <Step2
        data={{ username: "", password: "" }}
        updateFormData={jest.fn()}
        next={jest.fn()}
        back={jest.fn()}
      />
    );

  test("renders heading", () => {
    renderStep2();

    expect(screen.getByText("Security")).toBeInTheDocument();
  });

  test("renders all input fields", () => {
    renderStep2();

    expect(
      screen.getByPlaceholderText("username should be unique:user234")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Create Password")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Confirm Password")
    ).toBeInTheDocument();
  });

  test("renders buttons", () => {
    renderStep2();

    expect(
      screen.getByRole("button", { name: /back/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /signup/i })
    ).toBeInTheDocument();
  });

  test("renders signup image", () => {
    renderStep2();

    const image = screen.getByAltText("Signup");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "../media/images/signup.png"
    );
  });

  test("username input accepts value", () => {
    renderStep2();

    const username = screen.getByPlaceholderText(
      "username should be unique:user234"
    );

    fireEvent.change(username, {
      target: { value: "user123" },
    });

    expect(username).toHaveValue("user123");
  });

  test("password input accepts value", () => {
    renderStep2();

    const password = screen.getByPlaceholderText("Create Password");

    fireEvent.change(password, {
      target: { value: "abcd1234" },
    });

    expect(password).toHaveValue("abcd1234");
  });

  test("confirm password input accepts value", () => {
    renderStep2();

    const confirmPassword = screen.getByPlaceholderText(
      "Confirm Password"
    );

    fireEvent.change(confirmPassword, {
      target: { value: "abcd1234" },
    });

    expect(confirmPassword).toHaveValue("abcd1234");
  });
});