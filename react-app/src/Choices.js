import React from 'react';

function Choices(props) {
  return (
    <div>
      {props.choices.map((choice, i) => (
        <button
          key={i}
          onClick={() => props.setSelectedChoice(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Choices;
