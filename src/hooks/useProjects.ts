import { useState } from "react";
import { projects } from "../data/data";
import type { Project } from "../data/data";

export function useProjects() {
    const [items] = useState<Project[]>(projects);

    const getById = (id: number) => items.find((p) => p.id === id);

    return { items, getById };
}