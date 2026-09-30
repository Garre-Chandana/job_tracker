import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;