import { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../app.css";
import {
  createEmployeeData,
  deleteEmployeeData,
  getEmployeeData,
  updateEmployeeData,
} from "../api";
function Home() {
  // const [formData, setFormData] = useState(initialState());
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
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

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialState(),
    onSubmit: async (values, action) => {
      console.log("Values", values);
      if (values.id) {
        await updateData();
      } else {
        await createData();
      }
      // setFormData(initialState());
      await getData();
      action.resetForm();
    },
    // enableReinitialize: true,
  });
  // const onChangeHandler = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  // const submit = async () => {
  //   console.log("data", formData);
  //   if (formData.id) {
  //     await updateData();
  //   } else {
  //     await createData();
  //   }
  //  await getData();
  //   setFormData(initialState());
  // };

  const createData = async () => {
    const res = await createEmployeeData(values);
    console.log("response : ", res);
    if (res.status === 201) {
      alert("User created successfully");
    } else {
      alert(res.message);
    }
  };

  const getData = async () => {
    const res = await getEmployeeData();
    console.log(res);
    setTableData(res.data);
  };

  const deleteData = async (user_id) => {
    const res = await deleteEmployeeData(user_id);
    console.log(res);
    if (res.status === 200) {
      alert("User deleted successfully");
      getData();
    } else {
      alert(res.message);
    }
  };

  const updateData = async () => {
    const res = await updateEmployeeData(values);
    console.log(res);
    if (res.status === 200) {
      alert("User updated successfully");
    } else {
      alert(res.message);
    }
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
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.contact_no}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.qualification}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.project}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.previous_company}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.joining_date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <button
            className="form-button submit-button"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="table-ui">
        <h2 className="h2-display">Employee Management Details </h2>
        <table className="table table-display">
          <thead className="table-dark">
            <tr>
              <th className="table-display">S. No.</th>
              <th className="table-display">Name</th>
              <th className="table-display">Contact No.</th>
              <th className="table-display">Email Id</th>
              <th className="table-display">Qualification</th>
              <th className="table-display">Project</th>
              <th className="table-display">Designation</th>
              <th className="table-display">Department</th>
              <th className="table-display">Salary</th>
              <th className="table-display">Experience</th>
              <th className="table-display">Previous Company</th>
              <th className="table-display">Joining Date</th>
              <th className="table-display">Edit</th>
              <th className="table-display">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr>
                  <td className="table-display">{index + 1}</td>
                  <td className="table-display">{item.name}</td>
                  <td className="table-display">{item.contact_no}</td>
                  <td className="table-display">{item.email}</td>
                  <td className="table-display">{item.qualification}</td>
                  <td className="table-display">{item.project}</td>
                  <td className="table-display">{item.designation}</td>
                  <td className="table-display">{item.department}</td>
                  <td className="table-display">{item.salary}</td>
                  <td className="table-display">{item.experience}</td>
                  <td className="table-display">{item.previous_company}</td>
                  <td className="table-display">{item.joining_date}</td>
                  <td className="table-display">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => {
                        setValues(item);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="table-display">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        deleteData(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
