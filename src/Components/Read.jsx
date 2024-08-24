import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://66c16ab4f83fffcb587943dd.mockapi.io/crud-opr")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://66c16ab4f83fffcb587943dd.mockapi.io/crud-opr/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <h1 className="m-5">Read List of Users</h1>
        <table class="table m-5 p-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((value) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(value.id, value.name, value.email)
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(value.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <button className="btn btn-secondary m-4">Back</button>
        <Link to="/">
          <button className="btn btn-primary">Create Data</button>
        </Link>
      </>
    </div>
  );
};

export default Read;
