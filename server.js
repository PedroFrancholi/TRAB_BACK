const express = require("express");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

const server = express();
server.use(express.json());

server.use(recipeRoutes.router);
server.use(userRoutes.router);


module.exports = {
    server
};