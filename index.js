const express = require("express");
const functions = require("firebase-functions");
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/creds", async (req, res) => {
    const { id, sec } = functions.config();
    res.send({ id, sec });
});

app.listen(8000, () => {
    console.log("listening on 8000");
});
