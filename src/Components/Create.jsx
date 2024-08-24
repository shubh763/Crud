import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };
  const navigate = useNavigate();

  const handleClick = (event) => {
    console.log("clicked");
    event.preventDefault();

    axios
      .post("https://66c16ab4f83fffcb587943dd.mockapi.io/crud-opr", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h1 className="m-3">CREATE PAGE</h1>
      <form>
        <div className="mb-3 m-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 m-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary m-3"
          onClick={handleClick}
        >
          Submit
        </button>
       
      </form>
    </>
  );
};

export default Create;
