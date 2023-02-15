//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("../swagger.json");

const swaggerJSDocs = (app) =>{
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));
    app.get('/api-docs.json',(res)=>{
        res.setHeader("Content-Type","application/json");
        res.send(swaggerJsDoc)
    });
} 


module.exports = {swaggerJSDocs};