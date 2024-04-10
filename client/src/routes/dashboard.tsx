import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Unstake from "@/components/stake/Form.unstake";
import { useReadContract } from "wagmi";
import { ReadContracts } from "@/lib/contracts/ReadContracts";
import { multiplierCalculator } from "@/lib/utils";
import {abi} from "@/config/abi"
// get user investment and display it on dashboard
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [tokensStaked, setTokensStakedByUser] = useState<bigint>(BigInt(0));
  const  [value, setValue] = useState<string>("");
  const [totalPool, setTotalPool] = useState<bigint>(BigInt(0));
  const {address} = useAccount()
  
  async function SBR_DATA() : Promise<void> {
    const {_getSbrStakedByUserAddress, _getSbrStakedTotal} = new ReadContracts() 
    const SBRstakedByUser = await _getSbrStakedByUserAddress(address as `0x${string}`)
    const TotalSBRStaked = await _getSbrStakedTotal();
    
    // ---- UNCOMMENT THIS FUNCTION WHEN WE HAVE THE STAKEDAMOUT AND TOTALSTAKED AMOUNT WORKING
    
    // const multiplier = multiplierCalculator(SBRstakedByUser.data.formatted, TotalSBRStaked.data.formatted)
    // setTokensStakedByUser(SBRstakedByUser.data.formatted)
    // setTotalPool(TotalSBRStaked.data.formatted)
  }

  useEffect(() => {
    // refhresh
    SBR_DATA()
    // setSBR data values to state values
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-white border min-h-[300px] rounded-md border-borderLine/20 p-4">
        <p className="text-white font-clash-reg text-2xl">Project invested</p>
      </div>
      <div className="text-white border min-h-[300px] rounded-md border-borderLine/20 p-4">
        <p className="text-white font-clash-reg text-2xl">staking</p>
        <Unstake
          value={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          stakedAmount={Number(tokensStaked)}
          totalStaked={Number(totalPool)}
          apy={45.3}
          investmentPower={0}
          multiplier={Number()}
        />
      </div>
    </div>
  );
}
