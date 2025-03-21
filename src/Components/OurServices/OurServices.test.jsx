import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ Import jest-dom
import OurServices from "./OurServices";

describe("OurServices Component", () => {
  test("renders the component without crashing", () => {
    render(<OurServices />);
    expect(screen.getByText(/Buy & Sell With Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Raw Material Prices/i)).toBeInTheDocument();
  });

  test("renders the correct number of services", () => {
    render(<OurServices />);
    const serviceItems = screen.getAllByText(/Know More/i);
    expect(serviceItems.length).toBe(5);
  });

  test("renders service names and descriptions", () => {
    render(<OurServices />);
    expect(screen.getByText("Buy & Sell With Us")).toBeInTheDocument();
    expect(screen.getByText("Raw Material Prices")).toBeInTheDocument();
    expect(screen.getByText("Raw Material News")).toBeInTheDocument();
    expect(screen.getByText("Growth With Credit")).toBeInTheDocument();
    expect(screen.getByText("Industry Digital First")).toBeInTheDocument();
  });

  test("renders service icons", () => {
    render(<OurServices />);
    expect(screen.getByTestId("ShoppingCartOutlinedIcon")).toBeInTheDocument();
    expect(screen.getByTestId("FactoryIcon")).toBeInTheDocument();
    expect(screen.getByTestId("LocalShippingIcon")).toBeInTheDocument();
    expect(screen.getByTestId("PublicIcon")).toBeInTheDocument();
    expect(screen.getByTestId("FactoryOutlinedIcon")).toBeInTheDocument();
  });

  test("renders 'Know More' links for each service", () => {
    render(<OurServices />);
    const knowMoreLinks = screen.getAllByText(/Know More/i);
    expect(knowMoreLinks.length).toBe(5);
  });
});
