import React, { useState } from "react";
import { API_URL } from "./Url";
import { Form, FormField  } from "semantic-ui-react";


import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {

  
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobile, setTeacherMobile] = useState("");
  const navigate = useNavigate();



  const postData = async () => {
    await axios.post(API_URL, {

      studentName,
      className,
      teacherName,
      teacherMobile      
    });
    
 
navigate('/read')
    
 }

 


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Enter Student and Teacher Details</h1>

      <Form className="form" onSubmit={postData} >
      
      
        <FormField>
          <label className="m-4">Student Name</label>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter Student Name" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-4">Class</label>
          <input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter Class Name"
            className="ms-3" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-4">Teacher_Name</label>
          <input
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            placeholder="Enter Teacher Name"
            className="ms-3" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-4">Teacher_Mobile</label>
          <input
            value={teacherMobile}
            onChange={(e) => setTeacherMobile(e.target.value)}
            placeholder="Enter Teacher Mobile Number"
            className="ms-3" required
          />
        </FormField>{" "}
       
       
        <input type="submit" value="Submit" className="btn btn-primary"/>
      
      </Form>
    </>
  );
}