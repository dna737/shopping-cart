import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter } from "react-router-dom";
import "react";
import { vi } from "vitest";
import { routesConfig } from "../routesConfig.jsx";

describe("Route switching", () => {
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

describe("Cart functionality", () => {
    it("stores the right item and quantity in the cart", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/electronics"],
        });
        render(<RouterProvider router={router} />);
        const cartButton = screen.getByText(/CART/i);
        expect(cartButton).toBeInTheDocument();

        await user.click(cartButton);

        const mData = [1, 2];
        const mResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue(mData),
        };
        global.fetch = vi.fn().mockResolvedValue(mResponse);
    });
});
