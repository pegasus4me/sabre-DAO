interface IGeneralInputProps {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value?: string | number;
  css?: string;
  note?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
}

interface IInputProps extends IGeneralInputProps {
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export type TProjectTag = "Live" | "Upcoming" | "Closed";
export type _TierTag = "Tier 1" | "Tier 2" | "Tier 3";

export interface IVault extends Pick<Ivault, "tag" | "price" | "round" | "maxCap">{
  // ------ Basic informations -----
  name: string;
  vesting : string,
  raisingGoal  : number,
  round_start : string,
  round_end : string,
  launchDate : string,
  tag : any,
  max_investment : number,
  timestamp_start : number,
  hardCap : number,
  // -------------------------------
  totalRaised : number,
  sbrStaked : number,
  totalStaked : number,
  multipier : number,
  deadlineDay : string,
  investmentPower : number,
  inputValue : (e: React.ChangeEvent<HTMLInputElement>) => void,
  userBalance : number,
  participantsNumber : number,
  invest : () => Promise<void | string>,
}

export type Hash = `0x${string}`;
export interface IProjectInvested {
  userAddress  : `0x${string}`
  projectName: string;
  priceRate : number;
  amountInvested : number;
  NumberOfTokensGet : number;
  isVested : boolean;
}


export interface SWriteContracts {
  Invest(value : bigint, proposalId : bigint, base_investment : bigint , tokenStakedByUser? : bigint, totalTokenStaked? : bigint) : Promise<void | string>; 
  Stake(amount : bigint) : Promise<void | string>; 
  Unstake(amount : bigint, caller : Hash) : Promise<void | string>;
  ClaimReward() : Promise<void | string>;
  ClaimAndUnstake(amountToUnstake : bigint) : Promise<void | string>;
  s_vaultRefund(ProsalId : bigint, amountToRefound : bigint) : Promise<void | string>;
}

export interface SReadContracts {
  _getSbrStakedByUserAddress(caller : Hash) : Promise<bigint>; 
  _getSbrStakedTotal() : Promise<bigint>; 
  _getReturnUSERPROFILE(ProsalId : bigint, caller : Hash) : Promise<bigint>; 
  _getCurrentVaultStatus() : Promise<number>; 
  _getgetVaultDuration(ProsalId : bigint) : Promise<bigint>; 
}