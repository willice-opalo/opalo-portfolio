import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { FaArrowLeft } from "react-icons/fa";

export async function loader({ request, params }: Route.LoaderArgs): Promise<Project> {
    const res = await fetch(`http://localhost:8000/projects/${params.id}`)
    if(!res.ok) throw new Response('Project not found', {status:404})
    const project: Project = await res.json()
    return project
}

const ProjectDetailPage = ({ loaderData }: Route.ComponentProps) => {
    const project = loaderData;
    return (
        <>
            <Link to={'/projects'} className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition">
                <FaArrowLeft className="mr-2" /> Back To Projects
            </Link>

            <div className="grid gap-8 md:grid-cols-2 item-start">
                <div>
                    <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md"/>
                </div>
                <h1 className="text-3xl font-bold text-blue-400 mb-4">
                    {project.title}
                </h1>
            </div>
        </>
    );
}
 
export default ProjectDetailPage;