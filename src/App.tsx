import "./App.css";
import CTAButton from "./components/CTAButton";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialsList from "./components/SocialsList";
// import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="p-5 max-w-[640px] mx-auto">
      <Header />
      <CTAButton />
      <EventList />
      <SocialsList />
      {/* <WorkInProgress /> */}
      <Footer />
    </div>
  );
}

export default App;
