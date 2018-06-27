
//------------------------------------在node中使用redis----跟命令行中使用一样（例如下面三种使用）---------------------
const redis = require("redis");
const client = redis.createClient(6379, "localhost");//链接数据库  6379:服务器端口
client.on("error", function (err) {
    console.log(err);
});

// 相当与命令行中的 set home beijing
// client.set("home", "beijing", (err, result) => {
//     console.log(result, err);
// });

// 相当于命令行中的 hmset p1 username zgf age 5
// client.hmset("p1", "username", "zgf", "age", "5", (err, result) => {
//     console.log(result, err);
// });

// 相当与命令行中的 hgetall p1
client.hgetall("p1",(err,result)=>{
    console.log(result, err);
});