import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'


export const Route = createFileRoute("/projects/sabre")({
  component: () => <section>
  <div className="p-5 text-white">
     <Link to="/projects" className="font-clash-reg"><span className="underline text-[#717171]">go back to </span>/projects</Link>
 </div>
 </section>
})

// sabre is a test Project create for test purposes only
// sabre is the first Svault on sabre dao

function SabreRoute () {
    return  <section>
    <div className="p-5 text-white">
       <Link to="/projects" className="font-clash-reg"><span className="underline text-[#717171]">go back to </span>/projects</Link>
   </div>
   </section>
}