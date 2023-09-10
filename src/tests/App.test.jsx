import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
    it("renders correct brand name", () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByText("FAKE_MRKT")).toBeInTheDocument();
    });
});
