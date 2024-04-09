import { readContract } from "@wagmi/core";
import { abi } from "@/config/abi";
import { config } from "@/config/config";
import { SReadContracts } from "@/types/global";
import { contractAddresses } from "../utils";
export class ReadContracts implements SReadContracts {
  async _getSbrStakedByUserAddress(caller: `0x${string}`): Promise<bigint> {
    try {

      const sbrStakedByUser = await readContract(config, {
        abi,
        address: contractAddresses.sabreEngine,
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
  async _getSbrStakedTotal(): Promise<bigint> {

    try {

      const totalSBRstaked = await readContract(config, {
        abi,
        address: contractAddresses.sabreEngine,
        functionName: "getTotalStakedAmount",
      })
      return totalSBRstaked

    } catch (error: any) {
      let message = "Unknow error";
      if (error instanceof Error) message = error.message;
      throw new Error(message);
    }
  }
  async _getReturnUSERPROFILE(
    ProsalId: bigint,
    caller: `0x${string}`,
  ): Promise<bigint> {
    try {

      const getUserProfile = await readContract(config, {
        abi,
        address: contractAddresses.sabreEngine,
        functionName: "returnUSERPROFILE",
        args: [ProsalId, caller]
      });
      return getUserProfile
    } catch (error: any) {
      let message = "Unknow error";
      if (error instanceof Error) message = error.message;
      throw new Error(message);
    }
  }
  async _getCurrentVaultStatus(): Promise<number> {
    try {
      const getStatus = await readContract(config, {
        abi,
        address: contractAddresses.sabreEngine,
        functionName: "getCurrentVaultStatus",
      });

      return getStatus;
    } catch (error: any) {
      let message = "Unknow error";
      if (error instanceof Error) message = error.message;
      throw new Error(message);
    }
  }
  async _getgetVaultDuration(ProsalId: bigint): Promise<bigint> {

    try {

      const vaultDuration = await readContract(config, {
        abi,
        address: contractAddresses.sabreEngine,
        functionName: "getVaultDuration",
        args: [ProsalId],
      });
      return vaultDuration;

    } catch (error: any) {
      let message = "Unknow error";
      if (error instanceof Error) message = error.message;
      throw new Error(message);
    }
  }
}

