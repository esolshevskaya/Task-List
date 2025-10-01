import { Routes, Route } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
    );
}