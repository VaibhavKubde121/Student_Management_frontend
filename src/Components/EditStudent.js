import React, { useEffect, useState } from 'react'
import StudentService from '../Services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';
import '../Css/add.css'

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    address: "",
    email: ""
  });

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    StudentService
      .getStudentById(id)
      .then((res) => {
        setStudent(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[])

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  const updateStudent = (e) => {
    e.preventDefault();
    StudentService
      .updateStudent(student)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

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
              Update Student
              {/* {msg && <p className="fs-4 text-center text-success">{msg}</p>} */}
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => updateStudent(e)}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Enter Student Name</label>
                  <input type="text" name="name" value={student.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleChange(e)} required/>

                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Enter Student Address</label>
                  <input type="text" name="address" value={student.address} class="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} required/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Enter Student Email</label>
                  <input type="email" name="email" value={student.email} class="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} required/>
                </div>
                <button type="submit" class="btn btn-primary m-2">Submit</button>
                <button class="btn btn-danger m-2" onClick={(e) => cancleButton(e)}>cancle</button>
              </form>


            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default EditStudent