const express = require("express");
const app = express();


app.get("/", (request, response) => {
    /* Send plain text */
    response.send("Hello World!");
});

app.get("/date", (request, response) => {
    /* Send Date */
    const date = new Date();
    response.send(`Today's date is ${date}`);
});

app.get("/page", (request, response) => {
    /* Send html file as an HTTP response */
    response.sendFile("./page.html", {root:__dirname});
});

app.listen(3000);
