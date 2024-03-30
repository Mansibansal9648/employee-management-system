import axios from "axios";

const baseURL = "http://localhost:8000/data";

export const createEmployeeData = async (data) => {
  try {
    const res = await axios.post(baseURL, {
      name: data.name,
      contact_no: data.contact_no,
      email: data.email,
      qualification: data.qualification,
      project: data.project,
      designation: data.designation,
      department: data.department,
      salary: data.salary,
      experience: data.experience,
      previous_company: data.previous_company,
      joining_date: data.joining_date,
    });
    return res;
  } catch (error) {
    return error;
  }
};


export const getEmployeeData = async()=>{
  try{
const res= await axios.get(baseURL)
  return res;
  }catch(error){
    return error;
  }
}

export const deleteEmployeeData = async(employee_id)=>{
  try{
const res=await axios.delete(`${baseURL}/${employee_id}`)
return res;
  }catch(error){
    return error;
  }
}
