
 // ----------------------------------redis 的发布和订阅-----------------------------------------
const redis = require("redis");
const client1 = redis.createClient(6379, "localhost"); // 定义客户端1
const client2 = redis.createClient(6379, "localhost"); // 定义客户端2
// client1订阅
client1.subscribe("food");
client1.subscribe("drink");

// 监听客户端接收到订阅的频道发布的消息后的操作
client1.on("message", function (channel, message) {
    console.log(channel, message);
    client1.unsubscribe("food"); // 取消对food频道 的订阅
});


// client2发布
setTimeout(() => {
    client2.publish("food", "面包");
    client2.publish("drink", "咖啡");
    setTimeout(() => {
        client2.publish("food", "面包");
        client2.publish("drink", "咖啡");
    }, 1000);
}, 1000);