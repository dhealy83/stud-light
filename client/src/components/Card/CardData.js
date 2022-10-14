import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";
import React, { useState } from "react";
// import Animista, { AnimistaTypes } from "react-animista";
import "./Card.css";

const CardData = () => {
  const [toggle, setToggle] = useState(false);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setToggle(false);
  // };

  return (
    <>
      {/* {toggle ? <a href="#" className="toggle" src={Question} alt="question mark" onClick={() => setToggle(!toggle)} /> 
      : <img className="inactive" src={Answer} alt="exclamation mark" onClick={() => setToggle()} />} */}

      {toggle ? (
        <a href="#" onClick={() => setToggle(!toggle)}>
          <CardIcon icon={<Question size="50" />} />
        </a>
      ) : (
        <a href="#" onClick={() => setToggle(!toggle)}>
          <CardIcon icon={<Answer size="50" />} />
        </a>
      )}

      {/* <a href="#" onClick={() => setToggle(!toggle)}>
       <CardIcon icon={<Question size="50" />} />
      </a> */}
      {toggle && (
        <div className="flip-horizontal-bottom">
          <div class="card">
            <div class="card-body">
              <p class="card-text">That is an arrow function</p>
            </div>
          </div>
          <p className="text-success">"Flipped"</p>
        </div>
      )}
      {!toggle && (
        <div className="flip-horizontal-bottom">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                What is this function <code>()=>{} </code> ?
              </p>
            </div>
          </div>
          <p className="text-info">"Not Flipped"</p>
        </div>
      )}
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default CardData;
