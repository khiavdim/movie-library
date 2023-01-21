const express = require("express");
const app = express();
const mc = require("./controllers/moviesContoller.js");
const cc = require("./controllers/categoriesController.js");
const SERVER_PORT = 4200;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/movies", mc.getMovies);
app.post("/api/movies", mc.addMovie);
app.put("/api/movies/:id", mc.editMovie);
app.delete("/api/movies/:id", mc.deleteMovie);
app.get("/api/categories", cc.getCategories);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening from port ${SERVER_PORT}`);
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 4200;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
