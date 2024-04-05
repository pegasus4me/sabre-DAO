import Svault from "./Svault.component.tsx";
import SabreLogo from "../../assets/Svault_logo.svg";
import { useNavigate } from "@tanstack/react-router";
import { FaRegFolderOpen } from "react-icons/fa6";



export default function ProjectsComponent() {


  function filterSvaults(): void {
    // query Svaults contracts if the Svault function are true I show it on the open section
    // else on closed section
  }

  const navigate = useNavigate({ from: "/projects" });

  return (
    <section className="mt-5 p-2 w-[90%] mx-auto">
      <div className="p-4 mb-4">
        <h2 className="text-3xl font-clash-reg mb-5 text-white">Active Svaults</h2>
        <div className="border  border border-borderLine/20 p-4 rounded-lg border-dashed">
          <Svault
            tier={"Tier 1"}
            logo={SabreLogo}
            tag={"Live"}
            category={"decentralised VC"}
            name={"Sabre DAO"}
            description={"Sabre dao is a decentralised VC allowing everyone to invest on early projects rounds and get tokens at a good premium price. This"}
            price={"0.004"}
            round={"private"}
            maxCap={"800.00K"}
            viewMore={async () => await navigate({ to: "/projects/sabre" })}
          />
        </div>

      </div>
      <div className="p-4 mb-4">
        <h2 className="text-3xl font-clash-reg mb-5 text-white">Closed Svaults</h2>
        <div className="flex items-center justify-center  border border-borderLine/20 p-4 rounded-lg border-dashed min-h-[300px]">
          <p className="text-3xl text-[#454545] flex gap-4 font-clash-med">No closed Svaults <FaRegFolderOpen className="text-[#454545] text-5xl" /></p>
        </div>

      </div>
    </section>
  );
}
/**
 * navigate({
            to : "/projects/sabre"
 */