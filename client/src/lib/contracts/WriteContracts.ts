import { SWriteContracts } from "@/types/global";
import { writeContract } from "@wagmi/core";
import { multiplierCalculator } from "../utils";
import { config } from "@/config/config";
import { abi } from "@/config/abi";
import { Hash } from "@/types/global";
import { ReadContracts } from "./ReadContracts"

const {_getSbrStakedByUserAddress } = new ReadContracts()

export class WriteContracts implements SWriteContracts {
    async Invest(value: bigint, proposalId: bigint, base_investment: bigint, tokenStakedByUser?: bigint | undefined, totalTokenStaked?: bigint | undefined): Promise<string | void> {
        try {
            const SABRE_MULTIPLIER = multiplierCalculator(
                tokenStakedByUser as bigint,
                totalTokenStaked as bigint,
             );
              // verify that the given address do not pass the purchase power limit
              if (SABRE_MULTIPLIER != BigInt(0)) {
                if (value > base_investment * SABRE_MULTIPLIER) {
                  return "cannot invest more than your purchase power";
                }
              } else {
                if (value != base_investment) {
                  return "cannot invest more than the max investment";
                }
              }
              // call the invest function on contract pass data
              const tx = await writeContract(config, {
                abi,
                address: "" as `0x${string}`,
                functionName: "s_vaultInvest",
                args: [proposalId, value],
              });
              return tx;
        } catch (error: any) {
            let message = "Unknow error";
            if (error instanceof Error) message = error.message;
            throw new Error(message);
        }
    }
    // Stake(amount: bigint): Promise<string | void> {
    //     try {
            
    //     } catch (error: any) {
    //         let message = "Unknow error";
    //         if (error instanceof Error) message = error.message;
    //         throw new Error(message);
    //     }
    // }
    async Unstake(amount: bigint, caller : Hash): Promise<string | void> {
        try {
            const SBR_STAKED = await _getSbrStakedByUserAddress(caller);
            if (SBR_STAKED === BigInt(0)) {
              throw new Error("no tokens staked");
            }
        
            await writeContract(config, {
              abi,
              address: "0x814b58712ba7B2fC356B1dcC71193c651BC02476",
              functionName: "unStake",
              args: [amount],
            });
        } catch (error: any) {
            let message = "Unknow error";
            if (error instanceof Error) message = error.message;
            throw new Error(message);
        }
    }

    // ClaimReward(): Promise<string | void> {
    //     try {
            
    //     } catch (error: any) {
    //         let message = "Unknow error";
    //         if (error instanceof Error) message = error.message;
    //         throw new Error(message);
    //     }
    // }
    // ClaimAndUnstake(amountToUnstake: bigint): Promise<string | void> {
    //      try {
            
    //     } catch (error: any) {
    //         let message = "Unknow error";
    //         if (error instanceof Error) message = error.message;
    //         throw new Error(message);
    //     }
    // }
    // s_vaultRefund(ProsalId: bigint, amountToRefound: bigint): Promise<string | void> {
    //      try {
            
    //     } catch (error: any) {
    //         let message = "Unknow error";
    //         if (error instanceof Error) message = error.message;
    //         throw new Error(message);
    //     }
    // }

}