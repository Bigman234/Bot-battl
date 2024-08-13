import React from "react";

function BotSpecs({ bot, clearSelectedBot, enlistBot }) {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={clearSelectedBot}>Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
