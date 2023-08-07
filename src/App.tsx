import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="p-5 max-w-[640px] mx-auto">
      <Header />
      <WorkInProgress />
      <Footer />
    </div>
  );
}

export default App;
