import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <>
    <p>Hello /</p>
    </>
  )
  
})