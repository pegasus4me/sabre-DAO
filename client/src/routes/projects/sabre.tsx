import { useState, useEffect, InputHTMLAttributes } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Vault } from "@/components/projects/Vault.component";
import { useReadContract } from "wagmi";
import { Engine_abi as abi } from "@/config/Engine.abi";
import { useBalance } from "wagmi";
import { TierTag } from "@/atoms";
import { Socials } from "@/atoms";
import logo from "../../assets/Svault_logo.svg";
import { Invest } from "@/lib/web3";
import { _date } from "@/lib/utils";
import shadow from "../../assets/shadow.png"

export const Route = createFileRoute("/projects/sabre")({
  component: SabrePage,
});


function SabrePage() {
  const [value, setValue] = useState<string>("0");
  const [tokenStakedByUser, setTokenStakedByUser] = useState<bigint>(BigInt(0));
  const [totalTokenStaked, setTotalTokenStaked] = useState<bigint>(BigInt(0));
  async function getSBRInformations(): Promise<void> {
    try {

      // get the total staked by the user
      // get the total staked on the pool
      // update the state
      // send it with the function Invest

    } catch (error: any) {

    }

  }

  return (
    <section className="">
      <div className="p-5 text-white">
        <Link to="/projects" className="font-clash-reg">
          <span className="underline text-[#717171]">go back to </span>/projects
        </Link>
      </div>
      <section className=" p-3 text-white flex justify-between  gap-5 flex-wrap ">
        <div className="grow-[2]">
          <img src={shadow} alt="" className="absolute -z-10  w-[40%] top-0 left-0" />
          <div className="flex gap-5 items-center ">

            <div>
              <img src={logo} alt="sabre_logo" />
            </div>
            <div>
              <TierTag tag={"Tier 1"} />
              <h1 className="font-clash-med text-7xl">Sabre DAO</h1>
              <Socials website={""} twitter={""} discord={""} docs={""} tokenomics={""} />
              <h3 className="font-clash-reg text-2xl">Decentralised VC</h3>
            </div>
          </div>
          {/* project description section on left side */}
          <section className="mt-10 max-w-xl">
            <div className="flex max-w-xl p-4 flex-col space-y-5">
              <h2 className="font-clash-med text-5xl">What is Sabre ?</h2>
              <p className="font-clash-light">Sabre is an decentralised VC platform led by a DAO. Unlike typical VC  where the tokens received after the fundraising are centralized for a single entity , Sabre uses a completely different approach where the community is the actor of the fundraising, thanks to the Svault, we allow everyone to invest in early rounds without mimum amount required.</p>

              <h2 className="font-clash-med text-3xl">Why this is important for us ?</h2>
              <p className="font-clash-light">By using a decentralized approach, Sabre is able to provide a more democratic and fair way for companies to raise funds. Rather than restricting access to a select few individuals or institutions. In essence, Sabre is empowering the community and enabling more people to participate in the investment process, which is a refreshing change in the VCs landscape.</p>
              <h2 className="font-clash-med text-3xl">The web3 philosophy ?</h2>
              <p className="font-clash-light">Unlike Web2, web3 philosophy is transparency, inclusion, and fairness everyone can get part of the cake, no need to be someone, and everyone is equal.
                Sabre brings this philosophy when it comes to project investments, allowing everyone to be an early investor. we believe that a decentralized form of investment power is more beneficial for the projects because they will not depend on one centralized entity but an entire community behind</p>
            </div>
          </section>
        </div>
        <div className="grow">
          <Vault
            name="sabre"
            vesting={"3 months cliff, then 5 months linear vesting "}
            raisingGoal={600000}
            round_start={_date(1714737419)}
            round_end={_date(1715498536)}
            launchDate={'Q4 2024'}
            timestamp_start={1714737419}
            tag={"Live"}
            max_investment={1000}
            hardCap={600000}
            totalRaised={184560}
            sbrStaked={Number(tokenStakedByUser)}
            totalStaked={Number(totalTokenStaked)}
            multipier={0}
            investmentPower={0}
            inputValue={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
            }}
            userBalance={0}
            participantsNumber={0}
            invest={() => Invest()}
            price={"0.013"}
            round={"Private"}
            maxCap={""}
          />
        </div>
      </section>
      <section className="mt-10 max-w-[80%] m-auto">
        <div>
          <h2 className="font-clash-med text-5xl text-center text-white">Svault details</h2>
          <p className="font-clash-light text-center text-white">
            The Sabre DAO private has a hard cap of 600,000 because it is the first Svault featured on its platform.
            The investment power calculated with the total SBR staked will be disabled, and everyone
            will start with a fair start. The maximum purchase amount for this Svault is 5,000 USDT,
            and there is no minimum purchase amount. Additionally, there will be no minimum cap to reach for this Svault.
            The Svault will be hosted on Arbitrum, and the only asset accepted by the Svault is USDT.
          </p>
        </div>

      </section>
    </section>
  )
}
// sabre is a test Project create for test purposes only
// sabre is the first Svault on sabre dao
