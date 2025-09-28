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
                <div>
                    <h1 className="text-3xl font-bold text-blue-400 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-gray-300 text-sm mb-4">
                        {new Date(project.date).toLocaleDateString()} . {project.category}
                    </p>
                    <p className="text-gray-200 mb-6">
                        {project.description}
                    </p>
                    <a href={project.url} target="_blank" className="text-white bg-blue-600 inline-block hover:bg-blue-700 px-5 py-2 rounded transition">
                        View Live Site 
                    </a>
                </div>
            </div>
        </>
    );
}
 
export default ProjectDetailPage;