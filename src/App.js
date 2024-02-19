import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
function App() {
  return (
    <div className="grid md:grid-cols-3">
      <Nav/>
      <Main/>
    </div>
  );
}
export default App;
