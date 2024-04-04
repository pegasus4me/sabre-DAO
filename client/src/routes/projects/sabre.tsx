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


export const Route = createFileRoute("/projects/sabre")({
  component: SabrePage,
});


function SabrePage() {
  const [value, setValue] = useState<string>("0");
  const [tokenStakedByUser, setTokenStakedByUser] = useState<bigint>(BigInt(0));
  const [totalTokenStaked, setTotalTokenStaked] = useState<bigint>(BigInt(0));
  async function getSBRInformations() : Promise<void> {
    try {
      
      // get the total staked by the user
      // get the total staked on the pool
      // update the state
      // send it with the function Invest
   
    } catch (error : any) {
      
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
            totalRaised={1890000}
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
    </section>
  )
}
// sabre is a test Project create for test purposes only
// sabre is the first Svault on sabre dao
