import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Renders the Header heading and navigates to booking", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  // Ensure Reserve Table link is present
  const reserveLink = screen.getByRole("link", { name: /Reserve Table/i });
  expect(reserveLink).toBeInTheDocument();

  // Click the Reserve Table link and assert booking form appears by label
  fireEvent.click(reserveLink);

  const dateInput = screen.getByLabelText(/Choose Date/i);
  expect(dateInput).toBeInTheDocument();
});
