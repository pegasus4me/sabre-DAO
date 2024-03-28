import { Link } from "@tanstack/react-router";
import { ConnectKitButton } from "connectkit";
import img from "../assets/logo.svg";
import Marquee from "react-fast-marquee";

export default function Header(): JSX.Element {
  return (
    <header className="border-b border-[#454545] ">
      <div className="flex max-w-[95%] mx-auto items-center justify-between ">
      <div className="flex gap-5 items-center">
        <div
        className="border-r  border-[#454545] p-2"
        >
        <img src={img} alt="logo" width={150} height={45}
        
        />
        </div>
        
        
        <div className="flex">
          
          <Link
            to="/"
            className="[&.active]:text-white font-clash-reg text-[#717171] text-md text-xl p-5  border-r border-[#454545]"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className=" [&.active]:text-white  font-clash-reg text-[#717171] text-md text-xl p-5  border-r border-[#454545]"
          >
            Projects
          </Link>{" "}
          <Link
            to="/dashboard"
            className=" [&.active]:text-white font-clash-reg text-[#717171] text-md text-xl p-5   border-r border-[#454545]"
          >
            Dashboard
          </Link>
          <Link
            to="/stake"
            className=" [&.active]:text-white font-clash-reg text-[#717171] text-md text-xl p-5   border-r border-[#454545]"
          >
            Stake
          </Link>
        </div>
      </div>
      <ConnectKitButton />
      </div>
      {/* <Marquee
      className="bg-[#F8F8F8] p-3 font-medium"

      >
        Celestia will be featured on Svault on 24/01/2024 after DAO vote stake your $SBR now to increase your purchase power
    </Marquee> */}
    </header>
  );
}
