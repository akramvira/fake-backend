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
{


app.get("/api/login", (req, res, next) => {
    console.log('get/api/login');
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
    console.log('post/api/login');
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
    console.log('get/api/admin/menu');

    if(req.query.token != "ADMINTOKENNODEJS"){
        res.status(401);
        console.log('error auth');
    }
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
    });

  
        
})
}

app.get("/api/admin/dashboard", (req, res, next) => {
    console.log('get/api/admin/dashboard');
    console.log(req.headers.authorization);
    if (req.headers.authorization == 'Bearer ADMINTOKENNODEJS')
    {
        res.json({

                activecalls: 0,
                activeextensions: 0,
                activetime: [0, 12, 3, 2, 19],
                callprocessed: 4,
                channels: 0,
                cpu: 91,
                hard: {capacity: 477, use: 28, avilable: 323},
                queue: 0,
                ram: 33,
                swap: 0.2,


            "cpu": randBetween(79 , 80),
            "ram": randBetween(70 , 71),
            
            "swap":  randBetween(60 , 63),
            "activecalls": randBetween(60 , 80, 'int'),
            "callprocessed": parseInt(Math.random() * 100),

            "activetime": parseInt(Math.random() * 100),
            "activeTrunks": parseInt(Math.random() * 100),
            "channels": parseInt(Math.random() * 100),
            "queue": parseInt(Math.random() * 100),

            "hard": {
                "capacity": 100,
                "use": parseInt(Math.random() * 100),
                "available": parseInt(Math.random() * 100)
            }
        }
    );
    
    }
    else {
        res.status(401);
        res.json({
            data: {error: "شما اجازه دستررسی ندارید"}
        });
    }
});

//setting
{


app.post("/api/admin/setting/save", (req, res, next) => {
    console.log('/api/admin/setting/save');
    res.status(200);
   console.log(req.body) ;
});
app.post("/api/admin/setting/route/save", (req, res, next) => {
    console.log('/api/admin/setting/route/save');
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
            license :[
                { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:2},
                { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:1},
                { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:5},
                { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:3}
            ]
        });
})
app.get("/api/admin/setting/license", (req, res, next )=> {
    res.json(
        {
        name: '',
        serial : '23456754231345675',
        startDate: '',
  
            
        license :[
            { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:2},
            { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:1},
            { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:5},
            { title : 'دسترسی به 1' , active_time: '27/12/1370', isActive: true, date : '27/12/1370', count:3}
        ]
        });
})

}

app.get("/api/v2/admin/reports/chart/global/number/calls", (req, res, next )=> {
    res.json(
        {"data":{"in":{"time":861472620,"avg":5777,"all":288424,"answer":149881,"noanswer":4272,"busy":134271,"performance":52,"panswer":51.97,"pnoanswer":1.48,"pbusy":46.55},"out":{"time":595226940,"avg":3676,"all":284213,"mobile":203239,"co":342053,"betweenco":183770,"pmobile":27.88,"pco":46.92,"pbetweenco":25.21}},"message":"success"}
);
})

}



//group managements

//get all users
{
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
}



//user-management
{
app.post("/api/admin/users", (req, res, next)=> {
    console.log('Post on /api/admin/users');
    console.log(req.body);
});
app.get("/api/admin/users", (req, res, next)=> {
    console.log('Post on /api/admin/users');
    console.log(req.body);
})
}

//groups-management 
{


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
}


