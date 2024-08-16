import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should be possible to add a todo and increment the count", () => {
    render(<App />);
    console.log(screen.debug());

    expect(screen.getByText("🥃 Shotta 🥃")).toBeInTheDocument();

    //  Lägg till en todo med texten "Dricker vatten"
    fireEvent.input(screen.getByTestId("only-input"), {
      target: { value: "Dricker vatten" },
    });

    // Klicka på "Save"-knappen
    fireEvent.click(screen.getByTestId("save-button"));

    // Kontrollera att todo har lagts till och visas i h3
    expect(
      screen.getByRole("heading", { level: 3, name: /Dricker vatten: 0/ })
    ).toBeInTheDocument();

    // Öka räknaren
    fireEvent.click(screen.getByTestId("count-button"));
    expect(
      screen.getByRole("heading", { level: 3, name: /Dricker vatten: 1/ })
    ).toBeInTheDocument();

    // Avsluta räknandet
    fireEvent.click(screen.getByTestId("end-button"));

    // Kontrollera att räknandet avslutades och att todo flyttats till en span
    expect(screen.getByText(/Dricker vatten: 1/)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();

    expect(
      screen.getByText("Såhär många shots varje gång...")
    ).toBeInTheDocument();

    expect(screen.getByTestId("count-button")).toBeInTheDocument();
    expect(screen.getByTestId("end-button")).toBeInTheDocument();
  });
  it("should correctly increment count when CountButton is clicked", () => {
    // Lägg till en todo med texten "Dricker vatten"
    fireEvent.input(screen.getByTestId("only-input"), {
      target: { value: "Dricker vatten" },
    });

    // Klicka på "Save"-knappen
    fireEvent.click(screen.getByTestId("save-button"));

    // Klicka på "CountButton" flera gånger
    const countButton = screen.getByTestId("count-button");
    fireEvent.click(countButton);
    fireEvent.click(countButton);

    // Kontrollera att räknaren har ökat till 2
    expect(
      screen.getByRole("heading", { level: 3, name: /Dricker vatten: 2/ })
    ).toBeInTheDocument();
  });
});
