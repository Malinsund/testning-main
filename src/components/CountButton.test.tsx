import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("should call onCount when clicked", () => {
    // Arrange
    const onCount = vi.fn(); // Mocka funktionen
    render(<CountButton onCount={onCount} />);

    // Act
    fireEvent.click(screen.getByText("Öka"));

    // Assert
    expect(onCount).toHaveBeenCalled();
  });
});

/* it("Should increment count when clicked", () => {
    render(<CountButton onCount={() => {}} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/1/);

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/3/);
  }); */
