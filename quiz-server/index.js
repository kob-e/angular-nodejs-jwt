const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8888;
const app = express();
const jwt = require('jsonwebtoken');
const JWT_KEY = 'asd!@#ASD!@zxcczxc@#$%F$';

// Middlwares
app.use(cors());
app.use(bodyParser());

app.use(function(req, res, next) {
    if (req.path === '/login') {
        next();
    }
    else if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } else {
        try {
            const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), JWT_KEY);
            next();
        }
        catch (ex) {
            const e = ex;
            return res.status(401).json({ error: 'Bad credentials' });
        }
        
    }
    
  });

app.post('/login', function (req, res) {
    const postData = req.body;
    console.log(postData);

    if (postData.username === 'me' && postData.password === 'abc123') {
        const token = jwt.sign({ username: 'me' }, JWT_KEY);
        res.json(token);
    } else {
        res.status(401).json('go away');
    }
});

// Endpoints
app.post('/quiz', function (req, res) {
    const postData = req.body;
    console.log(postData);

    res.json("thanks");
});

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});