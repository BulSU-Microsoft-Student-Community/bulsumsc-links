import EventItem from "./EventItem";

const EventList = () => {
  return (
    <div className="flex flex-col my-3 gap-2">
      <h3 className="text-center text-white font-semibold text-md my-2">
        Upcoming Events 📆
      </h3>
      {/* GIT AND CODE */}
      <EventItem
        link="https://www.facebook.com/bulsu.officialmsc/posts/pfbid01RfNdGNqZiRTWYeZ7fvHDjrc56vXB2ofKLh6MDYRyCBmoXL9qYyFgPNhoD7XBFzPl?__cft__[0]=AZX2plCTxPNuXlxceyemqsmG_Q4SI2qT6kY-ikh5ApjABg8nA48v3pE3g79YylAxxLIF3JFt9T8g7hChjpgiVOv_jUStGE2mDqMZMLWpQcFq_tTKd5yhKnVvaRjl646X565GT3QC6puztTaubSk2Wj58As0wBAdKnlI__5d3L3d5_7aTYRecWUmb33vHU6YrOTc&__tn__=%2CO%2CP-R"
        date="08-12"
        subheading="Online Workshop"
      >
        Git and Code: Introduction to Github and C Programming
      </EventItem>
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
