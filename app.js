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



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept , authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
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
app.get("/api/admin/menu", (req, res, next) =>{
    res.json({
        data:[
             "dashboard", 
             "setting",
             "users",
             "userRols",
             "queues",
             "groupExtensions",
             "operators",
             "reports",
             "bill"
        ]
    })
})

app.get("/api/admin/dashboard", (req, res, next) => {
    
    console.log(req.headers.authorization);
    if (req.headers.authorization == 'Bearer ADMINTOKENNODEJS')
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
app.post("/api/admin/setting/route/save", (req, res, next) => {
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
    res.json(
        {
           
        });
})
app.get("/api/admin/setting/license", (req, res, next )=> {
    res.json(
        {
        name: '',
        serial : '23456754231345675',
        startDate: '',
  
            
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


//groups-management 
app.get("/api/admin/groups", (req, res, next)=> {
    console.log('get on /api/admin/groups');
    console.log(req.body);

    res.json({
        groups:{
        "1": {
            "name": "نیروی انسانی",
            "value": "1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068",
            "id": 1

            },
        "2": {
            "name": "فرهنگیان",
            "value": "1011,1010",
            "id": 2
            },
        "5": {
            "name": "بازنشستگان",
            "value": "1002,1001",
            "id": 1

            },
        "4": {
            "name": "رسمی شده ها",
            "value": "1003,1004,1005,1006,1007,1008,1009, 101",
            "id": 2
            }
        },
        extensions:[
                1001,
                1002,
                1003,
                1004,
                1005,
                1006,
                1007,
                1008,
                1009,
                101,
                 1010,
                 1011,
                 1012,
                 1013,
                 1014,
                 1015,
                 1016,
                 1017,
                 1018,
                 1019,
                 1020,
                 1021,
                 1022,
                 1023,
                 1024,
                 1025,
                 1026,
                 1027,
                 1028,
                 1029,
                 1030,
                 1041,
                 1042,
                 1043,
                 1044,
                 1045,
                 1046,
                 1047,
                 1048,
                 1049,
                 1050,
                 1051,
                 1052,
                 1053,
                 1054,
                 1055,
                 1056,
                 1057,
                 1058,
                 1059,
                 1060,
                 1061,
                 1062,
                 1063,
                 1064,
                 1065,
                 1066,
                 1067,
                 1068,
                 1069,
                 1070,
                 1071,
                 1072,
                 1073,
                 1074,
                 1075,
                 1076,
                 1077,
                 1078,
                 1079,
                 1080,
                 1081,
                 1082,
                 1083,
                 1084,
                 1085,
                 1086,
                 1087,
                 1088,
                 1089,
                 1090,
                 1091,
                 1092,
                 1093,
                 1094,
                 1095,
                 1096,
                 1097,
                 1098,
                 1099,
                 1100,
                 1101,
                 1102,
                 1103,
                 1104,
                 1105,
                 1106,
                 1107,
                 1108,
                 1109,
                1110,
                1111,
                1112,
                1113,
                1114,
                1115,
                1116,
                1117,
                1118,
                1119,
                1120,
                1121,
                1122,
                1123,
                1124,
                1125,
                1126,
                1127,
                1128,
                1129,
                1130,
                1141,
                1142,
                1143,
                1144,
                1145,
                1146,
                1147,
                1148,
                1149,
                1150,
                1151,
                1152,
                1153,
                1154,
                1155,
                1156,
                1157,
                1158,
                1159,
                1160,
                1161,
                1162,
                1163,
                1164,
                1165,
                1166,
                1167,
                1168,
                1169,
                1170,
                1171,
                1172,
                1173,
                1174,
                1175,
                1176,
                1177,
                1178,
                1179,
                1180,
                1181,
                1182,
                1183,
                1184,
                1185,
                1186,
                1187,
                1188,
                1189,
                1190,
                1191,
                1192,
                1193,
                1194,
                1195,
                1196,
                1197,
                1198,
                1199,
                1200,
                204,
                8700,
                8768,
                8800,
                8888,
                9991,
                9992,
                9993,
        ]
        

        }
        );
});

app.get("/api/admin/groups", (req, res, next)=> {
    console.log('post:/api/admin/groups');
    console.log(req.body);
    res.json({message:'ثبت شد'});
    res.status = 200;
});

app.delete("/api/admin/groups/:id", (req, res, next)=> {
    console.log('delete:/api/admin/groups/:id');
    console.log(req.params.id);
    console.log(req.body);
    res.json({
        message:'اطلاعات با موفقیت ثبت شد'
    });
    res.status = 200;
});
app.put("/api/admin/groups/:id", (req, res, next)=> {
    console.log('put:/api/admin/groups/:id');
    console.log(req.params.id);
    console.log(req.body);
    res.json({
        message:'اطلاعات با موفقیت ثبت شد'
    });
    res.status = 200;

});





 function randBetween(start , end , wantInt){

     return (wantInt)? 
                    Math.floor(Math.random() * (end - start + 1) + start)
                  : Math.random() * (end - start + 1) + start ;
 }