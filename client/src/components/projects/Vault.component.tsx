import { IVault } from "@/types/global";
import { useState, useEffect, ChangeEvent } from "react";
import {
    Button,
    PrimaryInput,
    SubTitleVariant,
    Paragraph,
    ProjectTag,
} from "@/atoms";
import contdown from "@/lib/contdown";
import { ProgressBar } from "@/lib/contdown";
/**
 * Investment Power forumla ------------------------------------
 * Investment Power = (User SBR staked / Total SBR staked) * 100
 * -------------------------------------------------------------
 */
export function Vault({
    name,
    price,
    round,
    vesting,
    raisingGoal,
    round_start,
    round_end,
    launchDate,
    tag,
    hardCap,
    max_investment,
    timestamp_start,
    deadlineDay,
    totalRaised,
    sbrStaked,
    totalStaked,
    multipier,
    investmentPower,
    inputValue,
    userBalance,
    participantsNumber,
    invest,

}: IVault): JSX.Element {

    // prorgessbar
    // useeffect for progressbar value tracked from 0 to 100 everytime the value changes 
    // a render is triggered and the progressbar value is updated
    // usestate is used to update the progressbar value in % 
    const [Progessvalue, setProgressValue] = useState<number | string>(0);
    const [countdown_, setCountdown] = useState<number[]>([]);
    const date = new Date()

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(contdown(timestamp_start, date));
        }, 1000);

        return () => clearInterval(interval);
        // re-render every new transaction
    }, [timestamp_start, countdown_])

    // useEffect for ProgessBar Management
    useEffect(() => {
        // const realTimeProgress:number = ProgressBar(hardCap, totalRaised)
        const realTimeProgress: number = ProgressBar(hardCap, totalRaised)
        setProgressValue(realTimeProgress.toPrecision(3))
        if (realTimeProgress >= 100) {
            setProgressValue(100)
        }

    }, [Progessvalue, hardCap, totalRaised])

    return (
        <article className="w-[%] h-[797px] rounded-md bg-gradient-to-b from-jacksonPurple/30 to-ebony/30 h-fit rounded-lg border border-borderLine/20 flex flex-col space-y-8 p-4 backdrop-filter backdrop-blur-lg">
            <div className="">
                <SubTitleVariant text="Svault Close in" css="font-clash-reg" />
                <div className="flex justify-between">
                    <div className="flex justify-between gap-4">
                        {
                            countdown_.map((item, index) => {
                                return (
                                    <div className="flex gap-4">
                                        <p className="font-clash-reg text-lg  gap-6" key={index} >
                                            {item} <span className="text-[#717171]">{index === 0 ? "Days" : index === 1 ? "Hours" : index === 2 ? "Minutes" : "Seconds"}</span>
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <ProjectTag tag={tag} />
                </div>

                <div className="mt-1">
                    <h3 className="text-3xl font-clash-reg">{round}  Informations</h3>
                    <div className="font-clash-reg p-4 border-b border-borderLine/20 opacity-80">
                        <p>Price per token : {price.toLocaleString()} USDC / {name} </p>
                        <p>Vesting period : {vesting}</p>
                        <p>{round} round raising goal {raisingGoal.toLocaleString()} USDC</p>
                        <p>{round}  round start : {String(round_start)}</p>
                        <p>{round}  round end : {String(round_end)}</p>
                        <p>Svault deadline day :  {String(deadlineDay)}</p>
                        <p>Launch date : {launchDate} </p>
                        <p>max-investment : {max_investment.toLocaleString()} USDC</p>
                        <p>Svault Hardcap : {hardCap.toLocaleString()} USDC</p>
                    </div>
                </div>
                <div className="mt-1 flex justify-between p-4">
                    <div>
                        <h4 className="text-2xl font-clash-reg">total Raised</h4>
                        <p className="font-clash-light text-lg">
                            {totalRaised.toLocaleString()} / <span className="text-[#717171]">{hardCap.toLocaleString()}</span> USDC
                        </p>
                    </div>
                    <div>
                        <p className="font-clash-light text-sm">{`sbr staked`} <span className="text-[#717171]">{sbrStaked}</span> SBR</p>
                        <p className="font-clash-light text-sm">{`total SBR staked`} <span className="text-[#717171]">{totalStaked}</span></p>
                        <p className="font-clash-light text-sm">{`multipier`} <span className="text-[#717171]">{multipier} x</span></p>
                        <p className="font-clash-light text-sm">{`investment power`} <span className="text-[#717171]">{investmentPower} %</span></p>

                    </div>
                </div>
                <div className="p-1 w-[70%]">
                    <PrimaryInput
                        placeholder="amount"
                        onChange={inputValue}
                        css="text-[#717171]"
                        id={""}
                        label={`max ${investmentPower.toLocaleString()}`}
                        name={""} />
                    <p className="text-[#717171] font-clash-reg text-sm text-end mt-1">balance: <span>{userBalance.toLocaleString()}</span></p>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p className="text-white font-clash-reg text-sm mb-1">{participantsNumber} participants</p>
                        <p className="text-white font-clash-reg text-sm">progress {Progessvalue}%</p>
                    </div>

                    {/* PROGESS BAR */}
                    <div className="h-[40px] w-full border border-borderLine/20 rounded-md p-2 rounded-lg border border-borderLine/20 flex flex-col backdrop-filter backdrop-blur-lg">
                        <div className="bg-[#423FFF]  h-full p-2 transition-all" style={{ width: `${Progessvalue}%` }}></div>
                    </div>

                </div>
            </div>
            <div className="p-none">
                <Button
                    disabled={Progessvalue === 100 ? true : false}
                    css="bg-[#26246F] text-white rounded-none font-clash-reg text-lg bg-gradient-to-t from-[#1C1B3F]/30 to-[#22214E]/30 backdrop-filter backdrop-blur-lg"
                    text={Progessvalue === 100 ? "Svault full" : "Invest"}
                    variant={"transparent"}
                    onClick={invest}
                />
            </div>
        </article>
    );
}
