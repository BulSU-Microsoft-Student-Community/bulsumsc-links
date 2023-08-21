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
        date="Aug 29"
        subheading="Pitching Bootcamp"
      >
        PitchTech Bootcamp: Empowering Tech Visionaries to Conquer the Stage
      </EventItem>
      <EventItem
        link="https://forms.office.com/r/6J8VX5vQxN"
        date="Sep 9-10"
        subheading="Robotics Workshop"
      >
        RoboQuest: Journey into Robotics - The First Bulacan Wide Robotics
        Workshop! 🤖
      </EventItem>
    </div>
  );
};

export default EventList;
