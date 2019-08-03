var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());


//login section
app.get("/api/login", (req, res, next) => {
    if (req.query.token === "ADMINTOKENNODEJS") {
        res.status(200);
        res.json({ token: "ADMINTOKENNODEJS" });
    }
    else {
        res.status(401);
        res.json({ message: "شما از سیستم خارج شده اید." });
    }
});
app.post("/api/login", (req, res, next) => {
    if (req.body.username === "admin" && req.body.password === "123456") {
        res.status(200);
        res.json({ 
            data: {token: "ADMINTOKENNODEJS"}
         });/*+Math.random()*/
    }
    else {
        res.status(406);
        res.json({ error: "نام کاربری یا کلمه عبور اشتباه است" });
    }
});
app.post("/api/logout", (req, res, next) => {

    console.log(req.body.token)
    if (true) {
        res.status(200);
        res.json({ message: "با موفقیت از سیستم خارج شدید!" });
    }
    else {
        res.status(401);
        res.json({ message: "مشکل در خروح از سیستم" });
    }

});


app.get("/api/admin/dashboard", (req, res, next) => {
    
    if (req.query.token == 'ADMINTOKENNODEJS')
    {
        res.json({
            "cpu": randBetween(60 , 80),
            "ram": randBetween(60 , 80),
            
            "swap":  randBetween(60 , 80),
            "activecalls": randBetween(60 , 80, 'int'),
            "callprocessed": parseInt(Math.random() * 100),

            "activeTime": parseInt(Math.random() * 100),
            "activeTrunks": parseInt(Math.random() * 100),
            "activeChannels": parseInt(Math.random() * 100),
            "callsCountInQueue": parseInt(Math.random() * 100),

            "hard": {
                "capacity": 100,
                "use": parseInt(Math.random() * 100),
                "available": parseInt(Math.random() * 100)
            },

            "chart": //[cpu, ram ,swap, activecals ]
                [
                [Math.random() * 100,Math.random() * 100,Math.random() * 100,Math.random() * 100]
                
                ]
        }
    );
    
    }
    else {
        res.status(403);
        res.json({
            data: {error: "شما اجازه دستررسی ندارید"}
        });
    }
});

//setting
app.post("/api/admin/setting/save", (req, res, next) => {
    res.status(200);
   console.log(req.body) ;
});
app.get("/api/admin/setting", (req, res, next) => {
    res.json({
        "operatori": {
                "title": "operatori",
                "ip": "127.0.0.1",
                "port": "",
                "username": "root",
                "password": ""
                },
        "server": {
                "title": "server",
                "ip": "192.168.137.98",
                "port": null,
                "username": "root",
                "password": "viraegs4122"
                },
        "ami": {
                "title": "ami",
                "ip": "192.168.137.98",
                "port": null,
                "username": "masoud",
                "password": "masoud"
                },
        "redis": {
                "title": "redis",
                "ip": "127.0.0.1",
                "port": "6379",
                "username": null,
                "password": null
                },
        "countco": 2,
        "counte1": 20,
        "queue_number": 9004,
        "prepend_outbound_from": 8000,
        "prepend_outbound_to": 9000,
        "did_inbound_from": 0,
        "did_inbound_to": 0,
        "prefix_outbound_transfer": 0
        }
        )
});

app.post("/api/admin/setting/license", (req, res, next )=> {
    console.log(req.body);
})
app.get("/api/admin/setting/license", (req, res, next )=> {
    res.json(
        {
            
        data :[
            { name : 'دسترسی به 1' , time: '27/12/1370', isActive: true, date : '27/12/1370'  },
            { name : 'دسترسی به 1' , time: '27/12/1370', isActive: true, date : '27/12/1370'  },
            { name : 'دسترسی به 1' , time: '27/12/1370', isActive: true, date : '27/12/1370'  },
            { name : 'دسترسی به 1' , time: '27/12/1370', isActive: true, date : '27/12/1370'  }
        ]
        });
})





//group managements

