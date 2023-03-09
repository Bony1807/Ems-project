import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function EmployeeAddForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const createEmployee = (e) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
      };
      console.log(newEmployee);

      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  };

  return (
    <form onSubmit={createEmployee}>
      <div className="form-group mb-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="firstName"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          ref={inputRef}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="lastName"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="age"
          placeholder="Enter first name"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div class="form-group mb-2">
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="gender"
          placeholder="Enter gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-sm btn-primary mb-3">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeAddForm;
