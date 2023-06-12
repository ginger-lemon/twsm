import { createRoot } from "react-dom/client";

// clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead

const root = createRoot(document.getElementById("app"));
root.render(<h2>For testing react dev environment</h2>);