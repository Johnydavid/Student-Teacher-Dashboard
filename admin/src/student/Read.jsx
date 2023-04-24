import React, { useState, useEffect } from "react";
import { API_URL } from "./Url";
import axios from "axios";
import "./Read.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/fontawesome-free-solid";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const updateAdmin = ({ id, studentName, className, teacherName, teacherMobile }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("className", className);
    localStorage.setItem("teacherName", teacherName);
    localStorage.setItem("teacherMobile", teacherMobile);
    navigate("/update");
  };

  const deleteAdmin = async (id) => {
    await axios.delete(API_URL + id);
    getAdmin();
  };

  const getAdmin = async () => {
    const response = await axios.get(API_URL);
    setApiData(response.data);
  };
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Student - Teacher Dashboard</h1>
      <div className={"table_container"}>

     
      {/* <Table className="main table table-responsive container-sm container-md"> */}
      <table class="table table-warning">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Student Name</th>
                <th>Class Name</th>
                <th>Teacher Name</th>
                <th>Teacher Mobile</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody class="table table-info">
         
            {apiData.map((data) => (
                   <tr>
                <td>{data.id}</td>
                <td>{data.studentName}</td>
                <td>{data.className}</td>
                <td>{data.teacherName}</td>
                <td>{data.teacherMobile}</td>
                <td><button
                  className={"btn btn-warning"}
                  onClick={() => updateAdmin(data)}
                >
                  {" "}
                  <span className="fa-xl">
                    <FontAwesomeIcon icon={faPenSquare} />{" "}
                  </span>{" "}
                </button></td>
                <td>
                <button
                  className={"btn btn-danger text-dark"}
                  onClick={() => deleteAdmin(data.id)}
                >
                  <span style={{ color: "black" }} className="fa-xl">
                    <FontAwesomeIcon icon={faTrash} />
                  </span>{" "}
                </button>
                </td>
            </tr>
                   ))}
        </tbody>
        </table>
       
      </div>
    </>
  );
}