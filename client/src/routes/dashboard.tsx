import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import Unstake from "@/components/stake/Form.unstake";
import { useReadContract } from "wagmi";
import { SbrStakedByUserAddress, SbrStakedTotal } from "@/lib/web3";

// get user investment and display it on dashboard
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [tokensStaked, setTokensStakedByUser] = useState<bigint>(BigInt(0));
  const  [value, setValue] = useState<string>("");
  
  console.log(`https://arbitrum-sepolia.infura.io/v3/${process.env.API_KEY}`)
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
          stakedAmount={0}
          totalStaked={0}
          apy={0}
          investmentPower={0}
          multiplier={0}
        />
      </div>
    </div>
  );
}
