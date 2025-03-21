import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders the header with logo and navigation links", () => {
    render(<Header />);

    // Check for logo
    expect(screen.getByText(/OfBusiness/i)).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText(/Prices/i)).toBeInTheDocument();
    expect(screen.getByText(/News/i)).toBeInTheDocument();
    expect(screen.getByText(/Orders/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Login Now/i)).toBeInTheDocument();
  });

  test("toggles the menu when hamburger icon is clicked", () => {
    render(<Header />);

    // Select the hamburger menu button
    const hamburgerMenu = screen.getByRole("button", { name: /toggle menu/i });

    // Menu should be closed initially
    expect(screen.getByRole("navigation")).not.toHaveClass("open");

    // Click to open menu
    fireEvent.click(hamburgerMenu);
    expect(screen.getByRole("navigation")).toHaveClass("open");

    // Click again to close menu
    fireEvent.click(hamburgerMenu);
    expect(screen.getByRole("navigation")).not.toHaveClass("open");
  });

  test("renders the Subheader component", () => {
    render(<Header />);

    // Ensure Subheader component is rendered
    expect(screen.getByText(/Subheader/i)).toBeInTheDocument();
  });
});
