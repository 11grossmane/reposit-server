const express = require("express");
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/creds", async (req, res) => {
    // if (res.getHeader('')){
    //   res.status(401)
    //   return
    // }
    console.log(process.env);
    res.send({ id: process.env.ID, sec: process.env.SEC });
});

app.listen(process.env.PORT, () => {
    console.log("listening on" + process.env.PORT);
});
