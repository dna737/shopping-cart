import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter } from "react-router-dom";
import "react";
// import { vi } from "vitest";

// import { useState } from "react";
import { routesConfig } from "../routesConfig.jsx";

describe("App component", () => {
    it("routes to the correct page after being clicked on a link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        const electronicsTab = screen.getByText(/ELECTRONICS/i);
        expect(electronicsTab).toBeInTheDocument();
        await user.click(electronicsTab);
        expect(router.state.location.pathname).toEqual("/electronics");
    });
});
