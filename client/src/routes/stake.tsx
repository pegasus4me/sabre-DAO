import { createFileRoute } from "@tanstack/react-router";
import stakeWallet from "@/assets/stake_wallet.svg";
import spiralBg from "@/assets/spiral_bg.svg";
import { Button, Paragraph, Title } from "@/atoms";
import { GoArrowUpRight } from "react-icons/go";
import { StakeForm } from "@/components/stake";

function Stake() {
  return (
    <div className="relative w-full my-8 flex flex-col space-y-8">
      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
        <div className="w-full md:w-[55%] lg:w-[40%] flex flex-col space-y-6">
          <div>
            <Title css={"text-center md:text-left"} text="Stakes" />
            <Paragraph
              css={"text-center md:text-left"}
              text="Embark on a journey with us where your digital assets do more than just exist; they thrive and grow. In the world of decentralized finance, your participation holds power, and staking is the key to unlocking this potential."
            />
          </div>

          <div className="w-full md:w-[45%] text-center">
            <Button
              text={"Connect wallet"}
              variant={"filled"}
              rightIcon={<GoArrowUpRight />}
            />
            <small className="text-white">Connect your wallet to stake</small>
          </div>
        </div>
        <img
          src={stakeWallet}
          alt="wallet image"
          className="hidden md:block md:w-[30%]"
        />

        <img
          src={spiralBg}
          alt="wallet image"
          className="z-[-1] absolute top-0 w-full left-0"
        />
      </div>

      <StakeForm />
    </div>
  );
}

export const Route = createFileRoute("/stake")({
  component: Stake,
});
