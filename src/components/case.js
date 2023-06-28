import React from 'react';


const Case = ({ title, description, clues, suspects }) => {


  const handleClueClick = (clueId) => {
    // Handle click event for a clue
    console.log(`Clue clicked: ${clueId}`);
  };

  const handleSuspectSelect = (suspectId) => {
    // Handle select event for a suspect
    console.log(`Suspect selected: ${suspectId}`);
  };


  return (
    <div>
      {/* Render the case */}
      <h2 className="case-title">{title}</h2>
      <p className="case-description">{description}</p>

      {/* Render clues */}
      <h3 className="clues-heading">Clues:</h3>
      <ul className="clues-list">
        {clues.map((clue) => (
          <li
            key={clue.id}
            className="clue-item"
            onClick={() => handleClueClick(clue.id)}
          >
            {clue.title}
          </li>
        ))}
      </ul>

      {/* Render suspects */}
      <h3 className="suspects-heading">Suspects:</h3>
      <ul className="suspects-list">
        {suspects.map((suspect) => (
          <li
            key={suspect.id}
            className="suspect-item"
            onMouseOver={() => handleSuspectSelect(suspect.id)}
          >
            {suspect.name}
          </li>
        ))}
      </ul>

      {/* Add more JSX code to render other case details */}
    </div>
  );
};

export default Case;

