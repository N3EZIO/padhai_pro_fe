import "./card.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardModal from "./CardModal";
import Login from "./Login";
// import { Data } from '../../containers/Data/Data'
import { useAuth0 } from "@auth0/auth0-react";

const Card = () => {
  // const mapQ = {
  //   p: 131,
  //   c: 148,
  //   m: 51,
  // };
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(0);
  const [next_qid, setNextqid] = useState(0);
  const subjArr = ["p", "c", "m"];
  const [subj, setSubj] = useState("c");
  //
  const [qid, setQid] = useState(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(subj, qid);
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // const baseUrl = "http://localhost:8000";
  const baseUrl = "https://wyc8ch.deta.dev/";
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  // console.log('hello');
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const fetchData = async (q_id, subject) => {
    const subj = subjArr[Math.floor(Math.random() * subjArr.length)];
    // console.log('hell1')

    try {
      const { data } = await axios.get(
        // "http://localhost:8000/question/" + subject + "/" + q_id,
        // "https://wyc8ch.deta.dev/question/" + subject + "/" + q_id,
        "/api/question/" + subject + "/" + q_id,

        {
          headers: header,
        }
      );
      // console.log(res?.data);
      setData(data);
      console.log(Data);
    } catch (err) {
      alert("Internal Server Error");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(qid, subj);
  }, [qid]);

  const handleChange = (e, subjectNum) => {
    setSelectedOptionId(Number(e.target.value));
  };

  // To flip the card
  const handleCardFlip = async (subjectNum) => {
    setLoading(false);
    setIsFlipped(!isFlipped);
  };

  // To reset the options after each question
  const resetOptions = (subjectNum) => {
    setSelectedOptionId(0);
  };

  // Or more precisely, handleSubmit
  const handleClick = async (subjectNum) => {
    // Flip the card to show the solution after submitting

    try {
      const resp = await axios.post(
        //  "http://localhost:8000/" + "question/" + subj + "/" + qid,
        // "https://wyc8ch.deta.dev" + "question/" + subj + "/" + qid,
         "/api/question/" + subj + "/" + qid,
        {
          option: selectedOptionId,
        },
        {
          headers: header,
        }
      );
      console.log(resp);
      await handleCardFlip(subjectNum);
      setSubj(resp.data.subject);
      setQid(resp.data.next_question + 1);
      console.log(qid);
      console.log(subj);
      setLoading(!loading);

      // setNextqid(qid);
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
    }

    // ***Jugaad*** - The answer/explanation to next question available after the card has flipped
    window.setTimeout(() => {
      // Call, to reset the options after each question
      resetOptions(subjectNum);
    }, 200);
  };

  return (
    Data && (
      <Container className="card-container">
        <Row>
          <Col lg={12} md={12} sm={12} className="mt-4 ">
            {isAuthenticated ? (
              <CardModal
                data={Data}
                isFlipped={isFlipped}
                handleClick={() => handleClick(1)}
                handleCardFlip={() => handleCardFlip(1)}
                selectedOptionId={selectedOptionId}
                handleChange={(e) => handleChange(e)}
                loading={loading}
              />
            ) : (
              <>
                {/* <h2> please Login</h2> */}
                <Login />
              </>
            )}
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Card;
