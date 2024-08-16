import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render an input with a submit button", () => {
    render(<TodoForm onSubmit={vi.fn()} />);

    // Kontrollera att input-fältet och knappen visas
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });
});
