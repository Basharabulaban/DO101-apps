const express = require('express');
app = express();

var response;

// n file
app.get('/', function (req, res) {
    response = 'bashar2.' + '\n';

    //send the response to the client
    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
