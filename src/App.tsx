import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="parent w-full h-screen p-4">
      <div className="max-w-[640px] mx-auto">
        <Header />
        <main></main>
      </div>
    </div>
  );
}

export default App;
