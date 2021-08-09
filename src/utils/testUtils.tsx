/* istanbul ignore file */
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { history, getStore } from "../app/store/store";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={getStore()}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, { wrapper: AllTheProviders, ...options } as RenderOptions);
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
