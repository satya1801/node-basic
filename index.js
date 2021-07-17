// const express = require("express");
const mysql = require('mysql');
const express=require('express');
const app = express();

// new code
const con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "Satya@1801"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connection done");
});

app.use("/test", (req, res) => {
    console.log("Recieved request");
    res.status(200).send("success");
});

app.use('/static', express.static('public'))
app.listen(3000, () => { console.log("I am listening") });