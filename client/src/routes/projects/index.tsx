import { createFileRoute } from "@tanstack/react-router";
import illustration from "../../assets/presentation.png";
import shadows from "../../assets/shadow.png";
import { Link } from "@tanstack/react-router";
import Filter from "../../components/projects/filter.component";
import Svault from "@/components/projects/Svault.component";
/**
 * Renders a React component that displays "Project Page".
 *
 * @return {JSX.Element} A React component.
 */

export const Route = createFileRoute("/projects/")({
  component: Projects,
});

export default function Projects() {
  return (
    <section className="m-auto text-white mt-20">
      <div className="border-b border-[#454545]">
        <div className="flex justify-between  w-[90%] mx-auto">
          <div className="flex md:w-[40%] flex-col ">
            <h1 className="md:text-8xl text-5xl font-clash-med p-5 ">
              Unleash the power of Decentralized VCs
            </h1>
            <img
              src={shadows}
              alt="shadows"
              className="absolute -z-10 w-[40%] top-0 left-0"
              width={700}
            />
            <p className="p-5 font-clash-light text-2xl">
              Revolutionize investment landscapes with decentralized venture
              capital, empowering global participation and innovation
            </p>
          </div>
          <div className="hidden md:block">
            <img src={illustration} alt="main-illustation" width={700} />
          </div>
        </div>
      </div>
      <section className="p-6">
        <h2 className="font-clash-reg text-4xl p-5 max-w-[90%] mx-auto">
          curated projects
        </h2>
        <Filter active={0} upcoming={0} passed={0} />
      
      </section>
    </section>
  );
}
