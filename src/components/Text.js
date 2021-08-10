import { useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Select from "./select";
import classes from "./Text.Module.css";

const Text = () => {
  const { speak, voices } = useSpeechSynthesis();
  const inputRef = useRef();
  let voice2;
  const voiceHandler = (voice) => {
    voice2 = voice;
  };

  return (
      <div className={classes["main-head"]}>
        <div className={classes.head}>
          <span>Text Synthesis</span>
          <Select voices={voices} voiceHandler={voiceHandler} />
        </div>
        <textarea rows="12" placeholder="Enter your text here" ref={inputRef} />
        <button
          onClick={() => speak({ text: inputRef.current.value, voice: voice2 })}
        >
          Speak
        </button>
      </div>
  );
};
export default Text;
