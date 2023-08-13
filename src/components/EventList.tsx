import EventItem from "./EventItem";

const EventList = () => {
  return (
    <div className="flex flex-col my-3 gap-2">
      <h3 className="text-center text-white font-semibold text-md my-2">
        Upcoming Events 📆
      </h3>
      {/* CTRL + ALT + INNOVATE */}
      <EventItem
        link="https://www.facebook.com/bulsu.officialmsc/posts/290388803498900"
        date="08-29"
        subheading="Pitching Competition"
      >
        Ctrl+Alt+Innovate: Unleashing Tech Brilliance
      </EventItem>
    </div>
  );
};

export default EventList;
