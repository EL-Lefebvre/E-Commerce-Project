import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

global.console.error = jest.fn();

const error = new TypeError("error message");
const Component = () => <h1>All good</h1>;
const Error = () => {
  // @ts-ignore
  throw error;
};

describe("ErrorBoundary", () => {
  it("should render child component", () => {
    render(
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    );

    expect(screen.findByRole("heading", { name: "All good" }));
  });

  it("should render error", () => {
    render(
      <ErrorBoundary>
        <Error />
      </ErrorBoundary>
    );
    expect(screen.findByRole("heading", { name: "Something went wrong." }));
    expect(global.console.error).toHaveBeenCalledWith(error);
  });
});
