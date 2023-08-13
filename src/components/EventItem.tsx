type EventItemProps = {
  link: string;
  subheading?: string;
  date?: string;
  children?: React.ReactNode;
};
const EventItem: React.FC<EventItemProps> = ({
  link,
  children,
  subheading,
  date,
}) => {
  return (
    <a href={link} target="_blank">
      <div className="bg-white px-6 py-3 rounded-lg shadow border-2 border-green-500">
        <p className="text-center text-sm font-semibold text-ms-blue sm:text-lg">
          {children || "Empty Event Item"}
        </p>
        {subheading || date ? (
          <div className="flex flex-row justify-between items-center text-sm text-gray-500 mt-2 pt-2 border-t">
            <span className="">{subheading}</span>
            <div className="bg-red-400 text-white py-0.5 px-2 rounded">
              {date}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </a>
  );
};

export default EventItem;
