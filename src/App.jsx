import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Paste from "./Components/Paste";
import ViewPaste from "./Components/ViewPaste";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" exact element={<><Navbar /> <Home /> </>}/>
        <Route path="/pastes" exact element={<><Navbar /> <Paste /> </>}/>
        <Route path="/pastes/:id" exact element={<><Navbar /> <ViewPaste /> </>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
