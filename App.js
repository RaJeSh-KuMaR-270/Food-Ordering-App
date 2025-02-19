import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
