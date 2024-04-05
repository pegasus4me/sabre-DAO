import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// /////////////
import { writeContract, readContract } from "@wagmi/core";
import { config } from "../config/config";
import { abi } from "@/config/abi";
import { Ivault } from "@/components/projects/Svault.component";
import { parseAbi } from 'viem'

// eth sepolia
const SabreEngineV1: `0x${string}` ="0x814b58712ba7B2fC356B1dcC71193c651BC02476";
// export const SabreDAOV1: Hash = "0x24A48b47D22DBa20eFf4773C57F41a82DCEadcDb"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function get Active / unactive / passed Svaults

export type Hash = `0x${string}`;
// type ResultData = {
//   open: Hash[] | string[] | undefined;
//   closed: Hash[] | string[] | undefined;
// };
// export async function _getSvaultsStatus([
//   ...args
// ]: `0x${string}`): Promise<ResultData> {
//   const openSvaults = [];
//   const closedSvaults = [];

//   // args = addresses
//   for (let i = 0; i < args.length; i++) {
//     const contract = args[i];
//     const isActive = await readContract(config, {
//       abi :abi,
//       address: SabreEngineV1,
//       functionName: ""


//     });

//     if (isActive) {
//       openSvaults.push(contract);
//     } else {
//       closedSvaults.push(contract);
//     }
//   }
//   return {
//     open: openSvaults,
//     closed: closedSvaults,
//   };
// }

/**
 * Investment Power forumla ------------------------------------
 * Investment Power = (User SBR staked / Total SBR staked) * 100
 * -------------------------------------------------------------
 */
export function multiplierCalculator(tokenStakedByUser: bigint, totalTokenStaked: bigint) {
  if(tokenStakedByUser == BigInt(0) || totalTokenStaked == BigInt(0)) return BigInt(0);
  return (tokenStakedByUser / totalTokenStaked) * BigInt(100);
}

export function _date(timestamp : number) {
  const _date = new Date(timestamp * 1000);
  return String(_date).slice(0, 16)
}