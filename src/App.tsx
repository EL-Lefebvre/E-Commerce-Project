import "./App.css";
import MainNav from "./components/MainNav";
import { Routes } from "./app/Routes/Routes";

function App() {
  return (
    <>
      <MainNav />
      <main>
        <div className="App">
          <Routes />
        </div>
      </main>
    </>
  );
}

export default App;
