import { createFileRoute } from '@tanstack/react-router'

console.log("dodod", process.env.API_KEY as string)
export const Route = createFileRoute('/')({
  component: () => <p>Hello / index</p>
  
})