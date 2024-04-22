import { Link } from "@tanstack/react-router";
import sabreLogo from "../assets/logo.svg";
import sabreIcon from "@/assets/sabre_icon.svg";
import { Socials } from "@/atoms";

export default function Footer() {
  return (
    <footer className="py-16">
      <section className="border-t border-[#454545] w-[90%] max-w-[1440px] mx-auto">
        <div className="p-4 flex flex-col space-y-4 md:flex-row justify-between items-center">
          <Link to={"/"}>
            <img src={sabreLogo} alt="logo" className="hidden lg:block " />
            <img src={sabreIcon} alt="logo" className="block lg:hidden" />
          </Link>
          <p className="text-[#717171]">© 2024 Sabre</p>
          <div>
            <p className="text-[#717171] text-sm font-clash-reg">
              contact us at{" "}
              <span className="text-[#423FFF]">hello@sabre.com</span>
            </p>
            <Socials website={""} twitter={""} docs={""} />
          </div>
        </div>
      </section>
    </footer>
  );
}
