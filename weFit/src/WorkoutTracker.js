import React, { useState, useEffect } from 'react';
import AddExerciseForm from './WorkoutTracker/AddExerciseForm';
import ExerciseModal from './WorkoutTracker/ExerciseModal';
import DaySelectContainer from './WorkoutTracker/DaySelectContainer';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import EditExerciseForm from './WorkoutTracker/EditExerciseForm';

import './styles/workoutTracker.css';


export default function App() {
  const daysOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const initialFormState = { key: '', name: '', weight: '', reps: '', comments: '', day: '' };
  const [appLoaded, setAppLoaded] = useState(false);
  const [targetedExercise, setTargetedExercise] = useState(initialFormState);
  const [exercises, setExercises] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState('Sunday');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.onload = setAppLoaded(true);
  }, [appLoaded]);

  function addExercise(exercise) {
    setIsEditing(false);
    exercise.key = new Date().getTime();
    setExercises([...exercises, exercise]);
  }

  function removeExercise() {
    setExercises(exercises.filter(exercise => exercise.key !== targetedExercise.key));
    closeModal();
  }

  function saveExercise() {
    setExercises(exercises.map(exercise => (exercise.key === targetedExercise.key ? targetedExercise : exercise)));
    setIsEditing(false);
  }

  function openModal(exercise) {
    setModalIsOpen(true);
    setTargetedExercise(exercise);
  }

  function closeModal() {
    setModalIsOpen(false);
    setTargetedExercise(initialFormState);
    setIsEditing(false);
  }

  return(
    <div className={appLoaded ? "app" : "app fade-out"}>
       <div className="trackerHeaderContainer">
      <h1 className="workoutHeader"> Plan Your Workout </h1>
      </div>
      <div className="bodyContainer">
        <div className="bodybodyContainer">
          <AddExerciseForm 
            addExercise={addExercise}
            isEditing={isEditing}
            daysOfWeekList={daysOfWeekList}
          />
          </div>
          <div className="bodybodyContainer2">
           
          <div className="rightSideStuff">
            
          <DaySelectContainer
            dayOfWeek={dayOfWeek}
            setDayOfWeek={setDayOfWeek}
            daysOfWeekList={daysOfWeekList}
          />
          <div className="tagsContainer">
          <div className="tags are-large">
          {exercises.map( (exercise, index) => (
            (dayOfWeek === exercise.day) ? (
              <a
                key={exercise.key}
                onClick={() => openModal(exercise)}
              >
                <Button variant="success" 
                onClick={handleShow}
                className="exerciseScheduled">
                  {exercise.name}
                </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {exercise.name}</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          {isEditing ? (
          <EditExerciseForm
            setTargetedExercise={setTargetedExercise}
            targetedExercise={targetedExercise}
            removeExercise={removeExercise}
            saveExercise={saveExercise}
            setIsEditing={setIsEditing}
            exercise={exercise}
          />
        ) : (
          <>
          <Modal.Body> 
            <div className="viewForm">
              <p className="formModal">Name: <span className="boxModal"> {exercise.name}</span></p>
              <p className="formModall">Weight: <span className="boxModal"> {exercise.weight}</span></p>
              <p className="formModal">Reps: <span className="boxModal"> {exercise.reps}</span></p>

            </div>

              <p className="formModal">Additional details: <span className="boxModal">{exercise.comments}</span></p></Modal.Body>
            <div className="modalButtonContainer">
              <Button 
                variant="success"
                className="button is-white"
                onClick={() => setIsEditing(true)}
              >Edit
              </Button>

              <Button
                variant="danger"
                className="removeButton"
                onClick={removeExercise}
              >Remove
              </Button>
            </div>
          </>
        )}
        </Modal.Footer>
      </Modal>
                  
                </a>
              ) : (
                <></>
              )
            ))}

            <ExerciseModal
              setTargetedExercise={setTargetedExercise}
              targetedExercise={targetedExercise}
              removeExercise={removeExercise}
              saveExercise={saveExercise}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </div>
          </div>
          </div>
          </div>
          </div>
          


       
      </div>
  );
}
