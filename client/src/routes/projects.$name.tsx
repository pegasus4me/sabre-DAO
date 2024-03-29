import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/projects/$name")({

  component: ProjectComponent,
})

function ProjectComponent() {
  const { name } = Route.useParams()
  return <div className='text-white'>Post ID: {name}</div>
}