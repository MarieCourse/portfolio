import React, { useState, useEffect } from 'react';
import './Presentation.sass';
import { FaAngleDown } from 'react-icons/fa6';

function Presentation() {
  const [typedText, setTypedText] = useState('');
  const textToAnimate = 'María Carrera, \nDéveloppeuse Web Full-Stack';
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
      <div className="typing-animation">
        <h3>
          {typedText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== textToAnimate.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      </div>
      <a href="/#about" className="arrow-down">
        <FaAngleDown />
      </a>
    </div>
  );
}

export default Presentation;
