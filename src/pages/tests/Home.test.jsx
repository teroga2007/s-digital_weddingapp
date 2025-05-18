import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Home", () => {
  it("muestra los nombres de la pareja", () => {
    render(<Home />);
    expect(screen.getByText(/Nicole & Marcial/i)).toBeInTheDocument();
  });

  it("muestra la fecha de la boda", () => {
    render(<Home />);
    expect(screen.getByText(/28 de febrero 2025/i)).toBeInTheDocument();
  });

  it("muestra el botón para ver invitación", () => {
    render(<Home />);
    const button = screen.getByRole("link", { name: /ver invitación/i });
    expect(button).toBeInTheDocument();
  });
});
