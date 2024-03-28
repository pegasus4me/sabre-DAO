import { createFileRoute } from '@tanstack/react-router'
import { useAccount } from 'wagmi'

// get user investment and display it on dashboard

export const Route = createFileRoute('/dashboard')({
  
  component: () => (
    <section className='text-white'>
    <p>Hello /dashboard</p>
    
    </section>
  ),
})