//roles
{


app.get('/api/admin/users/roles', (req, res) =>{
    console.log('api/admin/users/roles');

    res.json({
        "roles": {
            "2": {
                "name": "admin",
                "title": "Admin",
                "ability": {
                        "1": "Admin permissions",
                        "5": "Admin queues"
                        }
            }
        },
        "abilities": [
                    {
                    "id": 1,
                    "title": "Admin permissions"
                    },
                    {
                    "id": 2,
                    "title": "Admin extensions"
                    },
                    {
                    "id": 3,
                    "title": "Admin groups"
                    },
                    {
                    "id": 5,
                    "title": "Admin queues"
                    },
                    {
                    "id": 6,
                    "title": "Admin operators"
                    }
                ]
        });

})

app.post('/api/admin/users/roles/:id',(req, res)=>{
    console.log('/api/admin/users/roles/{role id}');
    console.log(req.params);
    
});

app.post('/api/admin/users/roles/allow/:roleId',(req, res)=>{
    console.log('/api/admin/users/roles/allow/{role id}');
    console.log(req.body);
    
});
app.post('/api/admin/users/roles/allow/:roleId',(req, res)=>{
    console.log('/api/admin/users/roles/allow/{role id}');
    console.log(req.body);
    
});

app.put('/api/admin/users/roles/:roleId',(req, res)=>{
    console.log('/api/admin/users/roles/{role id}');
    console.log(req.body);
});


}





//reports

app.get('/api/admin/reports/cdr',(req, res)=>{
    console.log('/api/admin/users/roles/{role id}');
    console.log(req.body);
    res.json({
        "current_page": 1,
        "data": [
            {
                "calldate": "2019-09-01 19:47:33",
                "src": "",
                "dst": "s",
                "duration": 263,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:47:33",
                "src": "",
                "dst": "s",
                "duration": 263,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:41:06",
                "src": "",
                "dst": "s",
                "duration": 376,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:41:06",
                "src": "",
                "dst": "s",
                "duration": 376,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:48:03",
                "src": "55458511",
                "dst": "s",
                "duration": 21,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:48:03",
                "src": "55458511",
                "dst": "s",
                "duration": 21,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:16",
                "src": "1002",
                "dst": "09162040460",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:16",
                "src": "1002",
                "dst": "09162040460",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1200",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1200",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1001",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1001",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1002",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1002",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:40:52",
                "src": "09162040460",
                "dst": "8088",
                "duration": 9,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:40:52",
                "src": "09162040460",
                "dst": "8088",
                "duration": 9,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:39:49",
                "src": "09162040460",
                "dst": "s",
                "duration": 15,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:39:49",
                "src": "09162040460",
                "dst": "s",
                "duration": 15,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:34:54",
                "src": "newrock",
                "dst": "s",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:34:54",
                "src": "newrock",
                "dst": "s",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:32:39",
                "src": "1002",
                "dst": "09162040460",
                "duration": 109,
                "disposition": "ANSWERED"
            }
        ],
        "first_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=1",
        "from": 1,
        "last_page": 793,
        "last_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=793",
        "next_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=2",
        "path": "http://192.168.137.98:8076/api/v1/admin/reports/cdr",
        "per_page": 25,
        "prev_page_url": null,
        "to": 25,
        "total": 19820
    });
});

