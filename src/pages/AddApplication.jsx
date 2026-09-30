import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApplication() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApplication = {
      company: company,
      role: role,
      status: status
    };

    fetch("http://localhost:5000/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newApplication)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Added application:", data);

        setCompany("");
        setRole("");
        setStatus("Applied");

        navigate("/applications");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <h1>Add Application</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company: </label>

          <input
            type="text"
            value={company}
            onChange={(event) =>
              setCompany(event.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Role: </label>

          <input
            type="text"
            value={role}
            onChange={(event) =>
              setRole(event.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Status: </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Add Application
        </button>
      </form>
    </div>
  );
}

export default AddApplication;