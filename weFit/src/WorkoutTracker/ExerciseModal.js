import React from 'react';
import EditExerciseForm from './EditExerciseForm';
import '../styles/exerciseModal.css'

export default function ExerciseModal(props) {
  return(
    <div className={props.modalIsOpen ? "modal is-active" : "modal"}>
      <div
        className="modal-background"
        onClick={props.closeModal}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.targetedExercise.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          ></button>
        </header>

        {/* {isEditing ? (
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
            <section className="modal-card-body section">
              <p className="content has-text-weight-medium modalLabel">Name: <span className="boxModal"> {targetedExercise.name}</span></p>
              <p className="content has-text-weight-medium modalLabel">Weight: <span className="boxModal"> {targetedExercise.weight}</span></p>
              <p className="content has-text-weight-medium modalLabel">Reps: <span className="boxModal"> {targetedExercise.reps}</span></p>
              <p className="content has-text-weight-medium modalLabel">Additional details: <span className="boxModal">{targetedExercise.comments}</span></p>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-white"
                onClick={() => setIsEditing(true)}
              >Edit
              </button>

              <button
                className="button is-danger"
                onClick={removeExercise}
              >Remove
              </button>
            </footer>
          </>
        )} */}
    
      </div>
    </div>
  );
}
