import { Link } from "@tanstack/react-router";
import { ConnectKitButton } from "connectkit";
import sabreLogo from "../assets/logo.svg";
import sabreIcon from "@/assets/sabre_icon.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { useOutsideClick } from "@/hooks";
// import Marquee from "react-fast-marquee";

const routes = [
  {
    name: "Home",
    to: "/",
  },

  {
    name: "Projects",
    to: "/projects",
  },

  {
    name: "Dashboard",
    to: "/dashboard",
  },

  {
    name: "Stakes",
    to: "/stake",
  },
];

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));
  return (
    <header className="border-b border-[#454545] fixed top-0 w-full left-0 bg-black/50 backdrop-filter backdrop-blur-lg z-50">
      <div className="flex w-[90%] max-w-[1440px] mx-auto items-center justify-between">
        <div className="flex gap-5 items-center">
          <div className="p-2">
            <Link to={"/"}>
              <img src={sabreLogo} alt="logo" className="hidden lg:block " />
              <img src={sabreIcon} alt="logo" className="block lg:hidden" />
            </Link>
          </div>

          <div
            ref={ref}
            className={`absolute ${open ? "left-0 opacity-100" : "-left-[1500px] opacity-0"} transition-all duration-300 ease w-full top-[50px] bg-black/80 flex flex-col lg:static lg:flex lg:flex-row lg:h-auto lg:bg-transparent backdrop-filter backdrop-blur-lg`}
          >
            {routes.map((el, idx) => (
              <Link
                key={idx}
                to={el.to}
                onClick={() => setOpen(false)}
                className="[&.active]:text-white font-clash-reg text-[#717171] text-md text-xl p-5  md:border-l md:border-[#454545] last:md:border-r last:md:border-[#454545]"
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://sabredao.gitbook.io/"
            className="text-white text-[#717171] font-clash-med underline"
          >
            docs
          </a>
          <ConnectKitButton />
          <HiMenuAlt4
            className="text-white text-3xl lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {/* <Marquee className="bg-[#F8F8F8] p-3 font-medium z-40">
        Celestia will be featured on Svault on 24/01/2024 after DAO vote stake
        your $SBR now to increase your purchase power
      </Marquee> */}
    </header>
  );
}
