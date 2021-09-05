import React, { useState, useEffect } from "react";
import ExList from "../components/ExList";

const HomePage = () => {
  const [excercises, setExcercises] = useState([]);
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

  return (
    <div>
      <ExList
        exercises={excercises}
        onDeleteEx={deleteExHandler}
        onToggleEx={toggleExComplHandler}
      />
    </div>
  );
};

export default HomePage;
