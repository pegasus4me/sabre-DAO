import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stake')({
  component: Stake
})

function Stake () {
 return (
   <div className="text-white">Stake</div>
 ) 
}