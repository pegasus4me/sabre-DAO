import { Socials } from "@/atoms"
import sabreLogo from "../assets/logo.svg";
export default function Footer() {
    return (
        <footer className="border-t border-[#454545] my-32 w-[90%] max-w-[1440px] mx-auto">
            <div className="p-4 flex justify-between items-center">
                <img src={sabreLogo} alt="" />
                <p className="text-[#717171]">© 2024 Sabre</p>
                <div>
                <p className="text-[#717171] text-sm font-clash-reg">contact us at <span className="text-[#423FFF]">hello@sabre.com</span></p>
                <Socials website={""} twitter={""} docs={""}/>
                
                </div>
                
            </div>
        </footer>
    )
}