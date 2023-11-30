import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, CategoriesPage, ProductPage, NotFound } from "@/pages";
import { Provider } from "react-redux";
import { store } from "@/redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
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
                            path="/categories"
                            element={<CategoriesPage />}
                        />
                        <Route
                            path="/categories/product/:id"
                            element={<ProductPage />}
                        />

                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
