import { createFileRoute } from '@tanstack/react-router'
import illustration from "../assets/presentation.png"
import shadows from "../assets/shadows.png"
    /**
     * Renders a React component that displays "Project Page".
     *
     * @return {JSX.Element} A React component.
     */

export const Route = createFileRoute('/projects')({
  component: () => (
    <section className='m-auto text-white mt-20'>
      <div className='border-b border-[#454545]'>
        <div>
          <h1
          className='text-6xl font-clash-med border'
          >Unleash the power of Decentralized VCs</h1>
          </div>
        <div>illustation</div>
      </div>
    </section>
  )
  
})