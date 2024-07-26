import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import AppExpander from "./TextExpander";
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppExpander /> */}
    <App />
    {/* <StarRating maxRating={5} defultRating={3} />
    <StarRating maxRating={10} color="red" className="test" />
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} /> */}
  </React.StrictMode>
);
