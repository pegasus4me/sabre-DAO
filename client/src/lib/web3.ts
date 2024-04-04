import { writeContract } from "viem/actions";
import { Engine_abi as abi } from "@/config/Engine.abi";
import { config } from "@/config/config";
import { multiplierCalculator } from "./utils";
import { readContract } from "viem/actions";
import { IProjectInvested } from "@/types/global";
const SabreEngineV1: `0x${string}` = "0xD9Dc6690ebe5Cf78F27f90eB5846eF3AFe9261e8"


export async function Invest(value: bigint, tokenStakedByUser: bigint, totalTokenStaked: bigint): Promise<string | void> {

    try {
        const Max_investment = BigInt(1000);
        // get the purchase power of the given address
        const SABRE_MULTIPLIER = multiplierCalculator(tokenStakedByUser, totalTokenStaked);
        // verify that the given address do not pass the purchase power limit 
        if (SABRE_MULTIPLIER != BigInt(0)) {

            if (value > Max_investment * SABRE_MULTIPLIER) {
                return "cannot invest more than your purchase power"
            }
        } else {
            if (value != Max_investment) {
                return "cannot invest more than the max investment"
            }
        }

        // call the invest function on contract pass data
        const tx = await writeContract(config, {
            abi,
            address: SabreEngineV1,
            functionName: "",
            args: [value]
        })


    } catch (error: any) {
        return error
    }

}


// --------------------------------------------------------------
// ----------------- GETTER / SETTER UNSTAKING  -----------------
// --------------------------------------------------------------
export async function SbrStakedByUserAddress(caller: `0x${string}`): Promise<any> {
    try {
        const sbrStakedByUser = await readContract(config, {
            // _getStake(address staker) external view returns (uint256)

            // ... function to find how much this user is staking on the contract 
            // 0 if there are no tokens staked also returned if user have actually tokens 
            // in his wallet but not staked
        })
    } catch (error: any) {
        return error
    }
}


export async function SbrStakedTotal(): Promise<any> {
    // get the totalSBR staked on the contract Staking 
    const totalSBRstaked = await readContract(config, {

    })
}

export async function UnstakeTokens(caller: `0x${string}`, amountToUnstake: bigint): Promise<void | any> {
    try {

        // make sure the user have tokens staked before this function is called
        const SBR_STAKED = await SbrStakedByUserAddress(caller)
        if (SBR_STAKED === BigInt(0)) {
            throw new Error("no tokens staked")

        }
        const unstake = await writeContract(config, {
            //    _unStake(uint256 amountToUnstake) public virtual updateReward(msg.sender)
            // function getStakeAmount(address staker) public view returns (uint256)
        })
    } catch (error: any) {
        return error
    }
}

// -----------------------------------------------------
// ----------------- PROJECTS INVESTED -----------------
// -----------------------------------------------------


// TO DO + CONNECTION SUBPAGE WITH CONTRACTS + DASHBOARD THEN WORK ON PROJECTS INVESTED


// export async function getProjectInvestedByUser(invesmentData[]: IProjectInvested[]): 
//     Promise<IProjectInvested[] | undefined | void> {

// }
// export default async function Refound() {}