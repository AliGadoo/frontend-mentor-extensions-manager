import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  const [activeBtn, setActiveBtn] = useState("All");
  const statues = ["All", "Active", "Inactive"];
  const [extensionsList, setExtensionList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchExtensions = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/data.json");
      if (!res.ok) {
        setErrorMessage("failed to fetch extensions. Please try again later");
      }
      const data = await res.json();
      if (!data) {
        setErrorMessage("failed to fetch extensions. Please try again later");
      }
      setExtensionList(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExtensions();
    console.log(extensionsList);
    console.log(errorMessage);
    console.log(isLoading);
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <header>
          <h1>Extensions List</h1>
          <div className="status_btn_container">
            {statues.map((status) => (
              <button
                key={status}
                className={`default_btn statues_btn ${
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
        <main>
          <div className="card_container">
            {isLoading ? (
              <p>Loading...</p>
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              extensionsList.map((extension) => (
                <Card key={extension.name} extension={extension} />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
