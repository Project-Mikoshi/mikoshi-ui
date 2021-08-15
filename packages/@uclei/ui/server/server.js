const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const MemoryStore = require('memorystore')(session)

const databasePath = process.cwd() + '/server';

const publicPath = path.join(__dirname, '../build');

app.use(express.static(publicPath));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

app.use(session({
    name: 'Plumbus',
    secret: 'fleeb_juice',
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
      }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true, //true by default
        maxAge: 3600000, //milliseconds (1hr)
        sameSite: true //strict
    }
}));

/**********************************************
    Account authentication Get and Post Requests:
     - handles a users:
        - authentication to the server
        - logging in / out
        - creating session & cookie
        - destroying cookie on logout
**********************************************/
app.post('/authentication', (req, res) => {
    users = JSON.parse(fs.readFileSync(databasePath + "/database/users/users.json"));
    let data = "";
    req.on('data', (chunk) => {
        data = JSON.parse(chunk);
    });
    req.on('end', () => {
      console.log(data);
    let username = data.username;
    let password = data.password;

    res.end();
    });
});

app.post('/register', (req, res) => {


    let data = "";
    req.on('data', (chunk) => {
        data = JSON.parse(chunk);
    });

    req.on('end', () => {
        console.log(data);

    let username = data.username;
    let password = data.password;
    let name = data.name;
    res.end();
    });
});

app.get("/logout", function(req, res){
    console.log(`${req.session.user} Logged Out, Cookie destroyed`);
    req.session.destroy();

});

app.get("/session", function(req, res){
    let data = '';
    if (req.session.user){
        data = req.sessionID;  
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/JSON");
    res.write(JSON.stringify(data));
    res.end();
});

/**********************************************
 Server Information
********************************************* */

app.listen(process.env.PORT || 5000);

    console.log(`Please ensure the react-app is running and navigate to ${process.env.PORT || 5000}`);
