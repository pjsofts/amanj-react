import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../pages/Home";
test("Home text displays", async () => {
  const home = render(<Home />);
  const title = await home.findByTestId("title");
  expect(title.textContent).toBe("Home1");
});
