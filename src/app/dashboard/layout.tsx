import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
        <nav>
            About NavBar</nav>
            <main> {children}
            </main></>
    )
}