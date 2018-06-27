//----------------------------redis 事务（其实就是一个打包的批量脚本执行，但批量指令并非原子化的操作，中间某条指令的失败不会导致前面已做指令的回滚，也不会造成后续的指令不做）-------------------

const redis = require("redis");
const client = redis.createClient(6379, "localhost");
client.MULTI().set("k3", "v3").set("k2", "v2").get("k2").exec(function (err, result) {
    console.log(err, result);
});