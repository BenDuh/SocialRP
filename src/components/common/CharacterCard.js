import React from 'react';

const CharacterCard = ({ character, hoverId }) => {
  return (

    character.id !== hoverId ? (
      null
    ) : (
      <div id={`character-card-${character.id}`} className="character-card">

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{character.name}</h4>
            <h5>{character.race} {character.class} niveau {character.level}</h5>
            <ul className="list-unstyled">
              <li>Santé : {character.stats.life}</li>
              <li>Force : {character.stats.strength}</li>
              <li>Dextérité : {character.stats.dexterity}</li>
              <li>Intelligence : {character.stats.intelligence}</li>
              <li>Experience : {character.exp}</li>
            </ul>
          </div>
        </div>

      </div>
    )
  );
}

export default CharacterCard;