import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// /////////////
import { readContract } from "viem/actions";
import { config } from "../config/config";
import { Engine_abi } from "@/config/Engine.abi";
import { Ivault } from "@/components/projects/Svault.component";
import { parseAbi } from 'viem'

// eth sepolia
export const SabreV1engineContractAddress: Hash = "0xD9Dc6690ebe5Cf78F27f90eB5846eF3AFe9261e8";
export const SabreDAOV1: Hash = "0x24A48b47D22DBa20eFf4773C57F41a82DCEadcDb"

export interface IVault extends Pick<Ivault, "tag" | "price" | "round" | "maxCap">{
    // ------ Basic informations -----
    vesting : string,
    raisingGoal  : number,
    round_start : Date,
    round_end : Date,
    launchDate : String,
    tag : any,
    max_investment : number,
    timestamp_start : number,
    hardCap : number,
    // -------------------------------
    totalRaised : number,
    sbrStaked : number,
    totalStaked : number,
    multipier : number,
    deadlineDay : Date,
    investmentPower : number,
    inputValue : () => React.InputHTMLAttributes<HTMLInputElement>,
    userBalance : number,
    participantsNumber : number,
    invest : () => void,
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function get Active / unactive / passed Svaults

export type Hash = `0x${string}`;
type ResultData = {
  open: Hash[] | string[] | undefined;
  closed: Hash[] | string[] | undefined;
};
export async function _getSvaultsStatus([
  ...args
]: `0x${string}`): Promise<ResultData> {
  const openSvaults = [];
  const closedSvaults = [];

  // args = addresses
  for (let i = 0; i < args.length; i++) {
    const contract = args[i];
    const isActive = await readContract(config, {
      abi :Engine_abi,
      address: "0xD9Dc6690ebe5Cf78F27f90eB5846eF3AFe9261e8",
      functionName: ""


    });

    if (isActive) {
      openSvaults.push(contract);
    } else {
      closedSvaults.push(contract);
    }
  }
  return {
    open: openSvaults,
    closed: closedSvaults,
  };
}
