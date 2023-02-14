const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node express MMA API",
      version: "1.0",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [`${path.join(__dirname, "./controllers/*.js")}`],
};



app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

console.log("...");

app.use(require("./routes/home"));
app.use(require("./routes/establecimiento"));
app.use(require("./routes/poligono"));
app.use(require("./routes/coordenada"));
app.use(require("./routes/puntoReferencia"));
