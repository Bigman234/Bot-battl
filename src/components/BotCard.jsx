import React from "react";

function BotCard({ bot, handleClick, handleEnlist, handleDischarge }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {handleEnlist && <button onClick={handleEnlist}>Enlist</button>}
      {handleDischarge && <button onClick={handleDischarge}>Discharge</button>}
    </div>
  );
}

export default BotCard;
