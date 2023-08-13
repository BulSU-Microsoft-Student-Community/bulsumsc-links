import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
const SocialsList = () => {
  return (
    <div className="flex flex-col my-3 gap-2">
      <h3 className="text-center text-white font-semibold text-md my-2">
        Socials 📲
      </h3>
      <a href="https://www.facebook.com/bulsu.officialmsc" target="_blank">
        <div className="bg-white shadow rounded h-[50px] flex flex-row items-center relative">
          <span className="absolute left-2">
            <FaFacebookSquare className="text-3xl text-ms-blue" />
          </span>
          <div className="grow">
            <p className="text-center text-ms-blue">Facebook</p>
          </div>
        </div>
      </a>
      <a
        href="https://github.com/BulSU-Microsoft-Student-Community"
        target="_blank"
      >
        <div className="bg-white shadow rounded h-[50px] flex flex-row items-center relative">
          <span className="absolute left-2">
            <FaGithubSquare className="text-3xl text-ms-blue" />
          </span>
          <div className="grow">
            <p className="text-center text-ms-blue">Github</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialsList;
