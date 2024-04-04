import { writeContract } from "viem/actions";
import { Engine_abi as abi } from "@/config/Engine.abi";
import { config } from "@/config/config";
import { multiplierCalculator } from "./utils";

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