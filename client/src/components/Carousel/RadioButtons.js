import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function RadioButtons(props) {
  //   const [radioValue, setRadioValue] = useState("0");

  //   const radios = [
  //     { name: "X", value: "1" },
  //     { name: "√", value: "2" },
  //   ];

  //   const [value, setValue] = useState([1, 2]);

  //   const handleChange = (val) => setValue(val);

  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
      className="mb-2"
      id="toggle-check"
      type="checkbox"
      variant="outline-primary"
      checked={checked}
      value="1"
      onChange={(e) => setChecked(e.currentTarget.checked)}
    >
      Checked
    </ToggleButton>
    // <ToggleButtonGroup>
    //   {radios.map((radio, idx) => (
    //     <ToggleButton
    //       key={`${props.index}-${idx}`}
    //       id={`radio-${props.index}-${idx}`}
    //       type="radio"
    //       value={radio.value}
    //       name="radio"
    //       variant={idx % 2 ? "outline-success" : "outline-danger"}
    //       checked={radioValue === radio.value}
    //       onChange={(e) => {
    //         console.log(e.currentTarget);
    //         setRadioValue(e.currentTarget.value);
    //       }}
    //       size="lg"
    //     >
    //       {radio.name}
    //     </ToggleButton>
    //   ))}
    // </ToggleButtonGroup>
  );
}
