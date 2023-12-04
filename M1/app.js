import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('public/employees.js');
    });
app.listen(5500, () => { 
    console.log('Server started on port 5500...'); 
});

// PORT 5000 does not work for me.

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/employees.js")
  });