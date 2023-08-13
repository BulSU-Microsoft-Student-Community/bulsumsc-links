import EventItem from "./EventItem";

const EventList = () => {
  return (
    <div className="flex flex-col my-3 gap-2">
      <h3 className="text-center text-white font-semibold text-md my-2">
        Upcoming Events 📆
      </h3>
      {/* CTRL + ALT + INNOVATE */}
      <EventItem
        link="https://forms.office.com/r/yNkXkFayEA"
        date="08-29"
        subheading="Pitching Competition"
      >
        PitchTech Bootcamp: Empowering Tech Visionaries to Conquer the Stage
      </EventItem>
    </div>
  );
};

export default EventList;
