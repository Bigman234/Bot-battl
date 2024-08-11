import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy.jsx'

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const url = "http://localhost:4001/bots/";
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBots(data);
      } catch (error) {
        console.error("Error fetching bots:", error);
      }
    };

    fetchBots();
  }, []);

  function enlistBot(bot) {
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id));
  }

  function dischargeBot(bot) {
    setBots(bots.filter((b) => b.id !== bot.id));
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id));

    fetch(`url${bot.id}`, {
      method: "DELETE",
    });
  }

  return (
    <div>
      <YourBotArmy
        bots={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;
