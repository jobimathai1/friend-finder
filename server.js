const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "/app/public")));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("FriendFinder listening on PORT " + PORT);
});