app.post('/api/admin/reports/cdr', (req, res)=>{
    res.json({
        "current_page": 1,
        "data": [
            {
                "calldate": "2019-09-01 19:47:33",
                "src": "meee",
                "dst": "s",
                "duration": 263,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:47:33",
                "src": "",
                "dst": "s",
                "duration": 263,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:41:06",
                "src": "",
                "dst": "s",
                "duration": 376,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 19:41:06",
                "src": "",
                "dst": "s",
                "duration": 376,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:48:03",
                "src": "55458511",
                "dst": "s",
                "duration": 21,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:48:03",
                "src": "55458511",
                "dst": "s",
                "duration": 21,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:16",
                "src": "1002",
                "dst": "09162040460",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:16",
                "src": "1002",
                "dst": "09162040460",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1200",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1200",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1001",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1001",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1002",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "1002",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 0,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:41:02",
                "src": "09162040460",
                "dst": "8088",
                "duration": 10,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:40:52",
                "src": "09162040460",
                "dst": "8088",
                "duration": 9,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:40:52",
                "src": "09162040460",
                "dst": "8088",
                "duration": 9,
                "disposition": "CONGESTION"
            },
            {
                "calldate": "2019-09-01 18:39:49",
                "src": "09162040460",
                "dst": "s",
                "duration": 15,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:39:49",
                "src": "09162040460",
                "dst": "s",
                "duration": 15,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:34:54",
                "src": "newrock",
                "dst": "s",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:34:54",
                "src": "newrock",
                "dst": "s",
                "duration": 39,
                "disposition": "ANSWERED"
            },
            {
                "calldate": "2019-09-01 18:32:39",
                "src": "1002",
                "dst": "09162040460",
                "duration": 109,
                "disposition": "ANSWERED"
            }
        ],
        "first_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=1",
        "from": 1,
        "last_page": 793,
        "last_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=793",
        "next_page_url": "http://192.168.137.98:8076/api/v1/admin/reports/cdr?page=2",
        "path": "http://192.168.137.98:8076/api/v1/admin/reports/cdr",
        "per_page": 25,
        "prev_page_url": null,
        "to": 25,
        "total": 19820
    });

    res.status = 200;
})


app.get('/api/admin/reports/system/performance',(req, res)=>{
    console.log('/admin/reports/system/performance');
    console.log(req.body);

    res.json({
        time:1234,
        avg : 1880.6,
        all : 17670,
        answer : 10302,
        noanswer : 7288,
        performance : 56.7,

    });

    res.status = 200;
});





app.get('/api/admin/reports', (req, res)=>{

    res.json({
        "extensions": [
            "1002",
            "1001",
            "1021",
            "1008"
        ],
        "groups": [
            {
                "id": 1,
                "name": "نیروی انسانی"
            },
            {
                "id": 2,
                "name": "فرهنگیان"
            }
        ]
    });
    res.status=200;
})

//reports group
{
    app.get('/api/admin/reports/group/daily', (req, res)=>{
        let data = [];
        for(i = 1; i <= 24; i++ ){
        data.push({
            all : randBetween(1000,1500),
            answer : randBetween(500,600),
            noanswer : randBetween(400,500),
            performance : randBetween(30,100)
        })
        }
        res.json(data);
    
   
    res.status=200;
    })

    app.get('/api/admin/reports/group/monthly', (req, res)=>{
        
        let data = [];
        for(i = 1; i <= 30; i++ ){
        data.push({
            all : randBetween(1000,1500),
            answer : randBetween(500,600),
            noanswer : randBetween(400,500),
            performance : randBetween(30,100)
        })
        }
        res.json(data);

    res.status=200;
    })

    app.get('/api/admin/reports/group/yearly', (req, res)=>{

        let data = [];
        for(i = 1; i <= 12; i++ ){
        data.push({
            all : randBetween(1000,1500),
            answer : randBetween(500,600),
            noanswer : randBetween(400,500),
            performance : randBetween(30,100)
        })
        }
        res.json(data);
    
    res.status=200;
    })

    app.get('/api/admin/reports/group/compare/chart/calls', (req, res)=>{
        
        res.json({
            "1": {
                "name": "نیروی انسانی",
                "all": 3720,
                "answer": 1584,
                "noanswer": 2136
            },
            "2": {
                "name": "فرهنگیان444",
                "all": 102,
                "answer": 70,
                "noanswer": 32
            },
            "3": {
                "name": "گروه جدید",
                "all": 0,
                "answer": 0,
                "noanswer": 0
            }
        });

        res.status(200);
    })
}


