import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stake')({
  component: () => <div>Hello /stake!</div>
})