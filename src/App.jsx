import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import AddApplication from "./pages/AddApplication";

function App() {
  const [applications, setApplications] = useState([
    {
      id: 101,
      company: "Amazon",
      role: "Software Developer Intern",
      status: "Applied"
    },
    {
      id: 102,
      company: "Salesforce",
      role: "Developer Intern",
      status: "Interview"
    },
    {
      id: 103,
      company: "Microsoft",
      role: "Data Science Intern",
      status: "Selected"
    }
  ]);

  const addApplication = (newApplication) => {
    setApplications([...applications, newApplication]);
  };

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
          element={
            <Applications applications={applications} />
          }
        />

        <Route
          path="/applications/:id"
          element={
            <ApplicationDetails applications={applications} />
          }
        />

        <Route
          path="/add-application"
          element={
            <AddApplication
              addApplication={addApplication}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
