import { useParams, Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

export default function ProjectDetails() {
    const { id } = useParams();
    const { getById } = useProjects();
    const project = getById(Number(id));

    if (!project) {
        return <p className="project-description">Project not found</p>;
    }

    return (
        <div className="container">
            <h1 className="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <Link to="/" className="project-link">← Back</Link>
        </div>
    );
}
