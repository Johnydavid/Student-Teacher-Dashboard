import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormField, Button } from "semantic-ui-react";
import { API_URL } from "./Url";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/fontawesome-free-solid";

export default function Update() {
  const [id, setId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobile, setTeacherMobile] = useState("");
  const navigate = useNavigate();

  const updateAdmin = async () => {
    await axios.put(API_URL + id, {
      studentName,
      className,
      teacherName,
      teacherMobile,
    });
    navigate("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setStudentName(localStorage.getItem("studentName"));
    setClassName(localStorage.getItem("className"));
    setTeacherName(localStorage.getItem("teacherName"));
    setTeacherMobile(localStorage.getItem("teacherMobile"));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Update Student Teacher Details</h1>
      <Form className={"updateClass"}>
        <FormField>
          <label className="mt-3 me-3">Student Name</label>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter Student Name"
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-3">Class Name</label>
          <input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter Class Name"
            className="ms-3"
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-1">Teacher Name</label>
          <input
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            placeholder="Enter Teacher Name"
            className="ms-3"
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-1">Teacher Mobile</label>
          <input
            value={teacherMobile}
            onChange={(e) => setTeacherMobile(e.target.value)}
            placeholder="Enter Teacher Mobile"
            className="ms-3"
          />
        </FormField>{" "}
        <br />
        <Button className="btn btn-warning" onClick={updateAdmin}>
          {" "}
          <span className="fa-xl">
            <FontAwesomeIcon icon={faPenSquare} />{" "}
          </span>
          Update
        </Button>
      </Form>
    </>
  );
}
