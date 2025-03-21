import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBar Component", () => {
  test("renders search input field", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  test("updates search text on input change", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "React" } });
    expect(inputElement.value).toBe("React");
  });

  test("calls handleSearch on search button click", () => {
    console.log = jest.fn(); // Mock console.log
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "Test Search" } });

    const searchButton = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(searchButton);

    expect(console.log).toHaveBeenCalledWith("Search Text:", "Test Search");
  });

  test("popper appears on input focus and disappears on click away", () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.focus(inputElement);

    const recentSearches = screen.getByText(/Recent Searches/i);
    expect(recentSearches).toBeInTheDocument();

    fireEvent.click(document.body); // Simulate click away
    expect(recentSearches).not.toBeInTheDocument();
  });

  test("displays recent search items inside Popper", () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.focus(inputElement);

    expect(screen.getByText(/Recent Searches/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Item 3/i)).toBeInTheDocument();
  });

  test("changes button color style on hover", () => {
    render(<SearchBar />);

    const searchButton = screen.getByRole("button", { name: /Search/i });

    // Check initial color
    expect(searchButton).toHaveStyle(
      "background: linear-gradient(90deg, #07cdbe, #006ff8)"
    );

    // Simulate hover effect
    fireEvent.mouseOver(searchButton);
    expect(searchButton).toHaveStyle(
      "background: linear-gradient(90deg, #07cdbe, #006ff8)"
    );
  });
});
