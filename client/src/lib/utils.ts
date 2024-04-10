import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Hash } from "@/types/global";
export const contractAddresses = {
  sabreEngine : "0x814b58712ba7B2fC356B1dcC71193c651BC02476" as Hash
}
// /////////////
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the investment power based on the user's SBR tokens staked and the total SBR tokens staked.
 * 
 * @param {bigint} tokenStakedByUser - The amount of SBR tokens staked by the user.
 * @param {bigint} totalTokenStaked - The total amount of SBR tokens staked.
 * @returns {bigint} The calculated investment power percentage.
 */

export function multiplierCalculator(tokenStakedByUser: bigint, totalTokenStaked: bigint) {
  
/**
 * Investment Power forumla ------------------------------------
 * Investment Power = (User SBR staked / Total SBR staked) * 100
 * -------------------------------------------------------------
 */

  if(tokenStakedByUser == BigInt(0) || totalTokenStaked == BigInt(0)) return BigInt(0);
  return (tokenStakedByUser / totalTokenStaked) * BigInt(100);
}

/**
 * Generates a formatted date string from a given timestamp.
 *
 * @param {number} timestamp - The timestamp to convert to a date string.
 * @return {string} The formatted date string.
 */
export function _date(timestamp : number) {
  const _date = new Date(timestamp * 1000);
  return String(_date).slice(0, 16)
}

/**
 * Calculates the progress percentage based on the hardcap and raised amount.
 *
 * @param {number} hardcap - The total amount that needs to be raised.
 * @param {number} raised - The current amount raised.
 * @return {number} The progress percentage calculated.
 */
export function ProgressBar(hardcap : number, raised : number): number{
  return raised / hardcap * 100
}

/**
 * Investment Power forumla ------------------------------------
 * Investment Power = (User SBR staked / Total SBR staked) * 100
 * -------------------------------------------------------------
 *
 * @param {bigint} tokenStakedByUser - amount of tokens staked by the user
 * @param {bigint} totalTokenStaked - total amount of tokens staked
 * @return {bigint} the calculated investment power
 */
export function maxPurchase(
  tokenStakedByUser: bigint,
  totalTokenStaked: bigint,
) : bigint {

  let investment_Power: bigint;
  
  const Base_investment  = BigInt(1000); 
  const power = multiplierCalculator(tokenStakedByUser, totalTokenStaked);
      if(power == BigInt(0)) {
          return investment_Power  = BigInt(0) 
      } 
  investment_Power = Base_investment * power;
  return investment_Power
 
}