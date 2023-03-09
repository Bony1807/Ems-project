import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EmployeeAddForm from "./CreateEmployee";
import React from "react";

function Employeecomp() {
  const [employees, setEmployeesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.users);
        setEmployeesData(json.users);
        setIsLoading(false);
        console.log("Hello");
      })
      .catch((error) => {
        //Handle errors
        console.error(error);
      });
  }, []);

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch("https://dummyjson.com/users/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            if (result.isDeleted) {
              alert("Recorde has been deleted..");
            }
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  };

  // const createEmployee = (fname, lname, empage, empgender) => {
  //   if (window.confirm("Are you sure?")) {
  //     fetch("https://dummyjson.com/users/add", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstName: fname,
  //         lastName: lname,
  //         age: empage,
  //         gender: empgender,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           console.log(result);
  //         },
  //         (error) => {
  //           alert("Failed");
  //         }
  //       );
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <button
              className="btn btn-primary my-4 float-end"
              onClick={handleShow}
            >
              Add Employee
            </button>

            {isLoading ? (
              <div>Loading....</div>
            ) : (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Employee Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees && employees.length > 0 ? (
                      employees.map((emp) => (
                        <tr key={emp.id}>
                          <td>{emp.id}</td>
                          <td>{emp.firstName}</td>
                          <td>{emp.lastName}</td>
                          <td>{emp.age}</td>
                          <td>{emp.gender}</td>
                          <td>
                            <button
                              className="btn btn-xs btn-danger"
                              onClick={() => deleteEmployee(emp.id)}
                            >
                              <small>Delete</small>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="text-danger">No Data Found !</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {showModal && (
              <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add new Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EmployeeAddForm />
                  {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label> Last Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label> Age</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Row>
                        <Col xs={12} md={3}>
                          <Form.Label> Gender</Form.Label>
                        </Col>
                        <Col xs={12} md={3}>
                          <Form.Check type="checkbox" label="Male" />
                        </Col>
                        <Col xs={12} md={3}>
                          <Form.Check type="checkbox" label="Female" />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form> */}
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => createEmployee("", "", "", "")}
                  >
                    Create
                  </Button>
                </Modal.Footer> */}
              </Modal>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Employeecomp;
