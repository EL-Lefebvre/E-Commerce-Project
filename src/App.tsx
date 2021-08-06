import "./App.css";
import MainNav from "./components/MainNav";
import { Routes } from "./app/Routes/Routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  const historyInstance = createBrowserHistory();
  return (
    <Router history={historyInstance}>
      <MainNav />
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
