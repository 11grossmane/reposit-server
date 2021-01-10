const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    const auth = req.headers.authorization;
    try {
        const decoded = jwt.verify(auth.split(" ")[1], "floppydisk");
        if (decoded.app !== "reposit") res.sendStatus(401);
        else next();
    } catch (e) {
        res.sendStatus(401);
    }
});

app.get("/creds", async (req, res) => {
    res.send({ id: process.env.ID, sec: process.env.SEC });
});

app.listen(process.env.PORT, () => {
    console.log("listening on" + process.env.PORT);
});
