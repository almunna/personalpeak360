import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import KanbanBoard from "./components/kanban/KandanBoard";
import UserTable from "./components/usertable/user";
import PreRegistrationPage from "./components/preregistration/PreRegistrationPage";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navigation Buttons */}


        {/* Routes */}
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<KanbanBoard />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/preregistration" element={<PreRegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;