import { useState } from "react";
import classes from "./select.Module.css";

const Select = (props) => {
  const [voiceIndex, setVoiceIndex] = useState(0);
  const voice = props.voices[voiceIndex] || null;

  props.voiceHandler(voice);

  return (
    <select className={classes.select}
      id="voice"
      name="voice"
      value={voiceIndex || ""}
      onChange={(event) => {
        setVoiceIndex(event.target.value);
        console.log(event.target.value);
      }}
    >
      <option value="">Default</option>
      {props.voices.map((option, index) => (
        <option className={classes.options} key={option.voiceURI} value={index}>
          {`${option.lang} - ${option.name}`}
        </option>
      ))}
    </select>
  );
};

export default Select;
