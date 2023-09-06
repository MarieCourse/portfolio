import React, { useState, useEffect } from 'react';
import './Presentation.sass';
import { FaAngleDown } from 'react-icons/fa6';

function Presentation() {
  const [typedText, setTypedText] = useState('');
  const textToAnimate = 'Je suis María Carrera, \nDéveloppeuse Web';
  const delay = 80;
  // const draw = (ctx, frameCount) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

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
      <div className="arrow-down">
        <a href="/portfolio/#works">
          <FaAngleDown />
        </a>
      </div>
    </div>
  );
}

export default Presentation;
