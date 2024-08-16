import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EndButton from "./EndButton";

describe("EndButton", () => {
  it("should render correctly", () => {
    render(<EndButton onEnd={vi.fn()} />);
    expect(screen.getByRole("button")).toHaveTextContent("Avsluta räknandet");
  });

  it("should call onEnd when clicked", () => {
    const onEnd = vi.fn();
    render(<EndButton onEnd={onEnd} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onEnd).toHaveBeenCalled();
  });
});
// VARFÖR FUNGERAR TESTERNA VAR OCH EN FÖR SIG MEN INTE TILLSAMMANS???

/* describe("EndButton", () => {
  
}); */

/// HÄR UNDER ÄR ORIGINALET
/*   describe("EndButton", () => {
  it("should render correctly", () => {
    render(<EndButton onEnd={() => {}} />);
    screen.debug();
    expect(screen.getByRole("button")).toHaveTextContent("Avsluta räknandet");
  });
  it("should call onEnd when clicket", () => {
    const onEnd = vi.fn();

    fireEvent.click(screen.getByText("Avsluta räknandet"));


    expect(onEnd).toHaveBeenCalled();
  });
});   */
