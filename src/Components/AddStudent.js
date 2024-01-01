import React, { useEffect, useState } from 'react'
import StudentService from '../Services/StudentService';
import { useNavigate } from 'react-router-dom';
import '../Css/add.css'

const AddStudent = () => {


  const [student, setStudent] = useState({
    name: "",
    address: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState({})

  const addStudent = (e) => {
    const validationerror = {}

    if (!student.name) {
      validationerror.name = "Name Required"
    }
    else if (student.name.length < 5) {
      validationerror.name = "Name must be more than 5 Char"
    }
    if (!student.address) {
      validationerror.address = "Address Required"
    }
    if (!student.email) {
      validationerror.email = "Email Required"
    }

    e.preventDefault()
    setError(validationerror)
    if (Object.keys(validationerror).length === 0) {
      StudentService
        .addStudent(student)
        .then((res) => {
          // navigate("/");
          setStudent({
            name: "",
            address: "",
            email: ""
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }




  // const myTimeout = setTimeout(myGreeting, 5000);

  // function myStopFunction() {
  //   clearTimeout(myTimeout);
  // }

  // useEffect(() => {
  //   if (Object.keys(error).length === 0 && (student.name !== " "))
  //     alert("form submitted")
  // },[error])

  const cancleButton = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <div className="card-header fs-3 text-center">
              Add Student
              {/* {msg && <p className="fs-4 text-center text-success">{msg}</p>} */}
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => addStudent(e)}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Enter Student Name</label>
                  <input type="text" name="name" value={student.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleChange(e)} />
                  {error.name && <p style={{ color: "red", fontSize: "13px" }}>{error.name}</p>}
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Enter Student Address</label>
                  <input type="text" name="address" value={student.address} class="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} />
                  {error.address && <p style={{ color: "red", fontSize: "13px" }}>{error.address}</p>}
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Enter Student Email</label>
                  <input type="email" name="email" value={student.email} class="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} />
                  {error.email && <p style={{ color: "red", fontSize: "13px" }}>{error.email}</p>}
                </div>
                <button type="submit" class="btn btn-success m-2" >Submit</button>
                <button class="btn btn-danger m-2" onClick={(e) => cancleButton(e)}>cancle</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddStudent