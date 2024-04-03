import { createFileRoute } from '@tanstack/react-router'
import { useAccount } from 'wagmi'

// get user investment and display it on dashboard

export const Route = createFileRoute('/dashboard')({
  
  component: Dashboard,
  
})

function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}