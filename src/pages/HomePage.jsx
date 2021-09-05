import React, { useState, useEffect } from "react";
import ExList from "../components/ExList";
import BaseFilter from "../components/BaseFilter";

const HomePage = () => {
  const [excercises, setExcercises] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const updateFilterHandler = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  useEffect(() => {
    async function fetchExcercises() {
      try {
        const response = await fetch("http://localhost:3111/exercises");
        const fetchedEx = await response.json();
        console.log("we fetched...", fetchedEx);
        setExcercises(fetchedEx);
      } catch (error) {}
    }
    fetchExcercises();
  }, []);

  const deleteExHandler = (id) => {
    const patchedEx = excercises.filter((excercise) => excercise.id !== id);
    setExcercises(patchedEx);
  };

  const toggleExComplHandler = (id) => {
    console.log("id is ", id);
    const clonedEx = [...excercises];
    const clickedIndex = clonedEx.findIndex((excercise) => excercise.id === id);
    const clickedEx = clonedEx[clickedIndex];
    clickedEx.complete = !clickedEx.complete;
    setExcercises(clonedEx);
  };
  let jsx = (
    <ExList
      exercises={excercises}
      onDeleteEx={deleteExHandler}
      onToggleEx={toggleExComplHandler}
    />
  );
  if (currentFilter === "completed") {
    jsx = (
      <ExList
        exercises={excercises.filter((excercise) => excercise.complete)}
        onDeleteEx={deleteExHandler}
        onToggleEx={toggleExComplHandler}
      />
    );
  } else if (currentFilter === "pending") {
    jsx = (
      <ExList
        exercises={excercises.filter((excercise) => !excercise.complete)}
        onDeleteEx={deleteExHandler}
        onToggleEx={toggleExComplHandler}
      />
    );
  }
  return (
    <div>
      <BaseFilter onUpdate={updateFilterHandler} current={currentFilter} />
      {jsx}
    </div>
  );
};

export default HomePage;
