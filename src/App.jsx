import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeBotFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      removeBotFromArmy(bot);
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  }

  function selectBot(bot) {
    setSelectedBot(bot);
  }

  function clearSelectedBot() {
    setSelectedBot(null);
  }

  function sortBots(criteria) {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  }

  function filterBotsByClass(botClass) {
    return bots.filter((bot) => bot.bot_class === botClass);
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          clearSelectedBot={clearSelectedBot}
          enlistBot={enlistBot}
        />
      ) : (
        <>
          <SortBar sortBots={sortBots} />
          <BotCollection
            bots={bots}
            enlistBot={enlistBot}
            selectBot={selectBot}
            filterBotsByClass={filterBotsByClass}
          />
        </>
      )}
      <YourBotArmy
        army={army}
        removeBot={removeBotFromArmy}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
