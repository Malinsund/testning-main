import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render an input with a submit button and call onSubmit when Save is clicked", () => {
    const mockOnSubmit = vi.fn();
    render(<TodoForm onSubmit={mockOnSubmit} />);

    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Save");

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Test Todo" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(mockOnSubmit).toHaveBeenCalledWith("Test Todo");
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
