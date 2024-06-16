import { createContext,useState } from "react";
import run from "./clone";

export const Content = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPromts] = useState([
    {
      text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with varous tasks. Just let me know how I can help you!",
      isBot: true,
    },
  ]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPromts((prev) => [...prev, input]);
    const text = input;
    setInput("");
    setPrevPromts([...prevPrompts, { text, isBot: false }]);
    const response = await run(input);
    let responseArray = response.split("");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += `<b>${responseArray[i]}</b>`;
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    setPrevPromts([
      ...prevPrompts,
      { text: input, isBot: false },
      { text: newResponse2, isBot: true },
    ]);

    setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const newChat = () => {
    setInput("");
    setPrevPromts([
      {
        text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with various tasks. Just let me know how I can help you!",
        isBot: true,
      },
    ]);
    setShowResult(false);
    setLoading(false);
    setResultData("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPromts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    // Add any values or functions you want to provide to the context here
  };

  return (
    <Content.Provider value={contextValue}>{props.children}</Content.Provider>
  );
};

export default ContextProvider;
