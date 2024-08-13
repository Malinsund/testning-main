import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should be possible to add a todo and increment the count", () => {
    render(<App />);

    //  Lägg till en todo med texten "Dricker vatten"
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Dricker vatten" },
    });

    // Klicka på "Save"-knappen
    fireEvent.click(screen.getByText("Save"));

    // todo-elementet har lagts till
    expect(screen.getByText("Dricker vatten:")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument(); // Initialt count ska vara 0

    // Klicka på "Count"-knappen två gånger
    fireEvent.click(screen.getByText("Öka")); // Första klicket
    expect(screen.getByText("1")).toBeInTheDocument(); // Räknaren ska vara 1 efter första klicket

    fireEvent.click(screen.getByText("Öka")); // Andra klicket
    expect(screen.getByText("2")).toBeInTheDocument(); // Räknaren ska vara 2 efter andra klicket

    //  Klicka på "Avsluta räknandet"-knappen
    fireEvent.click(screen.getByText("Avsluta räknandet"));
  });

  /* it("should be possible to add a todo", () => {
    render(<App />);

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Antal steg" },
    });

    // Klicka på "Save"-knappen
    fireEvent.click(screen.getByText("Save"));

    // Verifiera att todo-elementet har lagts till
    expect(screen.getByText("Dricker vatten:")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("Antal steg:")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument(); // Initialt count ska vara 0
  }); */
});
