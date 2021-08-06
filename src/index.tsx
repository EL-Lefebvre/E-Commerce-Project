/* istanbul ignore file */
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppProviders from "./app/Providers/AppProviders";
import App from "./App";

declare global {
  interface Window {
    appConfig: any;
  }
}

async function getConfig() {
  const response = await fetch("/config.json");
  return response.json();
}

getConfig()
  .then((data) => {
    window.appConfig = data;
  })
  .then(() => {
    ReactDOM.render(
      <AppProviders>
        <App />
      </AppProviders>,
      document.getElementById("root")
    );
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
