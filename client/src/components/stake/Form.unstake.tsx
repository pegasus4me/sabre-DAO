import { PrimaryInput } from "@/atoms";
import { Button } from "@/atoms";
export default function Unstake({
    value,
    stakedAmount,
    totalStaked,
    apy,
    investmentPower,
    multiplier,
}: {
    value: (e: React.ChangeEvent<HTMLInputElement>) => void;
    stakedAmount: number;
    totalStaked: number;
    apy: number;
    investmentPower: number;
    multiplier: number;
}) {
    return (
        <div className="flex gap-3">
            <div className="max-w-[60%] grow-[0.4] p-2">
                <p className="text-[#717171] text-sm mt-2 font-clash-med text-end">
                    staked : {stakedAmount}
                </p>
                <PrimaryInput
                    placeholder="0.0"
                    onChange={value}
                    label="Amount to unstake"
                />
                <Button
                    disabled={stakedAmount === 0 ? true : false}
                    text={stakedAmount === 0 ? "no tokens staked" : "unstake"}
                    variant="filled"
                    css="mt-10 bg-[#443EFF] rouded-none w-full"
                />
            </div>
            <div className="flex flex-col gap-3 border border-borderLine/20 border-dashed grow p-3 font-clash-reg">
                <p>
                    SBR total staked :{" "}
                    <span className="text-[#717171]">{stakedAmount} SBR</span>
                </p>
                <p>
                    SBR pool size :{" "}
                    <span className="text-[#717171]">{totalStaked} SBR</span>
                </p>
                <p>
                    Staking APY : <span className="text-[#717171]">{apy}%</span>
                </p>
                <p>
                    your purchase power multiplier :{" "}
                    <span className="text-[#717171]">{multiplier}x</span>
                </p>
                <p>
                    your investment power :{" "}
                    <span className="text-[#717171]"> {investmentPower}%</span>
                </p>
            </div>
        </div>
    );
}