//reports queues
{
app.get('/api/admin/reports/queues', (req, res)=>{
    res.json({
        "1999": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": [
                {
                    "number": "1002",
                    "lastcall": "11052",
                    "dynamic": "no",
                    "status": "Not in use"
                }
            ]
        },
        "8088": {
            "calls": "0",
            "strategy": "linear",
            "holdtime": "13s",
            "talktime": "81s",
            "answered": "9",
            "unanswered": "2",
            "servicelevel": "100.0%",
            "member": [
                {
                    "number": "1200",
                    "lastcall": "no call",
                    "dynamic": "no",
                    "status": "Unavailable"
                },
                {
                    "number": "1001",
                    "lastcall": "no call",
                    "dynamic": "no",
                    "status": "Unavailable"
                },
                {
                    "number": "1002",
                    "lastcall": "11052",
                    "dynamic": "no",
                    "status": "Not in use"
                }
            ]
        },
        "9003": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9004": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9005": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9006": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9007": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9010": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9011": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        },
        "9012": {
            "calls": "0",
            "strategy": "ringall",
            "holdtime": "0s",
            "talktime": "0s",
            "answered": "0",
            "unanswered": "0",
            "servicelevel": "0.0%",
            "member": []
        }
    });
});



app.get('/api/admin/reports/queues/chart/servicelevel', (req, res)=>{
    res.json({
        "1999": 0,
        "8088": 100,
        "9003": 0,
        "9004": 0,
        "9005": 0,
        "9006": 0,
        "9007": 0,
        "9010": 0,
        "9011": 0,
        "9012": 0
    });

    res.status(200);
});

app.get('/api/admin/reports/queues/chart/time', (req, res)=>{
res.json({
    "1999": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "8088": {
        "holdtime": "13s",
        "talktime": "81s"
    },
    "9003": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9004": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9005": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9006": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9007": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9010": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9011": {
        "holdtime": "0s",
        "talktime": "0s"
    },
    "9012": {
        "holdtime": "0s",
        "talktime": "0s"
    }
}
);

res.status(200);
});

app.get('/api/admin/reports/queues/chart/calls', (req, res)=>{
    res.json({
        "1999": {
            "answered": "0",
            "unanswered": "0"
        },
        "8088": {
            "answered": "9",
            "unanswered": "2"
        },
        "9003": {
            "answered": "0",
            "unanswered": "0"
        },
        "9004": {
            "answered": "0",
            "unanswered": "0"
        },
        "9005": {
            "answered": "0",
            "unanswered": "0"
        },
        "9006": {
            "answered": "0",
            "unanswered": "0"
        },
        "9007": {
            "answered": "0",
            "unanswered": "0"
        },
        "9010": {
            "answered": "0",
            "unanswered": "0"
        },
        "9011": {
            "answered": "0",
            "unanswered": "0"
        },
        "9012": {
            "answered": "0",
            "unanswered": "0"
        }
    }
    );
    res.status(200);
});

}

//reports bills
{
    app.post('/api/admin/reports/bill/groups', (req, res)=>{
        console.log(req.body);
        
    res.json(  
        {
            "0": {
                "1002": {
                    "number": 1002,
                    "mobile": 136020,
                    "urbanCall": 108816,
                    "intercityCall": 95214,
                    "abonmah": 200,
                    "sum": 340250
                }
            },
            "1": {
                "1011": {
                    "number": 1011,
                    "mobile": 116.7,
                    "urbanCall": 93.3,
                    "intercityCall": 81.7,
                    "abonmah": 200,
                    "sum": 491.7
                }
            },
            "all": {
                "mobile": 136136.7,
                "urbanCall": 108909.3,
                "intercityCall": 95295.7,
                "abonmah": 200,
                "sum": 340541.7
            }
        }
    );
    });
    
}


