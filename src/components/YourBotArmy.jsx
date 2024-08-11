import React from "react";
import { ssrExportAllKey } from "vite/runtime";

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="ui segment inverted teal bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => releaseBot(bot)}
              handleDischarge={() => dischargeBot(bot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
