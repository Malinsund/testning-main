import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EndButton from "./EndButton";

describe("EndButton", () => {
  it("should render correctly", () => {
    render(<EndButton onEnd={() => {}} />);
    expect(screen.getByRole("button")).toHaveTextContent("Avsluta räknandet");
  });
});
