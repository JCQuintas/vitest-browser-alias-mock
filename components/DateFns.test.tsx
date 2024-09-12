import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import DateFns from "./DateFns.js";

test("should work", async () => {
  render(<DateFns />);

  const date = screen.getByTestId("test");

  expect(date).toBeInTheDocument();
});
