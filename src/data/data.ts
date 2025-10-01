export interface Project {
    id: number;
    name: string;
    description: string;
}

export const projects: Project[] = [
    { id: 1, name: "TaskMaster Pro (add priority sorting component)", description: "Manage tasks efficiently" },
    { id: 2, name: "WeatherPoint (weekly and hourly forecast module)", description: "Check local weather forecasts" },
    { id: 3, name: "MovieVault Extended Edition (connect movie API)", description: "Track movies you've watched and want to see" },
    { id: 4, name: "BudgetTrack Lite (expense chart component)", description: "Keep personal finances under control" },
    { id: 5, name: "RecipeHub Deluxe (ingredient search feature)", description: "Discover and save your favorite recipes" },
    { id: 6, name: "NoteNest (notes categorization component)", description: "Organize notes and ideas in one place" },
];