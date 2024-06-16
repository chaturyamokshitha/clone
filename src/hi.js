import React from 'react';
import gptLogo from './assets/chatgpt.svg';
import home from "./assets/home.svg";
import add from "./assets/add-30.png";
import pro from "./assets/rocket.svg"
import saved from "./assets/bookmark.svg";
import msg from "./assets/message.svg";

const  Sidebar= () => {
    return (
      <div className="flex flex-col justify-between min-h-screen text-white bg-black w-72 ">
        <div>
          <div className="m-4">
            <div className="flex">
              {" "}
              <img src={gptLogo} alt="loading" className="h-10 "></img>
              <h1 className="ml-4 text-2xl">ChatGpt</h1>
            </div>

            <button className="flex items-center justify-center mt-10 text-lg bg-blue-400 rounded-sm h-14 w-60">
              {" "}
              <img src={add} alt="home" className="h-6 p-1"></img>New Chat
            </button>
            <div className="mt-10">
              <p className="flex p-4 mt-8 border border-gray-200 rounded-sm">
                <img src={msg} alt="message" className="mr-2"></img>What is
                programming?
              </p>
              <p className="flex p-4 mt-8 border border-gray-200 rounded-sm">
                <img src={msg} alt="message"></img>What is programming?
              </p>
            </div>
          </div>

          <hr></hr>
          <div className="mb-6 ">
            <div className="flex m-4">
              <img src={home} alt="home" className="mr-4"></img>
              <h2>Home</h2>
            </div>
            <div className="flex m-4">
              <img src={saved} alt="saved" className="mr-4"></img>
              <h2>Saved</h2>
            </div>
            <div className="flex m-4">
              <img src={pro} alt="pro" className="mr-4"></img>
              <h2>Upgrade to Pro</h2>
            </div>
          </div>
        </div>
       
      </div>
    );
}
 
export default Sidebar ;