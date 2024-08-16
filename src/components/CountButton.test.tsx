import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("should render and respond to clicks", () => {
    const mockOnCount = vi.fn();
    render(<CountButton onCount={mockOnCount} />);

    const countButton = screen.getByTestId("count-button");
    expect(countButton).toBeInTheDocument();

    fireEvent.click(countButton);
    expect(mockOnCount).toHaveBeenCalled();
  });
});
