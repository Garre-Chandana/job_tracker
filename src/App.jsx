import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import AddApplication from "./pages/AddApplication";

function App() {
  return (
    <>
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

        <Route
          path="/add-application"
          element={<AddApplication />}
        />
      </Routes>
    </>
  );
}

export default App;