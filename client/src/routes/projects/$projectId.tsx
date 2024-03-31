import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/projects/$projectId")({
  component: PostComponent,
});

function PostComponent() {
  const { projectId } = Route.useParams();
  return (
    <section className="text-white">
      <div className="p-5">
        <Link to="/projects" className="font-clash-reg"><span className="underline text-[#717171]">go back to </span>/projects</Link>
      </div>
      <p>Svault id {projectId}</p>
    </section>
  );
}
