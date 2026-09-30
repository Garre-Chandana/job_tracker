import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Navbar from "./components/Navbar";
import ApplicationDetails from "./pages/ApplicationDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
        path="/applications/:id"
        element={<ApplicationDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;