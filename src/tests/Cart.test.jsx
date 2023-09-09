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
    it("renders electronic products", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        const electronicsTab = screen.getByText(/ELECTRONICS/i);
        expect(electronicsTab).toBeInTheDocument();
        await user.click(electronicsTab);
        expect(
            screen.getByText(
                /WD 2TB Elements Portable External Hard Drive - USB 3.0/i
            )
        ).toBeInTheDocument();
    });
});
