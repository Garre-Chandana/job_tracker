
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Applications({ applications }) {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const [filter, setFilter] = useState("All");

  let filteredApplications = applications;

  if (status) {
    filteredApplications = applications.filter(
      app => app.status === status
    );
  }

  if (filter !== "All") {
    filteredApplications = applications.filter(
      app => app.status === filter
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

