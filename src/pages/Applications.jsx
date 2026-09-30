import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Applications() {
  const [applications, setApplications] = useState([]);

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const [filter, setFilter] = useState("All");

  // Get applications from server
  useEffect(() => {
    fetch("http://localhost:5000/applications")
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.log(error));
  }, []);

  let filteredApplications = applications;

  // URL state
  if (status) {
    filteredApplications = applications.filter(
      (app) => app.status === status
    );
  }

  // Local state
  if (filter !== "All") {
    filteredApplications = applications.filter(
      (app) => app.status === filter
    );
  }

  return (
    <div>
      <h1>Applications</h1>

      <button onClick={() => setFilter("All")}>
        Show All
      </button>

      <button onClick={() => setFilter("Applied")}>
        Show Applied
      </button>

      <button onClick={() => setFilter("Interview")}>
        Show Interview
      </button>

      <button onClick={() => setFilter("Selected")}>
        Show Selected
      </button>

      {filteredApplications.map((application) => (
        <div key={application.id}>
          <h2>{application.company}</h2>

          <p>Role: {application.role}</p>

          <p>Status: {application.status}</p>

          <Link to={`/applications/${application.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Applications;