import React, { useState } from "react";
import "./CreateExercise.css";
import { useHistory } from "react-router";

export default function CreateEx() {
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
  const history = useHistory();
  const handleCreation = (event) => {
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
  };
  return (
    <form onSubmit={handleCreation}>
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
      <button>Add Exercise</button>
    </form>
  );
}
