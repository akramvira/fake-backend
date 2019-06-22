var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get("/api/login", (req, res, next) => {
    res.json({token : "ADMINTOKENNODEJS"});
});
app.post("/api/login", (req, res, next) => {

    if (req.body.username === "admin" && req.body.password === "123456")
    {
        res.status(200);
        res.json({token : "TOKEN:"+Math.random()});
    }
    else{
        res.status(406);
        res.json({error : "نام کاربری یا کلمه عبور اشتباه است"});
    }
});


app.post("/api/dashboard", (req, res, next) => {

    res.json({
            cpu: parseInt(Math.random()* 100),
            ram: parseInt(Math.random()* 100),
            activecall: parseInt(Math.random()* 100),
            swap: parseInt(Math.random()* 100),

            activeTrunks: parseInt(Math.random()* 100),
            activeCalls: parseInt(Math.random()* 100),
            activeChannels: parseInt(Math.random()* 100),
            callsCountInQueue: parseInt(Math.random()* 100),

            hard: {
                capacity: 100,
                use: parseInt(Math.random()* 100),
                avilable: parseInt(Math.random()* 100)
            }
        }
    );
});
