import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, CategoriesPage, ProductPage, NotFound } from "@/pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App />}
                >
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path="/categories/:id"
                        element={<CategoriesPage />}
                    />
                    <Route
                        path="/categories/:id/product/:id"
                        element={<ProductPage />}
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
