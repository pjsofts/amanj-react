import { test, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import Todo from "../pages/Todo/Todo";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../config/query-client";

function TestProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

test("Home text displays", async () => {
  const home = await waitFor(async () => {
    return await render(
      <TestProvider>
        <Todo />
      </TestProvider>
    );
  });
  const title = home.findByTestId("todo-content");

  expect((await title).textContent).toBe("Salam");
});
