import React from "react";
import BotCard from "./BotCard";


function BotCollection({ bots, enlistBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(
          (bot) => (
            console.log(bot),
            (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={() => enlistBot(bot)}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default BotCollection;
