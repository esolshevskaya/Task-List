import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders project list and filters", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    const input = screen.getByLabelText(/search projects/i);

    fireEvent.change(input, { target: { value: "Weather" } });

    const project = screen.getByText((content) => content.includes("Weather"));
    expect(project).toBeInTheDocument();

    const hiddenProject = screen.queryByText((content) => content.includes("Next.js"));
    expect(hiddenProject).toBeNull();
});