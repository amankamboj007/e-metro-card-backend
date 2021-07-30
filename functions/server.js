const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const db = require("./models/index");
const PORT = process.env.PORT || 3000;
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

const routes = require("./router/user-route");
const fareRoutes = require("./router/fareRoute")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api",(req,res) =>{
    res.send("Hello from metro local dev backend")
})
app.use('/api/user',routes)
app.use('/api/fare',fareRoutes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`);
    });
});