import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// /////////////
import { readContract } from "viem/actions";
import { config } from "../config/config";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// function get Active / unactive / passed Svaults

type ResultData = {
    open : number | undefined,
    closed : number | undefined,
}
// function _getSvaultsStatus([...args] : `0x${string}`) :  ResultData  {
//     const openSvaults = []; 
//     const closedSvaults = [];
//     //  getStatus() from the contract and get back a bool for the given Svault contract 
//     // we loop on the addresser 
//     // if the contract is true = still open so we will push it on the openSvault list else
//     // if the contract is false = closed so it will go on the closedVaults list

//     // then we return the arrays of open and closed
// }