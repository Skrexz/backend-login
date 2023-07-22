const express = require('express');
const app = express();
const cors = require("cors");
const { users } = require('./src/users/users.module');


app

    .use(cors())
    .use(express.json())
    .use("/users", users)

    app.listen(3000)