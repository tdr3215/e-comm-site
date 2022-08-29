import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "react-router-dom";

import Inventory from "../components/Inventory";

test("renders header", () => {
  render(<Inventory />);
  const headerElement = screen.getByText(/Hello world/i);
  expect(headerElement).toBeInTheDocument();
});
