import "./App.css";
import Header from "./components/Header";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="parent w-full h-screen p-4">
      <div className="max-w-[640px] mx-auto">
        <Header />
        <WorkInProgress />
      </div>
    </div>
  );
}

export default App;
