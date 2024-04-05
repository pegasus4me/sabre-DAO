import { writeContract, readContract } from "@wagmi/core";
import { abi } from "@/config/abi";
import { config } from "@/config/config";
import { multiplierCalculator } from "./utils";
import { IProjectInvested } from "@/types/global";
import { createClient } from "viem";

const SabreEngineV1: `0x${string}` ="0x814b58712ba7B2fC356B1dcC71193c651BC02476";
// const S_vault: `0x${string}` = "0x406c1426bafB7Cf2f437BfF366abDc0b99Cfc4Cc";
// const SBR_Token_ADDRESS: `0x${string}` ="0xdC2D5ec4352aC460716E7A37063a1cf8d8f641aF";

/**
 * Generate an investment transaction based on the value, token staked by the user, and total tokens staked.
 *
 * @param {bigint} value - the value to be invested
 * @param {bigint} tokenStakedByUser - the amount of tokens staked by the user
 * @param {bigint} totalTokenStaked - the total amount of tokens staked
 * @return {Promise<string | void>} a string indicating the investment status or void
 */
export async function Invest(
  value: bigint,
  ProposalId: bigint,
  tokenStakedByUser: bigint,
  totalTokenStaked: bigint,
): Promise<void | string> {
  try {
    const Base_investment = BigInt(1000);
    // get the purchase power of the given address
    const SABRE_MULTIPLIER = multiplierCalculator(
      tokenStakedByUser,
      totalTokenStaked,
    );
    // verify that the given address do not pass the purchase power limit
    if (SABRE_MULTIPLIER != BigInt(0)) {
      if (value > Base_investment * SABRE_MULTIPLIER) {
        return "cannot invest more than your purchase power";
      }
    } else {
      if (value != Base_investment) {
        return "cannot invest more than the max investment";
      }
    }

    // call the invest function on contract pass data
    const tx = await writeContract(config, {
      abi,
      address: SabreEngineV1,
      functionName: "s_vaultInvest",
      args: [ProposalId, value],
    });
  } catch (error: any) {
    return error;
  }
}


export function maxPurchase(
    tokenStakedByUser: bigint,
    totalTokenStaked: bigint,
) : bigint {

    /**
     * Investment Power forumla ------------------------------------
     * Investment Power = (User SBR staked / Total SBR staked) * 100
     * -------------------------------------------------------------
    */
    let investment_Power: bigint;
    
    const Base_investment  = BigInt(1000); 
    const power = multiplierCalculator(tokenStakedByUser, totalTokenStaked);
        if(power == BigInt(0)) {
            return investment_Power  = BigInt(0) 
        } 
    investment_Power = Base_investment * power;
    return investment_Power;
}

export async function Participants(caller:  `0x${string}`) {
    try {
        const participants = await readContract(config, {
            abi,
            address: SabreEngineV1,
            functionName: "getParticipationAmount",
            args : [caller]
        })
        return participants
    } catch (error : any) {
        let message = "Unknow error";
        if (error instanceof Error) message = error.message;
        throw new Error(message);
    }
}
// --------------------------------------------------------------
// ----------------- GETTER / SETTER UNSTAKING  -----------------
// -------------------------------------------------------------

// get the totalSBR staked by the caller on the contract staking
export async function SbrStakedByUserAddress(
  caller: `0x${string}`,
): Promise<bigint> {
  try {
    const sbrStakedByUser = await readContract(config, {
      abi,
      address: SabreEngineV1,
      functionName: "getStakeAmount",
      args: [caller],
    });
    return sbrStakedByUser;
  } catch (error: any) {
    let message = "Unknow error";
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
}

// get the totalSBR staked on the contract Staking
export async function SbrStakedTotal(): Promise<bigint> {
  const totalSBRstaked = await readContract(config, {
    abi,
    address: SabreEngineV1,
    functionName: "getTotalStakedAmount",
  });
  return totalSBRstaked;
}

export async function UnstakeTokens(
  caller: `0x${string}`,
  amountToUnstake: bigint,
): Promise<void | any> {
  try {
    // make sure the user have tokens staked before this function is called
    const SBR_STAKED = await SbrStakedByUserAddress(caller);
    if (SBR_STAKED === BigInt(0)) {
      throw new Error("no tokens staked");
    }

    await writeContract(config, {
      abi,
      address: "0x814b58712ba7B2fC356B1dcC71193c651BC02476",
      functionName: "unStake",
      args: [amountToUnstake],
    });
  } catch (error: any) {
    return error;
  }
}

// -----------------------------------------------------
// ----------------- PROJECTS INVESTED -----------------
// -----------------------------------------------------


// export async function getProjectInvestedByUser(invesmentData[]: IProjectInvested[]):
//     Promise<IProjectInvested[] | undefined | void> {

// }
// export default async function Refound() {}
