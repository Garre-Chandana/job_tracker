import { useParams } from "react-router-dom";

function ApplicationDetails() {

  const { id } = useParams();

  const applications = [
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
  ];

  const application = applications.find(
    app => app.id === Number(id)
  );

  return (
    <div>

      <h1>{application.company}</h1>

      <p>Role: {application.role}</p>

      <p>Status: {application.status}</p>

    </div>
  );
}

export default ApplicationDetails;