import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Destination } from "./pages/DestinationPage";
import { Crew } from "./pages/CrewPage";
import { Technology } from "./pages/TechnologyPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/DestinationPage" element={<Destination />} />
      <Route path="/CrewPage" element={<Crew />} />
      <Route path="/TechnologyPage" element={<Technology />} />
    </Routes>
  );
}

export default App;
