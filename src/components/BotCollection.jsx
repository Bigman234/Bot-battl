import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, selectBot, filterBotsByClass }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => selectBot(bot)}
          handleEnlist={() => enlistBot(bot)}
        />
      ))}
    </div>
  );
}

export default BotCollection;
