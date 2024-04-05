import { createFileRoute } from "@tanstack/react-router";
import illustration from "../../assets/presentation.png";
import vaultLogo from "@/assets/vault_logo.svg";
import Filter from "../../components/projects/filter.component";
import { SubTitle, Title } from "@/atoms";
import ProjectsComponent from "@/components/projects/projects_component";
import shadows from "../../assets/shadow.png";
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
        <section className="w-full my-8 flex flex-col space-y-12">
            <div className="border-b border-[#454545] md:py-16">
                <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-center">
                    <div className="w-full md:w-[45%] text-center md:text-left">
                        <Title css="" text="Unleash the power of Decentralized VCs" />

                        <SubTitle
                            css="!font-clash-reg"
                            text="Revolutionize investment landscapes with decentralized venture capital, empowering global participation and innovation"
                        />

                        <img
                            src={shadows}
                            alt="shadows"
                            className="absolute -z-10  w-[40%] top-0 left-0"
                            width={700}
                        />
                        <p className="p-5 font-clash-light text-2xl">
                            Revolutionize investment landscapes with decentralized venture
                            capital, empowering global participation and innovation
                        </p>
                    </div>
                   

                    <figure className="flex justify-center items-center">
                        <img
                            src={illustration}
                            alt="main-illustation"
                            className="w-[80%] lg:w-[100%] object-fit object-center"
                        />
                    </figure>
                </div>
            </div>
            <section className="w-full flex flex-col space-y-6">
                <h2 className="font-clash-reg text-4xl text-white">curated projects</h2>
                <Filter active={1} upcoming={undefined} passed={undefined} />
                <ProjectsComponent />
            </section>
        </section>
  );
}
