const express = require("express");
const cors = require("cors");
const app = express();
const {swaggerJSDocs} = require("./swagger");


app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3000);


app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
  swaggerJSDocs(app,`${app.get("port")}`);
});

console.log("...............................");
app.get("/", (req, res) => {
    res.redirect("/api-docs");
});
app.use(require("./routes/establecimiento"));
app.use(require("./routes/poligono"));
app.use(require("./routes/coordenada"));
app.use(require("./routes/puntoReferencia"));