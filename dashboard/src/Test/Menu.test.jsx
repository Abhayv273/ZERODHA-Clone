import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Menu from "../components/Menu";

// Mock ProfileMenu
jest.mock("../components/ProfileMenu", () => () => (
  <div>Mock Profile Menu</div>
));

describe("Menu Component", () => {
  const renderMenu = () =>
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

  test("renders logo", () => {
    renderMenu();

    const logo = screen.getByAltText("logopng");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });

  test("renders all menu items", () => {
    renderMenu();

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("Holdings")).toBeInTheDocument();
    expect(screen.getByText("Positions")).toBeInTheDocument();
    expect(screen.getByText("Funds")).toBeInTheDocument();
    expect(screen.getByText("Apps")).toBeInTheDocument();
  });

  test("renders ProfileMenu", () => {
    renderMenu();

    expect(screen.getByText("Mock Profile Menu")).toBeInTheDocument();
  });

  test("Dashboard is selected by default", () => {
    renderMenu();

    expect(screen.getByText("Dashboard")).toHaveClass("selected");
  });

  test("clicking Orders changes selected menu", () => {
    renderMenu();

    fireEvent.click(screen.getByText("Orders"));

    expect(screen.getByText("Orders")).toHaveClass("selected");
  });

  test("clicking Holdings changes selected menu", () => {
    renderMenu();

    fireEvent.click(screen.getByText("Holdings"));

    expect(screen.getByText("Holdings")).toHaveClass("selected");
  });

  test("clicking Positions changes selected menu", () => {
    renderMenu();

    fireEvent.click(screen.getByText("Positions"));

    expect(screen.getByText("Positions")).toHaveClass("selected");
  });

  test("clicking Funds changes selected menu", () => {
    renderMenu();

    fireEvent.click(screen.getByText("Funds"));

    expect(screen.getByText("Funds")).toHaveClass("selected");
  });

  test("clicking Apps changes selected menu", () => {
    renderMenu();

    fireEvent.click(screen.getByText("Apps"));

    expect(screen.getByText("Apps")).toHaveClass("selected");
  });
});