import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Subheader from "./SubHeader";
import "@testing-library/jest-dom";

describe("Subheader Component", () => {
  test("renders subheader links", () => {
    render(<Subheader />);

    // Check if the main categories are rendered
    expect(screen.getByText("All Categories")).toBeInTheDocument();
    expect(screen.getByText("Mild Steel")).toBeInTheDocument();
    expect(screen.getByText("Non Ferrous")).toBeInTheDocument();
    expect(screen.getByText("Polymers & Packaging")).toBeInTheDocument();
    expect(screen.getByText("Chemicals")).toBeInTheDocument();
    expect(screen.getByText("Energy & Petroleum")).toBeInTheDocument();
    expect(screen.getByText("Stainless Steel")).toBeInTheDocument();
    expect(screen.getByText("Pipes")).toBeInTheDocument();
  });

  test("shows modal on hover and hides it on mouse leave", async () => {
    render(<Subheader />);

    const categoryLink = screen.getByText("All Categories");
    fireEvent.mouseEnter(categoryLink);

   await waitFor(() => expect(screen.getByText(...)).toBeInTheDocument());

    fireEvent.mouseLeave(categoryLink);

    await waitFor(() =>
      expect(screen.queryByText("Mild Steel")).not.toBeInTheDocument()
    );
  });

  test("changes active nested link on click", () => {
    render(<Subheader />);

    const categoryLink = screen.getByText("All Categories");
    fireEvent.mouseEnter(categoryLink);

    const nestedLink = screen.getByText("Mild Steel");
    fireEvent.click(nestedLink);

    expect(nestedLink).toHaveClass("active");
  });

  test("renders product links", () => {
    render(<Subheader />);

    fireEvent.mouseEnter(screen.getByText("All Categories"));

    expect(screen.getByText("CRC")).toBeInTheDocument();
    expect(screen.getByText("GI Coil")).toBeInTheDocument();
    expect(screen.getByText("HR Plate")).toBeInTheDocument();
    expect(screen.getByText("HRC")).toBeInTheDocument();
  });

  test("renders city links and handles clicks", () => {
    render(<Subheader />);

    fireEvent.mouseEnter(screen.getByText("All Categories"));

    const cityLink = screen.getByText("City 1");
    fireEvent.click(cityLink);

    expect(cityLink).toHaveClass("active");
  });

  test("handles mouse leave timeout", async () => {
    jest.useFakeTimers();

    render(<Subheader />);

    const categoryLink = screen.getByText("All Categories");
    fireEvent.mouseEnter(categoryLink);

    await waitFor(() =>
      expect(screen.getByText("Mild Steel")).toBeInTheDocument()
    );

    fireEvent.mouseLeave(categoryLink);
    jest.advanceTimersByTime(200);

    await waitFor(() =>
      expect(screen.queryByText("Mild Steel")).not.toBeInTheDocument()
    );

    jest.useRealTimers();
  });
});
