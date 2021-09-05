import React, { useState, useEffect } from "react";
import "./CreateExercise.css";
import { useHistory, useParams } from "react-router";

export default function EditEx() {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });
  const handleChange = (event) => {
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,
    });
  };

  const params = useParams();
  const exId = params.id;
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:3111/exercises/${exId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExercise({
          title: data.title,
          details: data.details,
        });
      })
      .catch((error) => console.log(error));
  }, [exId]);
  /*const handleUpdation = (event) => {
    event.preventDefault();
    const newEx = {
      title: exercise.title,
      details: exercise.details,
      complete: false,
      id: Math.floor(Math.random() * 10000),
    };
    console.log("new ex:", newEx);
    fetch("http://localhost:3111/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEx),
    })
      .then(() => {
        history.push("/home");
      })
      .catch((error) => console.log(error));
  };*/
  const handleUpdation = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3111/exercises/${exId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    })
      .then(() => {
        history.push("/home");
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleUpdation}>
      <label>Title</label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={exercise.title}
        maxLength="15"
        required
      />
      <label>Details</label>
      <textarea
        name="details"
        cols="30"
        rows="10"
        value={exercise.details}
        onChange={handleChange}
        required
      ></textarea>
      <button>Update Exercise</button>
    </form>
  );
}
