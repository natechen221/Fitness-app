import React from 'react';
import '../styles/editExercise.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function EditExerciseForm(props) {

  function handleChange(e) {
    props.setTargetedExercise({ ...props.targetedExercise, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.saveExercise(props.exercise.key);
  }

  return(

    <Form
      onSubmit={handleSubmit}
    >

      <section className="modal-card-body">
        <Form.Group className="field">
          <label
            className="formLabel"
            htmlFor="name"
          >Name:
          </label>
          <div className="control">
            <Form.Control
              className="input"
              type="text"
              name="name"
              value={props.targetedExercise.name}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>

        <div className="field">
          <label
            className="formLabel"
            htmlFor="weight"
          >Weight:
          </label>
          <div className="control">
            <Form.Control
              className="input"
              type="text"
              name="weight"
              value={props.targetedExercise.weight}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="formLabel"
            htmlFor="reps"
          >Reps:
          </label>
          <div className="control">
            <Form.Control
              className="input"
              type="text"
              name="reps"
              value={props.targetedExercise.reps}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="formLabel"
            htmlFor="comments"
          >Additional details:
          </label>
          <div className="control">
            <Form.Control
              as="textarea"
              className="input"
              name="comments"
              value={props.targetedExercise.comments}
              onChange={handleChange}
              required
            />
          </div>
        </div>

      </section>

      <div className="modalButtonContainer">
        <Button
          variant="secondary"
          className="cancelButton"
          type="button"
          onClick={() => props.setIsEditing(false)}
        >Cancel
        </Button>

        <Button
          variant="success"
          className="saveButton"
          type="submit"
          onClick={props.saveExercise}
        >Save
        </Button>
      </div>
    </Form>
  );
}
