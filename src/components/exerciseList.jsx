import React from 'react'

function ExerciseList(props) {
    if (props.exercises.length === 0) return null

    return (
        <ul>
            {props.exercises.map(exercise => <li key={exercise.id}>{exercise.title}</li>)}
        </ul>
    )
}

export default ExerciseList
