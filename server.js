var express = require('express');
var app = express();
// made a change!

var PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});
