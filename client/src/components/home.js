import { useState } from "react";
import "../app.css";
import { createEmployeeData } from "../api";
function Home() {
  const [formData, setFormData] = useState(initialState());
  function initialState() {
    return {
      // id: "",
      name: "",
      contact_no: "",
      email: "",
      qualification: "",
      project: "",
      designation: "",
      department: "",
      salary: "",
      experience: "",
      previous_company: "",
      joining_date: "",
    };
  }
  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const submit = async () => {
    console.log("data", formData);
    await createData();
  };

  const createData = async () => {
    const res = await createEmployeeData(formData);
    console.log("response : ", res);
    if (res.status === 201) {
      alert("User created successfully");
    } else {
      alert(res.message);
    }
    setFormData(initialState());
  };
  return (
    <div className="display-ui">
      <div className="form">
        <form>
          <h2 className="text">Employee Management System </h2>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="name"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="contact_no"
            >
              Contact No.
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="contact_no"
                name="contact_no"
                placeholder="Enter your contact number"
                value={formData.contact_no}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="email"
            >
              Email Id
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="qualification"
            >
              Qualification
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="qualification"
                name="qualification"
                placeholder="Enter your qualification"
                value={formData.qualification}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="project"
            >
              Project
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="project"
                name="project"
                placeholder="Enter your project"
                value={formData.project}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="designation"
            >
              Designation
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="designation"
                name="designation"
                placeholder="Enter your designation"
                value={formData.designation}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="department"
            >
              Department
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="department"
                name="department"
                placeholder="Enter your department"
                value={formData.department}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="salary"
            >
              Salary
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="salary"
                name="salary"
                placeholder="Enter your salary"
                value={formData.salary}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="experience"
            >
              Experience
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="experience"
                name="experience"
                placeholder="Enter your experience"
                value={formData.experience}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="previous_company"
            >
              Previous Company
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="text"
                id="previous_company"
                name="previous_company"
                placeholder="Enter your previous company"
                value={formData.previous_company}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row input-form">
            <label
              className="col-sm-2 col-form-label col-form-label"
              for="joining_date"
            >
              Joining Date
            </label>
            <div className="col-sm-10">
              <input
                className="form-control form-control"
                type="date"
                id="joining_date"
                name="joining_date"
                value={formData.joining_date}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <button
            className="form-button submit-button"
            type="button"
            onClick={submit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="table-ui">
      <table className="table">
  <thead className="table-dark">
    <tr>
      <th>S. No.</th>
      <th>Name</th>
      <th>Contact No.</th>
      <th>Email Id</th>
      <th>Qualification</th>
      <th>Project</th>
      <th>Designation</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Experience</th>
      <th>Previous Company</th>
      <th>Joining Date</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
      </div>
    </div>
  );
}
export default Home;
