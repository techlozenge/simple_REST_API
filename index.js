(function() {

  let express = require("express");

  // Express allows route definition and a web server that listens for routing requests
  let app = express();

  app.get('/', function(req, res) {
    res.send("<div>Hello World</div>");
  });

  app.get('/api/pets', function(req, res) {
    res.send({
              "data": {
              "pets":
              [
                {
                  "id": 1,
                  "name": "Fluffy",
                  "age": 5,
                  "uri": "/api/pets/1"
                }, {
                  "id": 2,
                  "name": "Bob",
                  "age": 6,
                  "uri": "/api/pets/1"
                    }
                ]
                    }
                }
              );
  });

  app.get('/api/pets/1', function(req, res) {
    res.send({
              "id": 1,
              "name": "Fluffy",
              "age": 5,
              "type": "dog"
              }
            );
  });

  app.get('/api/pets/2', function(req, res) {
    res.send({
              "id": 2,
              "name": "Bob",
              "age": 6,
              "type": "cat"
              }
            );
  });

  app.post('/robot', function(req, res) {
    res.send("Received a Post Request to create a robot");
  });

  app.put('/robot:robotId', function(req, res) {
    res.send('Got a PUT request to modify a robot ')
  });

  app.delete('/robot:robotId/part:partId', function(req, res) {
    res.send("Got a DELETE request to delete the part (" + req.params.partId + ") on robot " + req.params.robotId);
  });

  app.listen(4786, function() {
    console.log('App listening on port 4786');
  });

})();