//get all users
app.get("/api/admin/users", (req, res, next) => {
    res.json({
        "users": [
        
                    {
                    "id": 10,
                    "active": 1,
                    "level": "admin",
                    "name": "زهرا ربیع",
                    "username": "admin",
                    "phonenumber": 9993,
                    "numQueue1": 9004,
                    "numPark": 9006,
                    "numHold": 9005,
                    "numRedial": 9007,
                    "conferance": 9090,
                    "updatedAt": null,
                    "roles": [
                                {
                                    "name": "admin",
                                    "title": "Admin",
                                    "pivot": {
                                            "entity_id": 6,
                                            "role_id": 2,
                                            "entity_type": "App\\User",
                                            "scope": null
                                            }
                                }
                            ]
                    },
                    {
                        "id": 2,
                        "active": 0,
                        "level": "admin",
                        "name": "کیم وو چونگ",
                        "username": "admin",
                        "phonenumber": 9993,
                        "numQueue1": 9004,
                        "numPark": 9006,
                        "numHold": 9005,
                        "numRedial": 9007,
                        "conferance": 9090,
                        "updatedAt": null,
                        "roles": [
                                    {
                                        "name": "admin",
                                        "title": "Admin",
                                        "pivot": {
                                                "entity_id": 6,
                                                "role_id": 2,
                                                "entity_type": "App\\User",
                                                "scope": null
                                                }
                                    }
                                ]
                        },

                        {
                            "id": 1,
                            "active": 1,
                            "level": "operator",
                            "name": "اکرم ربیع",
                            "username": "admin",
                            "phonenumber": 9993,
                            "numQueue1": 9004,
                            "numPark": 9006,
                            "numHold": 9005,
                            "numRedial": 9007,
                            "conferance": 9090,
                            "updatedAt": null,
                            "roles": [
                                        {
                                            "name": "admin",
                                            "title": "Admin",
                                            "pivot": {
                                                    "entity_id": 6,
                                                    "role_id": 2,
                                                    "entity_type": "App\\User",
                                                    "scope": null
                                                    }
                                        }
                                    ]
                            },


                        {
                            "id": 6,
                            "active": 1,
                            "level": "admin",
                            "name": "مونا درخشان",
                            "username": "admin",
                            "phonenumber": 9993,
                            "numQueue1": 9004,
                            "numPark": 9006,
                            "numHold": 9005,
                            "numRedial": 9007,
                            "conferance": 9090,
                            "updatedAt": null,
                            "roles": [
                                        {
                                            "name": "admin",
                                            "title": "Admin",
                                            "pivot": {
                                                    "entity_id": 6,
                                                    "role_id": 2,
                                                    "entity_type": "App\\User",
                                                    "scope": null
                                                    }
                                        }
                                    ]
                            },


                        {
                            "id": 4,
                            "active": 0,
                            "level": "operator",
                            "name": "علی بندری",
                            "username": "admin",
                            "phonenumber": 9993,
                            "numQueue1": 9004,
                            "numPark": 9006,
                            "numHold": 9005,
                            "numRedial": 9007,
                            "conferance": 9090,
                            "updatedAt": null,
                            "roles": [
                                        {
                                            "name": "admin",
                                            "title": "Admin",
                                            "pivot": {
                                                    "entity_id": 6,
                                                    "role_id": 2,
                                                    "entity_type": "App\\User",
                                                    "scope": null
                                                    }
                                        }
                                    ]
                            },
                            {
                                "id": 7,
                                "active": 1,
                                "level": "admin",
                                "name": "علی توکلی",
                                "username": "admin",
                                "phonenumber": 9993,
                                "numQueue1": 9004,
                                "numPark": 9006,
                                "numHold": 9005,
                                "numRedial": 9007,
                                "conferance": 9090,
                                "updatedAt": null,
                                "roles": [
                                            {
                                                "name": "admin",
                                                "title": "Admin",
                                                "pivot": {
                                                        "entity_id": 6,
                                                        "role_id": 2,
                                                        "entity_type": "App\\User",
                                                        "scope": null
                                                        }
                                            }
                                        ]
                                }
                    ],
                    //all roles
                    "roles": [
                    {
                        "id": 2,
                        "name": "admin",
                        "title": "Admin"
                    }
                    ]
        });
});
app.get("/api/admin/users/groups", (req, res, next) => {
    res.json({
            "1": {
                "name": "نیروی انسانی",
                "value": "1002,1001"
                },
            "2": {
                "name": "فرهنگیان",
                "value": "1011,1010"
                }
            });
});
app.post("/api/admin/users/groups", (req, res, next) => {
    console.log(req) ;
    //data : 
    // req.body.name 
 });




//user-management
app.post("/api/admin/users", (req, res, next)=> {
    console.log('Post on /api/admin/users');
    console.log(req.body);
});
app.get("/api/admin/users", (req, res, next)=> {
    console.log('Post on /api/admin/users');
    console.log(req.body);
})












 function randBetween(start , end , wantInt){

     return (wantInt)? 
                    Math.floor(Math.random() * (end - start + 1) + start)
                  : Math.random() * (end - start + 1) + start ;
 }