import React from "react";
import ExItem from "./ExItem";
import "./ExList.css";

function ExList(props) {
  console.log(props.exercises);
  if (props.exercises.length === 0) return null;
  return (
    <div className="exercises-list">
      {props.exercises.map((exercise) => (
        <ExItem
          key={exercise.id}
          exercise={exercise}
          onDeleteEx={props.onDeleteEx}
          onToggleEx={props.onToggleEx}
        />
      ))}
    </div>
  );
}

export default ExList;
