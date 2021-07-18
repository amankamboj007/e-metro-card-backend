const express = require("express");
const app = express();
const db = require("./models");
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000;
const routes = require('./contollers/routes.controller')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Hello from metro local dev backend")
})

app.use('/api',routes)


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`);
    });
});