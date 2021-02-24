import React, { useState } from 'react';
import '../styles/addExercise.css'
// import woman from "../Assets/woman.jpg"

export default function AddExerciseForm(props) {

  const initialFormState = { key: '', name: '', weight: '', reps: '', comments: '', day: '' }
  const [exercise, setExercise] = useState(initialFormState);

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${exercise.name} was sucessfully added.`);
    props.addExercise(exercise);
    setExercise(initialFormState);
  }

  return(
    
    <div clasName="workoutContainer">
     
      <form
        className="addExerciseForm"
        onSubmit={handleSubmit}
      >

        <div className="field">
          {/* <label
            className="label"
            htmlFor="name"
          >Enter the name of your exercise
          </label> */}
          <div className="control">
            <input
              className="exerciseInput"
              type="text"
              name="name"
              value={exercise.name}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
              placeholder="Enter the name of your exercise"
            />
          </div>
        </div>

        <div className="field">
          {/* <label
            className="label"
            htmlFor="weight"
          >Enter the weight for your exercise
          </label> */}
          <div className="control">
            <input
              className="exerciseInput"
              type="text"
              name="weight"
              value={exercise.weight}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
              placeholder="Enter the weight for your exercise"
            />
          </div>
        </div>

        <div className="field">
          {/* <label
            className="label"
            htmlFor="reps"
          >Enter the number of reps for your exercise
          </label> */}
          <div className="control">
            <input
              className="exerciseInput"
              type="text"
              name="reps"
              value={exercise.reps}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              required
              placeholder="Enter the number of reps for your exercise"
            />
          </div>
        </div>

        <div className="field">
          {/* <label
            className="label"
            htmlFor="comments"
          >Additional details (optional)
          </label> */}
          <div className="control">
            <textarea
              className="exerciseInput"
              name="comments"
              value={exercise.comments}
              onChange={handleChange}
              disabled={props.isEditing ? true : false}
              placeholder="Additional details (optional)"
            />
          </div>
        </div>
      <div className="buttonContainer">
      <div className="select">
          <select
          className="exerciseInput"
            name="day"
            value={exercise.day}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>Select a day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>

        <button
          className="addExerciseButton "
          id="submitButton"
          type="submit"
          disabled={props.isEditing ? true : false}
        >Add Exercise
        </button>

      </div>
      </form>
      <div className="imageContainer">
        {/* <img src={woman} alt=""/> */}
      </div>
    </div>
   
  );
}
