import React from "react";
import { Home, Books, Book, Login, Logout, Dashboard, ErrPage, Admin,Details } from "./pages"
const routes = [
    { path: "/dashboard", component: () => <Dashboard />, },
    { path: "/", component: () => <Home />, },
    { path: "/books", component: () => <Books />, },
    { path: "/books/:id", component: () => <Book />, },
    { path: "/details", component: () => <Details />, },
    { path: "/admin", component: () => <Admin />, },
    { path: "/*", component: () => <ErrPage />, },
    { path: "/login", component: () => <Login />, },
    { path: "/logout", component: () => <Logout />, },
]
export default routes;