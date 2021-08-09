import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { getStore, history } from "../store/store";
import ErrorBoundary from "../../stories/ErrorBoudary/ErrorBoundary";
const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={getStore()}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

export default AppProviders;
