import React from "react";
import "./ExItem.css";

export default function ExItem(props) {
  const performExDelete = () => {
    fetch(`http://localhost:3111/exercises/${props.exercise.id}`, {
      method: "DELETE",
    })
      .then(() => {
        props.onDeleteEx(props.exercise.id);
      })
      .catch((error) => console.log(error));
  };

  const performToggleEx = () => {
    fetch(`http://localhost:3111/exercises/${props.exercise.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: !props.exercise.complete }),
    })
      .then(() => {
        props.onToggleEx(props.exercise.id);
      })
      .catch((error) => console.log("The Error is ", error));
  };

  const classes = ["exercise"];
  if (props.exercise.complete) {
    classes.push("complete");
  }

  return (
    <div className={classes.join(" ")}>
      <div className="actions">
        <h4>{props.exercise.title}</h4>
        <div className="buttons">
          <button onClick={performExDelete}> Delete </button>
          <button onClick={performToggleEx}> Toggle </button>
        </div>
      </div>
      <div className="detials">
        <p>{props.exercise.details}</p>
      </div>
    </div>
  );
}
