import { useState } from "react";

function useInputField() {
  const [input, setInput] = useState("");

  //   const handleChangeInput = (e) => {
  //     setInput((prevInput) => ({
  //       ...prevInput,
  //       [e.target.id]: e.target.value,
  //     }));
  //   };

  const handleChangeInput = (e) => {
    if (e.target.id) {
      setInput((prevInput) => ({
        ...prevInput,
        [e.target.id]: e.target.value,
      }));
    } else {
      setInput(e.target.value);
    }
  };

  return [input, handleChangeInput, setInput];
}

export default useInputField;
