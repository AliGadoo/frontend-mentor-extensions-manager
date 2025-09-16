import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [activeBtn, setActiveBtn] = useState("All");
  const statues = ["All", "Active", "Inactive"];

  return (
    <>
      <div className="container">
        <Navbar />
        <header>
          <h1>Extensions List</h1>
          <div className="status_btn_container">
            {statues.map((status) => (
              <button
                className={`default_btn ${
                  activeBtn === status ? "active" : ""
                }`}
                onClick={() => {
                  setActiveBtn(status);
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </header>
        <main></main>
      </div>
    </>
  );
}

export default App;
