import React, { useState } from "react";
import { API_URL } from "./Url";
import { Form, FormField } from "semantic-ui-react";
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
      teacherMobile,
    });

    navigate("/read");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Enter Student and Teacher Details</h1>

      <Form className={"formClass"} onSubmit={postData}>
        <FormField>
          <label className="mt-3 me-4">Student Name</label>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder=" Student Name"
            required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-4">Class Name</label>
          <input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder=" Class Name"
            className="ms-3"
            required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-2">Teacher_Name</label>
          <input
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            placeholder=" Teacher Name"
            className="ms-3"
            required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-1">Teacher_Mobile</label>
          <input
            value={teacherMobile}
            onChange={(e) => setTeacherMobile(e.target.value)}
            placeholder="Teacher Mobile Number"
            className="ms-3"
            required
          />
        </FormField>{" "}
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </Form>
    </>
  );
}
