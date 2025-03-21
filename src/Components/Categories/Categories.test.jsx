import React from "react";
import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import "@testing-library/jest-dom";

describe("Categories Component", () => {
  test("renders the Categories component correctly", () => {
    render(<Categories />);

    // Check if the heading is displayed
    expect(screen.getByText(/Explore Our Categories/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore Our Services/i)).toBeInTheDocument();

    // Check if the stats are rendered correctly
    expect(screen.getByText(/400K\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Raw Materials Prices/i)).toBeInTheDocument();

    expect(screen.getByText(/1 Million\+/i)).toBeInTheDocument();
    expect(screen.getByText(/SMEs Empowered/i)).toBeInTheDocument();

    expect(screen.getByText(/500K\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Orders Delivered/i)).toBeInTheDocument();

    expect(screen.getByText(/30\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Countries Served/i)).toBeInTheDocument();
  });

  test("renders all categories", () => {
    render(<Categories />);

    const categories = [
      "Steel",
      "Non Ferrous",
      "Polymers",
      "Chemicals",
      "Energy",
      "Construction",
      "Agri",
      "Fashion",
    ];

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test("renders category cards with icons", () => {
    render(<Categories />);

    // Check if the icon and view all text exist in every card
    const categoryCards = screen.getAllByText(/View All/i);
    expect(categoryCards.length).toBe(8);
  });
});
