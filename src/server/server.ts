import express from "express";
import config from "./config";
import os from "os";

const server = express();

server.set("view engine", "ejs");

server.use(express.static("dist"));

server.use("/", (request, response) => {
  response.render("index", {
    initialContent: "<h1>loading...</h1>",
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `express is listening to ${config.SERVER_URL}`,
    "free memory:  ",
    os.freemem() / 1024 / 1024,
  );
});
