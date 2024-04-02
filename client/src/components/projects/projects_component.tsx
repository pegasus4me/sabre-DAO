import { useState, useEffect } from "react";
import Svault from "./Svault.component.tsx";
import SabreLogo from "../../assets/Svault_logo.png";
import { Link } from "@tanstack/react-router";
function filterSvaults(): void {
  // query Svaults contracts if the Svault function are true I show it on the open section
  // else on closed section
}

export default function ProjectsComponent() {
  return (
    <section className="mt-5 p-2 w-[90%] mx-auto">
     <div className="p-4 mb-4">
        <h2 className="text-3xl font-clash-reg mb-5">Active Svaults</h2>
        <Svault
        logo={SabreLogo}
        category={"decentralised VC"}
        name={"Sabre DAO"}
        description={"Sabre dao is a decentralised VC allowing everyone to invest on early projects rounds and get tokens at a good premium price. This"}
        price={"0.004"}
        round={"private"}
        maxCap={"800.00K"}
        viewMore={() => <Link href="/projects/sabre"></Link>}
      />
     </div>
     <div className="p-4 mb-4">
     <h2 className="text-3xl font-clash-reg mb-5">Closed Svaults</h2>
     </div>
    </section>
  );
}
