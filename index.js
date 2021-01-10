const express = require("express");
const jwt = require("jwt-express");
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use((req, res, next) => {
//     const auth = req.headers.authorization;
//     const decoded = jwtDecode(auth.split(' ')[1])
//     if ()
//     next();
// });

app.get("/creds", jwt({ secret: "floppydisk" }), async (req, res) => {
    console.log(process.env);
    if (!req.user.admin) res.sendStatus(401);
    else res.send({ id: process.env.ID, sec: process.env.SEC });
});

app.listen(process.env.PORT, () => {
    console.log("listening on" + process.env.PORT);
});
