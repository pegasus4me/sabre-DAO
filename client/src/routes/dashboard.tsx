import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Unstake from "@/components/stake/Form.unstake";
import { useReadContract } from "wagmi";
import { SbrStakedByUserAddress, SbrStakedTotal } from "@/lib/web3";
import {abi} from "@/config/abi"
// get user investment and display it on dashboard
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [tokensStaked, setTokensStakedByUser] = useState<bigint>(BigInt(0));
  const  [value, setValue] = useState<string>("");
  const {address} = useAccount()
 
  // balance staked SBR by User need to fetch
  const SBRStakedByUser = useReadContract({
    abi,
    address : "0x814b58712ba7B2fC356B1dcC71193c651BC02476",
    functionName : "getStakeAmount",
    args :  [address as `0x${string}`]
  })

  // we cannot read the abi that why I have an undefined
  console.log(SBRStakedByUser.data)

  useEffect(() => {
    // refhresh
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
          stakedAmount={Number()}
          totalStaked={0}
          apy={0}
          investmentPower={0}
          multiplier={0}
        />
      </div>
    </div>
  );
}
