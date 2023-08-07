import { MdConstruction } from "react-icons/md";

const WorkInProgress = () => {
  return (
    <main className="my-5 p-5 border-l-4 border-yellow-500 bg-yellow-100 rounded-md flex flex-col justify-center items-center shadow-md">
      <i className="text-black">
        <MdConstruction className="text-5xl" />
      </i>
      <p className="font-semibold">Links work in progress</p>
    </main>
  );
};

export default WorkInProgress;
