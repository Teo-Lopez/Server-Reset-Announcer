import "dotenv/config";
const next = require("next");
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
} from "../utils.js";
import { getShuffledOptions, getResult } from "../game.js";
import cron from "node-cron";
import notify from "../notify.js";

const app = next({ dev });

const server = http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });
    res.write("Hey");
    res.end();
  })
  .listen(4000);

app.prepare().then(() => {
  server.on("error", (err) => console.error(err));
  server.listen(port);

  console.log(`Listening on HTTPS port ${port}`);
  client.login(process.env.TOKEN);

  client.on("ready", () => {
    cron.schedule("0 55 7,9,11,13,15,17,19,21,23 * * *", () =>
      notify("El servidor se reiniciara en 5 minutos!")
    );
  });
});

app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));
