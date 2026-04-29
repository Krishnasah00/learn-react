import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1> Custom App | Chai</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     terget: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blabk">
    Visit Google
  </a>
);

const anotherUser = "Chai aur React | Krishna";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },

  "Click me to Visit Google",
  anotherUser,
);

createRoot(document.getElementById("root")).render(
  reactElement
);
