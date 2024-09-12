import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import DateFnsV3 from "./DateFnsV3.js";

// Mock works in jsdom but not in browser
// vi.mock('date-fns/addHours', ()=>({addHours}))
// vi.mock('date-fns/parse', ()=>({parse}))

test("should work", async () => {
  render(<DateFnsV3 />);

  const date = screen.getByTestId("test");

  expect(date).toBeInTheDocument();
});
