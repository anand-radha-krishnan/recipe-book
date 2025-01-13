import express from "express";
import config from "./config";

import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();

server.set("view engine", "ejs");

server.use(express.static("dist"));

server.use("/api", apiRouter);

server.use(
  ["/recipe/:recipeId", "/"],
  async (request, response) => {
    const { initialMarkup, initialData } =
      await serverRender(request);
    response.render("index", {
      initialMarkup,
      initialData,
    });
  },
);

server.listen(config.PORT, config.HOST, () => {
  console.info(`express is listening to ${config.SERVER_URL}`);
});
