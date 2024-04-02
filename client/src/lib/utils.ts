import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// /////////////
import { readContract } from "viem/actions";
import { config } from "../config/config";
import { Engine_abi as abi} from "@/config/Engine.abi";
// eth sepolia
export const SabreV1engineContractAddress : Hash = "0x1d734068D7a4dF7b531cdec3e740D8d00E3272dE";
/**
 * 
 *contract SabreDAO 0xd28DD98d6fBEA41f8928Ba62c3835a2346F513DD
  contract helperConfig 0xC7f2Cf4845C6db0e1a1e91ED41Bcd0FcC1b0E141
 sabre engine CA 0x1d734068D7a4dF7b531cdec3e740D8d00E3272dE
*/
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
      abi,
      address :SabreV1engineContractAddress,
       functionName : "",
       args: []

      
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

  //  getStatus() from the contract and get back a bool for the given Svault contract
  // we loop on the addresser
  // if the contract is true = still open so we will push it on the openSvault list else
  // if the contract is false = closed so it will go on the closedVaults list

  // then we return the arrays of open and closed
}
