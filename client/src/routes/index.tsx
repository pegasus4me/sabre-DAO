import { Title, SubTitle, Button } from "@/atoms";
import { createFileRoute } from "@tanstack/react-router";
import rocketLaunch from "@/assets/rocket_launch.png";
import aboutImage from "@/assets/about.png";
import workImage from "@/assets/work.png";
import collectionImg from "@/assets/collection.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const process = [
  "Submit a proposal outlining your company and fundraising goals.",
  "The DAO community members reviews your proposal and vote on its viability.",
  "If approved, your company create a fundraising campaign within the Svault.",
  "Investors from the community contribute funds directing to the Svault.",
];

const values = [
  {
    title: "Decentralization",
    desc: "Sabre DAO operates on a decentralized model, differing from traditional venture capital (VC) platforms.",
  },
  {
    title: "Innovation in Investment",
    desc: "Through its unique approach and the use of the Svault mechanism, Sabre DAO is innovating how investments are made, particularly in early-stage funding rounds.",
  },
  {
    title: "Community Empowerment",
    desc: "By enabling the community to actively participate in fundraising activities, Sabre DAO empowers individual investors.",
  },
];

export default function Home() {
  return (
    <div className="">
      <section className="bg-home-hero bg-no-repeat bg-auto h-screen mt-44">
        <div className="pt-16 w-[90%] max-w-[1440px] mx-auto">
          <div className="flex flex-col space-y-24 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col space-y-6">
              <div>
                <Title
                  css="font-clash-med"
                  text="Unleash the power of Decentralized VCs"
                />

                <SubTitle
                  css="!font-clash-light"
                  text="Revolutionize investment landscapes with decentralized venture capital, empowering global participation and innovation"
                />
              </div>

              <div className="w-full lg:w-[150px]">
                <Button
                  text={"Browse Vaults"}
                  variant={"filled"}
                  type="button"
                />
              </div>
            </div>

            <figure className="w-full lg:w-[45%] flex justify-center items-center">
              <img
                src={rocketLaunch}
                alt="main-illustation"
                className="w-[50%] lg:w-[80%] object-fit object-center"
              />
            </figure>
          </div>
        </div>
      </section>

      <div className="pb-16 w-[90%] max-w-[1440px] mx-auto">
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            <Title css="font-clash-med" text="About SabreDAO" />

            <SubTitle
              css="!font-clash-light"
              text="Sabre is a decentralized VC platform led by a DAO . Unlike typical VC where the token received after the fundraising are decentralized for single entity , Sabre uses completely different approach where the community is the actor of the fundraising Svault, we allow everyone to invest in early rounds without minimum amount required. By using a decentralized approach, Sabre is able to provide a more  democratic and fair way for companies to raise funds. Rather than restricting access to a select few individual or institutions.  in essence, Sabre is empowering the community and enabling more people to participate in the investment process, which is a refreshing change in the VCs landscape."
            />
          </div>

          <figure className="w-full lg:w-[45%] flex justify-center items-center">
            <img
              src={aboutImage}
              alt="main-illustation"
              className="w-full lg:w-[100%] object-fit object-center"
            />
          </figure>
        </div>
      </div>

      <div className="py-16 w-[90%] max-w-[1440px] mx-auto">
        <div className="bg-black/80 p-6 rounded-lg flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full lg:w-[80%] flex flex-col space-y-4 text-center lg:text-left">
            <p className="font-clash-med text-5xl lg:text-7xl text-white leading-tight">
              Where VC world meet{" "}
              <span className="bg-gradient-to-r from-[#152DEC] to-[#5D649A] text-transparent bg-clip-text">
                decentralisation
              </span>
            </p>
            <div className="w-full lg:w-[150px]">
              <Button text={"Explore"} variant={"filled"} type="button" />
            </div>
          </div>

          <figure className="flex justify-center items-center">
            <img
              src={collectionImg}
              alt="main-illustation"
              className="w-[100px] object-fit object-center"
            />
          </figure>
        </div>
      </div>

      <section className="py-16 flex flex-col space-y-12">
        <div className="text-center w-full">
          <Title css="font-clash-med w-full" text="Core Values" />
          <SubTitle
            css="!font-clash-light"
            text="Below are the core values of SabreDAO."
          />
        </div>

        <div className="w-[90%] max-w-[1440px] mx-auto">
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full grid grid-flow-row grid-cols-value_grid gap-8">
              {values.map((el, id) => {
                return (
                  <div
                    key={id}
                    className="border border-white/10 w-full h-[225px] flex flex-col space-y-2 justify-center items-center rounded-lg bg-black/20 backdrop-filter backdrop-blur-lg"
                  >
                    <p className="text-white text-3xl font-clash-med">
                      {el.title}
                    </p>

                    <p className="text-white/40 font-poppins font-light w-[80%] text-center">
                      {el.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex flex-col space-y-12">
        <figure className="relative w-full">
          <img
            src={workImage}
            alt="how_sabredao_works"
            className="bg-cover w-full h-[150px]"
          />
          <div className="!absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-center w-full">
            <Title css="font-clash-med w-full" text="How sabreDAO Works" />
            <SubTitle
              css="!font-clash-light"
              text="Below are the Step by step explanation of the fundraising process on SabreDAO"
            />
          </div>
        </figure>

        <div className="w-[90%] max-w-[1440px] mx-auto">
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full grid grid-flow-row grid-cols-work_grid gap-8">
              {process.map((el, id) => {
                return (
                  <div
                    key={id}
                    className="border border-[#3857F5] w-full h-[225px] flex flex-col space-y-4 justify-center items-center rounded-lg bg-black/20 backdrop-filter backdrop-blur-lg"
                  >
                    <div className="text-white text-2xl bg-[#3857F5] font-clash-med w-[40px] h-[40px] rounded-full flex justify-center items-center">
                      <p>{id + 1}</p>
                    </div>
                    <p className="text-white/40 font-poppins font-light w-[80%] text-center">
                      {el}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
