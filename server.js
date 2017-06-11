var express = require('express');
var app = express();
// made a change!
// made another change
// yet another change

var PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});
