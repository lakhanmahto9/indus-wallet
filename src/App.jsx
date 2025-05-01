import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/credentials/Welcome";
import GeneralNotice from "./components/credentials/GeneralNotice";
import CreatePassword from "./components/credentials/manage-password/CreatePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/general-notice" element={<GeneralNotice/>}/>
        <Route path="/create-password" element={<CreatePassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
