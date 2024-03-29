import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/projects/$projectId")({

  component: ProjectComponent,
})

function ProjectComponent() {
  const { projectId } = Route.useParams();

  return <div className='text-white'>Post ID: {projectId}</div>
}