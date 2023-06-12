import React from "react";
import { createRoot } from "react-dom/client";

// clear the existing HTML content
const root = createRoot(document.getElementById("app"));

function App() {
    return <h2>For testing react dev environment</h2>;
}

root.render(<App />);

// Render your React component instead


// root.render(<h2>For testing react dev environment</h2>);