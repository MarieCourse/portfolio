import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './Presentation.sass';

function Presentation() {
  const [typedText, setTypedText] = useState('');
  const textToAnimate = 'Je suis María Carrera, \nDeveloppeuse Web';
  const delay = 80;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToAnimate.length) {
        setTypedText(textToAnimate.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="presentation">
      <Header />
      <div className="presentation__titres">
        <h2>BONJOUR !</h2>
        <div className="typing-animation">
          <h3 className="text">
            {typedText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index !== textToAnimate.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
