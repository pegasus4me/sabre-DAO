import { createFileRoute } from "@tanstack/react-router";
import illustration from "../../assets/presentation.png";
import vaultLogo from "@/assets/vault_logo.svg";
import Filter from "../../components/projects/filter.component";
import Svault from "@/components/projects/Svault.component";
import { SubTitle, Title } from "@/atoms";
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
    <section className="w-[90%] max-w-[1440px] mx-auto my-8 flex flex-col space-y-12">
      <div className="border-b border-[#454545] md:py-16">
        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="w-full md:w-[45%] text-center md:text-left">
            <Title css="" text="Unleash the power of Decentralized VCs" />

            <SubTitle
              css="!font-clash-reg"
              text="Revolutionize investment landscapes with decentralized venture capital, empowering global participation and innovation"
            />
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
        <Filter active={0} upcoming={0} passed={0} />

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[0, 1, 2, 3].map((_, idx) => {
            return (
              <Svault
                key={idx}
                logo={vaultLogo}
                category={"Layer 1"}
                name={"Celestial"}
                description={
                  "celestia is a super fast layer-1 built with a TPS of 40k powered by  ML virtual machine"
                }
                price={" 0.005 usdt / celestia"}
                round={"pre-seed"}
                maxCap={"700,000 usdt"}
                viewMore={() => {}}
                tag={"Live"}
              />
            );
          })}

          {[0, 1, 2, 3].map((_, idx) => {
            return (
              <Svault
                key={idx}
                logo={vaultLogo}
                category={"Layer 1"}
                name={"Celestial"}
                description={
                  "celestia is a super fast layer-1 built with a TPS of 40k powered by  ML virtual machine"
                }
                price={" 0.005 usdt / celestia"}
                round={"pre-seed"}
                maxCap={"700,000 usdt"}
                viewMore={() => {}}
                tag={"Upcoming"}
              />
            );
          })}

          {[0, 1, 2, 3].map((_, idx) => {
            return (
              <Svault
                key={idx}
                logo={vaultLogo}
                category={"Layer 1"}
                name={"Celestial"}
                description={
                  "celestia is a super fast layer-1 built with a TPS of 40k powered by  ML virtual machine"
                }
                price={" 0.005 usdt / celestia"}
                round={"pre-seed"}
                maxCap={"700,000 usdt"}
                viewMore={() => {}}
                tag={"Closed"}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
