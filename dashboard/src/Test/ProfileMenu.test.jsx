import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileMenu from "../components/ProfileMenu";

const mockLogout = jest.fn();

jest.mock("../components/AuthContext", () => ({
  useAuth: () => ({
    user: {
      firstName: "Abhay",
      lastName: "Verma",
      username: "abhay123",
      occupation: "Software Developer",
      email: "abhay@gmail.com",
    },
    logout: mockLogout,
  }),
}));

describe("ProfileMenu Component", () => {
  beforeEach(() => {
    mockLogout.mockClear();
  });

  test("renders username", () => {
    render(<ProfileMenu />);

    expect(screen.getByText("abhay123")).toBeInTheDocument();
  });

  test("renders initials", () => {
    render(<ProfileMenu />);

    expect(screen.getAllByText("AV")[0]).toBeInTheDocument();
  });

  test("opens drawer on profile click", () => {
    render(<ProfileMenu />);

    fireEvent.click(screen.getByText("abhay123"));

    expect(screen.getByText("Abhay Verma")).toBeInTheDocument();
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("abhay@gmail.com")).toBeInTheDocument();
  });

  test("drawer opens and closes", () => {
    render(<ProfileMenu />);

    const drawer = screen.getByTestId("drawer");

    expect(drawer).toHaveStyle("right: -320px");

    fireEvent.click(screen.getByText("abhay123"));

    expect(drawer).toHaveStyle("right: 0");

    fireEvent.click(screen.getByText("✕"));

    expect(drawer).toHaveStyle("right: -320px");
  });

  test("calls logout when Logout button is clicked", () => {
    render(<ProfileMenu />);

    fireEvent.click(screen.getByText("abhay123"));

    fireEvent.click(
      screen.getByRole("button", { name: /logout/i })
    );

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});