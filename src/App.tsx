import "./App.css";
import MainNav from "./components/MainNav";
import { Routes } from "./app/Routes/Routes";
function App() {
  return (
    <div className="App">
      <MainNav />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
