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
  const submit = async() => {
    console.log("data", formData);
    await createData();
  };

  const createData=async()=>{
const res= await createEmployeeData(formData);
console.log("response : ",res)
if(res.status===201){
  alert("User created successfully")
}
else{
  alert(res.message)
}
setFormData(initialState())
  }
  return (
    <>
      <div>
        <form>
          <h2>Employee Management System </h2>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={onChangeHandler}
          />
          <label for="contact_no">Contact No.</label>
          <input
            type="text"
            id="contact_no"
            name="contact_no"
            placeholder="Enter your contact number"
            value={formData.contact_no}
            onChange={onChangeHandler}
          />
          <label for="email">Email Id</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email id"
            value={formData.email}
            onChange={onChangeHandler}
          />
          <label for="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder="Enter your qualification"
            value={formData.qualification}
            onChange={onChangeHandler}
          />
          <label for="project">Project</label>
          <input
            type="text"
            id="project"
            name="project"
            placeholder="Enter your project"
            value={formData.project}
            onChange={onChangeHandler}
          />
          <label for="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter your designation"
            value={formData.designation}
            onChange={onChangeHandler}
          />
          <label for="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            placeholder="Enter your department"
            value={formData.department}
            onChange={onChangeHandler}
          />
          <label for="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="Enter your salary"
            value={formData.salary}
            onChange={onChangeHandler}
          />
          <label for="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Enter your experience"
            value={formData.experience}
            onChange={onChangeHandler}
          />
          <label for="previous_company">Previous Company</label>
          <input
            type="text"
            id="previous_company"
            name="previous_company"
            placeholder="Enter your previous company"
            value={formData.previous_company}
            onChange={onChangeHandler}
          />
          <label for="joining_date">Joining Date</label>
          <input
            type="date"
            id="joining_date"
            name="joining_date"
            value={formData.joining_date}
            onChange={onChangeHandler}
          />
          <button type="button" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Home;
