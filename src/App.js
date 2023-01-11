import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alrt, setalrt] = useState(null);
  const setAlert = (message, type) => {
    setalrt({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalrt(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2c2f";
      setAlert("dark Mode has been enabled", "success");
    }
  };
  return (
    <>
      <NavBar title="MyBoot" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alrt} />
      <div className="container my-3 ">
        <TextForm
          title="MyBoot: Word Counter, Character counter , Capitalizer"
          mode={mode}
          setAlert={setAlert}
        />
      </div>
    </>
  );
}

export default App;
