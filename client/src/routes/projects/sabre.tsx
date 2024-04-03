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

// const [value, setValue] = useState<string>("0");
/**
 * Investment Power forumla ------------------------------------
 * Investment Power = (User SBR staked / Total SBR staked) * 100
 * -------------------------------------------------------------
 */
export const Route = createFileRoute("/projects/sabre")({
  component: () => (
    <section className="">
      <div className="p-5 text-white">
        <Link to="/projects" className="font-clash-reg">
          <span className="underline text-[#717171]">go back to </span>/projects
        </Link>
      </div>
      <section className=" p-3 text-white flex justify-between  gap-5 flex-wrap ">
        <div className="grow-[2]">
          <div className="flex gap-5">
            <div>
              <img src={logo} alt="sabre_logo" />
            </div>
            <div>
              <TierTag tag={"Tier 1"} />
              <h1 className="font-clash-med text-7xl">Sabre DAO</h1>
              <Socials website={""} twitter={""} discord={""} docs={""} />
              <h3 className="font-clash-reg text-2xl">Decentralised VC</h3>
            </div>
          </div>
          {/* project description section */}
          
        </div>
        <div className="grow">
          <Vault
            vesting={""}
            raisingGoal={0}
            round_start={undefined}
            round_end={undefined}
            launchDate={undefined}
            timestamp_start={1714737419}
            tag={"Live"}
            max_investment={0}
            totalRaised={0}
            sbrStaked={0}
            totalStaked={0}
            multipier={0}
            investmentPower={0}
            inputValue={function (): InputHTMLAttributes<HTMLInputElement> {
              throw new Error("Function not implemented.");
            }}
            userBalance={0}
            participantsNumber={0}
            invest={function (): void {
              throw new Error("Function not implemented.");
            }}
            price={""}
            round={""}
            maxCap={""}
          />
        </div>
      </section>
    </section>
  ),
});

// sabre is a test Project create for test purposes only
// sabre is the first Svault on sabre dao
