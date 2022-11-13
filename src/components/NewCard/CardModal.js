import React from "react";
import ReactCardFlip from "react-card-flip";

import "./card.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FlippedCard from "./FlippedCard";

const CardModal = ({
  data,
  isFlipped,
  handleClick,
  handleCardFlip,
  selectedOptionId,
  handleChange,
  loading,
}) => {
  const data_body = data.question;
  return (
    <div className="card-comp">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card text-dark bg-light mb-3">
        <div className="card-modal-front">
          <div className="card-header">{data_body["Topic"]}</div>
          <div className="card-body">
            <div className="card-title">Q.{data["q_id"]}</div>
            <div className="card-text">{data_body["Question"]}</div>
          </div>
          <Form>
            <div className="card-body">
              {/* { data.question.map((data_body) =>  */}
              <Form.Check
                required
                key={1}
                type="radio"
                label={data.question["Option 1"]}
                value={1}
                id={`${data_body["Topic"]}${data_body.q_id}${1}`}
                name={`${data_body["Topic"]}${data_body.q_id}`}
                onChange={handleChange}
                checked={selectedOptionId === 1}
              />
              <Form.Check
                required
                key={2}
                type="radio"
                label={data_body["Option 2"]}
                value={2}
                id={`${data_body["Topic"]}${data_body.q_id}${2}`}
                name={`${data_body["Topic"]}${data_body.q_id}`}
                onChange={handleChange}
                checked={selectedOptionId === 2}
              />
              <Form.Check
                required
                key={3}
                type="radio"
                label={data_body["Option 3"]}
                value={3}
                id={`${data_body["Topic"]}${data_body.q_id}${3}`}
                name={`${data_body["Topic"]}${data_body.q_id}`}
                onChange={handleChange}
                checked={selectedOptionId === 3}
              />
              <Form.Check
                required
                key={4}
                type="radio"
                label={data_body["Option 4"]}
                value={4}
                id={`${data_body["Topic"]}${data_body.q_id}${4}`}
                name={`${data_body["Topic"]}${data_body.q_id}`}
                onChange={handleChange}
                checked={selectedOptionId === 4}
              />
              {/* )} */}
            </div>
            <div className="card-footer">
              <Stack gap={2}>
                {/* Disabled - to prevent submitting empty value */}
                <Button
                  id="btn-flip"
                  className="w-100"
                  variant="primary"
                  disabled={!selectedOptionId}
                  onClick={handleCardFlip}
                >
                  Submit
                </Button>
              </Stack>
            </div>
          </Form>
        </div>
      </div>

      {/* To change the style according to the option selected */}
      {/* {console.log(`Option ${data_body["Correct Option"]}`)} */}
      {loading === true ? (
        <div> </div>
      ) : (
        <FlippedCard
          data={data}
          data_body={data_body}
          handleCardFlip={handleCardFlip}
          handleClick={handleClick}
          selectedOptionId={selectedOptionId}
          loading={loading}
        />
      )}
    </ReactCardFlip>
  </div>
  );
};

export default CardModal;