///reports- operator
{

app.get('/api/admin/report/operators', (req, res)=>{

    console.log('/api/admin/report/operators');
res.json([
        {
            id:'4',
            name:'مسعود فصاحت',
            phonenumber:'9993',
        },
        {
            id:'4',
            name:'ali t',
            phonenumber:'1002',
        },
        {
            id:'4',
            name:'مسعود فصاحت',
            phonenumber:'9993',
        },
        {
            id:'4',
            name:'ali t',
            phonenumber:'1002',
        },
        {
            id:'4',
            name:'مسعود فصاحت',
            phonenumber:'9993',
        },
        {
            id:'4',
            name:'ali t',
            phonenumber:'1002',
        },
        {
            id:'4',
            name:'مسعود فصاحت',
            phonenumber:'9993',
        },
        {
            id:'4',
            name:'ali t',
            phonenumber:'1002',
        },

    ]);
    res.status = 200;

})

app.get('/api/admin/report/operators/:id', (req, res)=>{
    console.log('/api/admin/report/operators/'+req.params.id);
    res.json({
                "name": "مسعود فصاحت",
                "phonenumber": 9993,
                "date_login": "1398/02/17 13:01:22",
                "date_logout": "1398/02/17 13:06:54",
                "detail": {
                "time": 0,
                "avg": 12,
                "all": 100,
                "answer": 59,
                "noanswer": 41,
                "performance": 40
            }
        },);
});


app.get('/api/admin/report/operators/performance/:id', (req, res)=>{
    console.log('/api/admin/report/operators/performance/'+req.params.id);
    res.json({
                "time": 40183,
                "avg": 225.7,
                "all": 1654,
                "answer": 1432,
                "noanswer": 222,
                "performance": 86.6
                }
                );
});



app.post('/api/admin/report/operators/performance/todate/:id', (req, res)=>{
    console.log('/api/admin/report/operators/todate/'+req.params.id);
    res.json({
                "time": 40183,
                "avg": 225.7,
                "all": 1654,
                "answer": 1432,
                "noanswer": 222,
                "performance": 86.6
            }
            );

    res.status = 200;
});


app.get('/api/admin/report/operators/performance/month/:id', (req, res)=>{
    console.log('/api/admin/report/operators/todate/'+req.params.id);
    res.json({
                "time": 40183,
                "avg": 225.7,
                "all": 1654,
                "answer": 1432,
                "noanswer": 222,
                "performance": 86.6
            }
            );

    res.status = 200;
});



}
//queues
{
    app.get('/api/admin/report/operators', (req, res)=>{

        console.log('/api/admin/report/operators');
    res.json([
            {
                
            }
        ]);
        res.status = 200;
    
    });
}
//reports bll
{
    app.get('/api/admin/reports/bill', (req, res)=>{
        res.json({   
        });
        });


    app.post('/api/admin/reports/bill/extensions/:id', (req, res)=>{
        res.json({   
            "number": 1002,
            "mobile": 136020,
            "urbanCall": 108816,
            "intercityCall": 95214,
            "abonmah": 200,
            "sum": 340250
        });
    });
    app.post('/api/admin/reports//bill/group/:id', (req, res)=>{
        res.json({   
            "number": 1002,
            "mobile": 136020,
            "urbanCall": 108816,
            "intercityCall": 95214,
            "abonmah": 200,
            "sum": 340250
        });
    });

    app.post('/api/admin/reports//bill/groups', (req, res)=>{
        res.json({
            "0": {
                "1002": {
                    "number": 1002,
                    "mobile": 136020,
                    "urbanCall": 108816,
                    "intercityCall": 95214,
                    "abonmah": 200,
                    "sum": 340250
                }
            },
            "1": {
                "1011": {
                    "number": 1011,
                    "mobile": 116.7,
                    "urbanCall": 93.3,
                    "intercityCall": 81.7,
                    "abonmah": 200,
                    "sum": 491.7
                }
            },
            "all": {
                "mobile": 136136.7,
                "urbanCall": 108909.3,
                "intercityCall": 95295.7,
                "abonmah": 200,
                "sum": 340541.7
            }
        });
    });


}




 function randBetween(start , end , wantInt){

     return (wantInt)? 
                    Math.floor(Math.random() * (end - start + 1) + start)
                  : Math.random() * (end - start + 1) + start ;
 }