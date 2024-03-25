import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: () => (
    <>
    <p>Hello /projects</p>
    </>
  )
  
})