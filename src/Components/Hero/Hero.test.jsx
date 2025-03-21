import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  test("renders the hero heading correctly", () => {
    render(<Hero />);

    // Check for the main heading
    expect(
      screen.getByText(
        /India's Largest B2B Raw Materials Procurement & Credit Platform/i
      )
    ).toBeInTheDocument();
  });

  test("renders the search bar", () => {
    render(<Hero />);

    // Check if the SearchBar component is rendered
    const searchInput = screen.getByPlaceholderText(/Search/i);
    expect(searchInput).toBeInTheDocument();
  });

  test("renders all product names with icons", () => {
    render(<Hero />);

    const products = [
      "Aluminium Ignot",
      "Bitumen",
      "Methanol",
      "PVC",
      "Secondary TMT",
    ];

    products.forEach((product) => {
      expect(screen.getByText(product)).toBeInTheDocument();
    });

    // Check if icons are rendered for each product
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBe(5); // Ensure all icons are rendered
  });
});
