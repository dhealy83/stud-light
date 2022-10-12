import { BiAnalyse } from "react-icons/bi";
import React, { useState } from "react";

const CardData = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? "Answers" : "Questions"}
      <button onClick={() => setToggle(!toggle)}>
        <CardIcon icon={<BiAnalyse size="50" />} />
      </button>
      {toggle && <p>"Flipped"</p>}
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default CardData;
