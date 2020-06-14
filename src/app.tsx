import React from "react";
import ReactDOM from "react-dom";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const App = () => {
  return (
    <div>
      <h2>Hello From React!</h2>
    </div>
  );
};

ReactDOM.render(<App />, mainElement);
