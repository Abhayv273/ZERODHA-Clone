import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Login from "../Landing_Page/auth/Login";

describe("Login Component", () => {
  const renderLogin = () =>
    render(
      <MemoryRouter>
        <Login showSignup={jest.fn()} />
      </MemoryRouter>
    );

  test("renders heading", () => {
    renderLogin();

    expect(screen.getByText("Welcome Back")).toBeInTheDocument();
  });

  test("renders email input", () => {
    renderLogin();

    const email = screen.getByPlaceholderText("Email Address");

    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("type", "email");
    expect(email).toHaveValue("");
  });

  test("renders password input", () => {
    renderLogin();

    const password = screen.getByPlaceholderText("Password");

    expect(password).toBeInTheDocument();
    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveValue("");
  });

  test("renders login button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  test("renders show button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", { name: /show/i })
    ).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    renderLogin();

    const password = screen.getByPlaceholderText("Password");
    const showBtn = screen.getByRole("button", { name: /show/i });

    expect(password).toHaveAttribute("type", "password");

    fireEvent.click(showBtn);

    expect(password).toHaveAttribute("type", "text");

    fireEvent.click(screen.getByRole("button", { name: /hide/i }));

    expect(password).toHaveAttribute("type", "password");
  });

  test("accepts email input", () => {
    renderLogin();

    const email = screen.getByPlaceholderText("Email Address");

    fireEvent.change(email, {
      target: { value: "test@gmail.com" },
    });

    expect(email).toHaveValue("test@gmail.com");
  });

  test("accepts password input", () => {
    renderLogin();

    const password = screen.getByPlaceholderText("Password");

    fireEvent.change(password, {
      target: { value: "123456" },
    });

    expect(password).toHaveValue("123456");
  });

  test("renders create account button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });

  test("renders image", () => {
    renderLogin();

    const image = screen.getByAltText("Illustration");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/media/images/signup.png"
    );
  });
});