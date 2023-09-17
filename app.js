import "dotenv/config";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import {
  VerifyDiscordRequest,
  getRandomEmoji,
  DiscordRequest,
} from "./utils.js";
import { getShuffledOptions, getResult } from "./game.js";
import cron from "node-cron";
import notify from "./notify.js";

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });
    res.write("Hey");
    res.end();
  })
  .listen(4000);

client.login(process.env.TOKEN);

client.on("ready", () => {
  cron.schedule("0 55 7,9,11,13,15,17,19,21,23 * * *", () =>
    notify("El servidor se reiniciara en 5 minutos!")
  );
});
// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
