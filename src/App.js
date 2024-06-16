import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import plusSgn from "./assets/add-30.png";
import msg from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import gptSgn from "./assets/chatgptLogo.svg";
import user from "./assets/user-icon.png";
import send from "./assets/send.svg";
import { useContext, useRef, useEffect } from "react";
import ContextProvider, { Content } from "./context";

function App() {
  const msgEnd = useRef(null);

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    prevPrompts,
    setRecentPrompt,
    newChat,
  } = useContext(Content);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [prevPrompts]);

  const handleEnter = async (e) => {
    if (e.key === "Enter") await onSent();
  };

  const userQuestions = prevPrompts.filter((prompt) => !prompt.isBot);

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button onClick={newChat} className="midBtn">
            <img src={plusSgn} alt="New Chat" className="plus" />
            New Chat
          </button>
          <div className="upperSideBottom">
            {userQuestions.map((prompt, index) => (
              <button className="query">
                <div key={index} className="recent-entry">
                  <img src={msg} alt="query" />
                  <p>{prompt.text.slice(0, 18)} ...</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="lists" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="lists" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="lists" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {prevPrompts.map((prevPrompts, i) => (
            <div key={i} className={prevPrompts.isBot ? "chat bot" : "chat"}>
              <img
                className="chatImg"
                src={prevPrompts.isBot ? gptSgn : user}
                alt="ChatGPT"
              />
              {prevPrompts.isBot ? (
                <p
                  className="txt"
                  dangerouslySetInnerHTML={{ __html: prevPrompts.text }}
                ></p>
              ) : (
                <p className="txt">{prevPrompts.text}</p>
              )}
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              onKeyDown={handleEnter}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Send a message"
            />
            <button onClick={() => onSent()} className="send">
              <img
                onClick={() => onSent()}
                src={send}
                alt="Send"
                className="sendBtn"
              />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT August 20 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
