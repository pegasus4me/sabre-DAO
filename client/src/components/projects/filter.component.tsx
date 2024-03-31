import { Badge } from "@/components/ui/badge"
import { useState } from "react";

export default function Filter({
  active,
  upcoming,
  passed,
}: {
  active: number;
  upcoming: number;
  passed: number;
}): JSX.Element {
  return (
    <section className="min-h-[60px] flex justify-start items-center  flex-wrap border-b border-[#454545] border-dashed mx-[6%] p-2">
      <div className="flex gap-4 items-center gap-4">
      <p className="text-lg font-clash-reg">active</p><Badge>{active === undefined ? 0 : active}</Badge>
      <p className="text-lg font-clash-reg">upcoming</p><Badge variant={"upcoming"}>{upcoming === undefined ? 0 : active}</Badge>
      <p className="text-lg font-clash-reg">passed</p><Badge variant={"destructive"}>{passed === undefined ? 0 : active}</Badge>
      </div>
      
    </section>
  );
}
