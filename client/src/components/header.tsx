import { Link } from "@tanstack/react-router";
import { ConnectKitButton } from "connectkit";
import img from "../assets/logoVar.svg";
export default function Header(): JSX.Element {
  return (
    <header className=" p-2">
      <div className="flex max-w-[90%] mx-auto items-center justify-around">
      <div className="flex gap-5 p-2">
        <img src={img} alt="logo" width={160} height={45} />
        
      </div>
      <div className="p-2 flex gap-4 ">
          <Link
            to="/"
            className="[&.active]:font-semibold [&.active]:text-[#423FFF]  text-black text-md font-semibold font-poppins"
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className="[&.active]:font-semibold [&.active]:text-[#423FFF]  text-black text-md font-semibold font-poppins"
          >
            PROJECTS
          </Link>{" "}
          <Link
            to="/dashboard"
            className="[&.active]:font-semibold [&.active]:text-[#423FFF] text-black text-md font-semibold font-poppins"
          >
            DASHBOARD
          </Link>
        </div>

      <ConnectKitButton />
      </div>
      
    </header>
  );
}
