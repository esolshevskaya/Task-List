import { Link } from "react-router-dom";
import { useState } from "react";
import { useProjects } from "../hooks/useProjects";

export default function ProjectList() {
    const { items } = useProjects();
    const [search, setSearch] = useState("");

    const filtered = items.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="project-title">Projects</h1>
            <input
                aria-label="Search projects"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="project-search"
            />
            <ul>
                {filtered.map((p) => (
                    <li key={p.id} className="project-item">
                        <Link to={`/projects/${p.id}`} className="project-link">
                            {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}