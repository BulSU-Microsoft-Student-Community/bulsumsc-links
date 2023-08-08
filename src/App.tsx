import "./App.css";
import EventItem from "./components/EventItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="p-5 max-w-[640px] mx-auto">
      <Header />
      <div className="flex flex-col my-3">
        <h3 className="text-center text-white font-semibold text-md">
          Upcoming Events 📆
        </h3>
        <EventItem
          link="https://www.facebook.com/bulsu.officialmsc/posts/290388803498900"
          date="08-29"
          subheading="Pitching Competition"
        >
          Ctrl+Alt+Innovate: Unleashing Tech Brilliance
        </EventItem>
      </div>
      <WorkInProgress />
      <Footer />
    </div>
  );
}

export default App;
