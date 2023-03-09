// import React from "react";
// function Employee() {
//   return (
//     <div>
//       <h5 className="mx-4 my-5">Employee page</h5>
//     </div>
//   );
// }
// export default Employee;

// import React, { Component } from "react";
// export class Employee extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employees: [],
//     };
//   }

//   refreshList() {
//     fetch("https://dummy.restapiexample.com/api/v1/employees")
//       .then((response) => response.json())
//       .then((output) => {
//         this.setState({ employees: output.data });
//       });
//   }

//   componentDidMount() {
//     this.refreshList();
//   }
//   render() {
//     const { employees } = this.state;

//     return (
//       <div>
//         <h5 className="mx-4 my-5">Employee page</h5>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Employee Id</th>
//               <th>Employee Name</th>
//               <th>Salary</th>
//               <th>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr>
//                 <td>{emp.id}</td>
//                 <td>{emp.employee_name}</td>
//                 <td>{emp.employee_salary}</td>
//                 <td>{emp.employee_age}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
