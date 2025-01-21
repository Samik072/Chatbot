import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <p>Chatbot</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : showResult ? (
          <div className="result">
            <div className='result-title'>
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        ) : (
          <div className="greet">
            <p><span>Hello, Developer.</span></p>
            <p>How can I help you today?</p>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              placeholder='Enter a prompt here' 
            />
            <div>
              {input && <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="Send Icon" />}
            </div>
          </div>
          <p className="bottom-info">
            Chatbot may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
