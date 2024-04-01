import { Button, PrimaryInput, SubTitle } from "@/atoms";
import ethCoin from "@/assets/eth.svg";

const StakeForm = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto flex flex-col space-y-4">
      <SubTitle
        css="text-center !font-clash-regular font-light"
        text="Single stake"
      />

      <img src={ethCoin} className="w-[10%]" alt="eth coin" />
      <form className="bg-gradient-to-b from-jacksonPurple to-ebony h-fit rounded-lg border border-borderLine/20 flex flex-col space-y-8 p-4">
        <div className="flex flex-col space-y-4">
          <PrimaryInput
            id={"apy"}
            name={"apy"}
            label="Annual Percentage Yield (APY)"
            onChange={() => {}}
          />

          <PrimaryInput
            id={"tvd"}
            name={"tvd"}
            label="Total value deposited (TVD)"
            onChange={() => {}}
          />

          <PrimaryInput
            id={"ci"}
            name={"ci"}
            label="Current Index (CI)"
            onChange={() => {}}
          />
        </div>

        <div className="flex justify-between items-center">
          <Button css="!w-[48%]" text={"Stake"} variant={"filled"} />
          <Button css="!w-[48%]" text={"Claim"} variant={"light"} />
        </div>
      </form>
    </div>
  );
};

export default StakeForm;
