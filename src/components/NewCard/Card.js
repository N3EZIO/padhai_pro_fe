import "./card.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardModal from "./CardModal";
import Login from "./Login";
import DropdownMenu from "./Dropdown";

import { useAuth0 } from "@auth0/auth0-react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(0);
  const [next_qid, setNextqid] = useState(0);
  const subjArr = ["p", "c", "m"];
  const [subj, setSubj] = useState("c");
  const [randqid, setRandqid] = useState(
    Math.floor(Math.random() * (50 - 1 + 1)) + 1
  );

  const [qid, setQid] = useState(1);
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://wyc8ch.deta.dev/";
  const [option, setOption] = useState(null);
  const [suboption, setSuboption] = useState(null);

  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const sendPostReqOnBeforeUnload = async () => {
    const jwtToken = await getAccessTokenSilently();

    if (suboption) {
      try {
        console.log("Before Unload", suboption, qid);
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL +
            "/api/update_user/" +
            suboption +
            "/" +
            qid,
          {
            jwt: jwtToken,
          }
        );
      } catch (err) {
        // alert("Internal Server error 01");
        console.log(err);
      }
    }
  };

  const fetchData = async () => {
    const jwtToken = await getAccessTokenSilently();
    const subj = subjArr[Math.floor(Math.random() * subjArr.length)];

    if (option && suboption) {
      try {
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL +
            "/api/get_chapt/" +
            option +
            "/" +
            suboption +
            "/",

          {
            jwt: jwtToken,
          },
          {
            headers: header,
          }
        );

        // .then((resp) => {
        //   setData(resp.data);
        //   console.log(resp);
        // });
        setData(resp.data);
        setQid(resp.data.q_id);
        // console.log(resp);
        await ((resp) => {
          setData(resp.data);
          // setQid(resp.data.q_id);
          // console.log(resp);
        });
      } catch (err) {
        alert("Internal Server Error");
        console.log(err);
      }
    } else if (!option && !suboption) {
      try {
        console.log(
          process.env.REACT_APP_BACKEND_URL +
            "/api" +
            "/question" +
            "/" +
            subj +
            "/" +
            randqid +
            "/"
        );
        const resp = await axios.get(
          process.env.REACT_APP_BACKEND_URL +
            "/api" +
            "/question" +
            "/" +
            subj +
            "/" +
            randqid +
            "/",
          {
            jwt: jwtToken,
          },
          {
            headers: header,
          }
        );
        setData(resp.data);
        setRandqid(resp.data.q_id);

        await ((resp) => {
          setData(resp.data);
          // setQid(resp.data.q_id);
          // console.log(resp);
        });
        // console.log(jwtToken);
      } catch (err) {
        alert("Int server error");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    // console.log("Funciton called again");
    fetchData();
  }, [option, suboption, randqid]);

  // useEffect(() => {
  //   // setPrevsubopt(suboption);
  //   sendPostReqOnBeforeUnload();
  // }, [suboption]);

  const handleChange = (e, subjectNum) => {
    setSelectedOptionId(Number(e.target.value));
  };

  const handleCardFlip = async (subjectNum) => {
    setLoading(false);
    setIsFlipped(!isFlipped);
  };

  const resetOptions = (subjectNum) => {
    setSelectedOptionId(0);
  };
  const handleDropdownSelect = async (option, suboption) => {
    setOption(option);
    setSuboption(suboption);
    await sendPostReqOnBeforeUnload();
  };

  // window.onbeforeunload = sendPostReqOnBeforeUnload;

  // Or more precisely, handleSubmit
  const handleClick = async (subjectNum) => {
    // Flip the card to show the solution after submitting

    const jwtToken = await getAccessTokenSilently();
    if (option && suboption) {
      try {
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL +
            "/api/get_chapt_ques/" +
            option +
            "/" +
            suboption +
            "/" +
            qid,

          {
            option: selectedOptionId,
            jwt: jwtToken,
          },
          {
            headers: header,
          }
        );
        // console.log(resp);
        await handleCardFlip(subjectNum);
        // setSubj(resp.data.subject);
        setData(resp.data);
        setQid(resp.data.q_id);
        window.onbeforeunload = sendPostReqOnBeforeUnload;

        setLoading(!loading);

        // setNextqid(qid);
        // window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    } else if (!option && !suboption) {
      try {
        console.log(
          process.env.REACT_APP_BACKEND_URL +
            "/api" +
            "/question" +
            "/" +
            subj +
            "/" +
            randqid +
            "/"
        );
        const resp = await axios.post(
          process.env.REACT_APP_BACKEND_URL +
            "/api" +
            "/question" +
            "/" +
            subj +
            "/" +
            randqid +
            "/",
          {
            option: selectedOptionId,
            jwt: jwtToken,
          },
          {
            headers: header,
          }
        );
        await handleCardFlip(subjectNum);

        // setData(resp.data);
        // setSubj(resp.subject);
        setRandqid(resp.data.next_question);
        window.onbeforeunload = sendPostReqOnBeforeUnload;
        setLoading(!loading);

        //
      } catch (err) {
        alert("Int serv err 2");
        console.log(err);
      }
    }

    // ***Jugaad*** - The answer/explanation to next question available after the card has flipped
    window.setTimeout(() => {
      // Call, to reset the options after each question
      resetOptions(subjectNum);
    }, 200);
  };

  return (
    // <div>
    //   <DropdownMenu onSelect={handleDropdownSelect} />
    //   {Data && (
    //     <Container className="card-container">
    //       <Row>
    //         <Col lg={12} md={12} sm={12} className="mt-4 ">
    //           {isAuthenticated ? (
    //             <>
    //               <CardModal
    //                 data={Data}
    //                 isFlipped={isFlipped}
    //                 handleClick={() => handleClick(1)}
    //                 handleCardFlip={() => handleCardFlip(1)}
    //                 selectedOptionId={selectedOptionId}
    //                 handleChange={(e) => handleChange(e)}
    //                 loading={loading}
    //               />
    //             </>
    //           ) : (
    //             <>
    //               {/* <h2> please Login</h2> */}
    //               <Login />
    //             </>
    //           )}
    //         </Col>
    //       </Row>
    //     </Container>
    //   )}
    // </div>

    // DIVISION

    <div>
      <Container className="card-container">
        <Row>
          <Col lg={12} md={12} sm={12} className="mt-4 ">
            {isAuthenticated ? (
              <>
                <DropdownMenu onSelect={handleDropdownSelect} />
                {Data && (
                  <>
                    {/* <DropdownMenu onSelect={handleDropdownSelect} /> */}
                    <CardModal
                      data={Data}
                      isFlipped={isFlipped}
                      handleClick={() => handleClick(1)}
                      handleCardFlip={() => handleCardFlip(1)}
                      selectedOptionId={selectedOptionId}
                      handleChange={(e) => handleChange(e)}
                      loading={loading}
                    />
                  </>
                )}
              </>
            ) : (
              <Login />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
