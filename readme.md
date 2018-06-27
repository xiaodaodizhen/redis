##  三大数据库
- mysql 关系型数据库，存的是表，表里存的是记录行  读 写 1000/s
- mongodb 非关系型数据库，存的是集合，集合里存的是文档
- redis   key-value 数据库   读 110000/s  写 81000/s
      - 功能1 ：集中式会话管理（存用户名密码）
      - 功能2 : 缓存管理  （将页面缓存在这里，多并发的时候直接在本数据库中取，而不是去重新请求相关数据的服务器）


## redis配置文件redis.windows.conf（可以进行自定义配置）
 - redis-server redis.windows.conf  启动redis服务
 - redis-cli   启动客户端

 -  获取配置项，config get 配置参数（port）   例如：config get prot 
 - redis-cli -h 127.0.0.1主机名 -p 6379端口


 ## 设置字段值、获取字段值
 - set name(字段名) xg(字段值)
 - get name（字段名）
 - type name    获取name 值的数据类型 String

 - getrange name 0 1   获取字段值的子字符串（根据后面的开始0 和结束1 来决定取字段值的第几个字符到第几个字符，包前又包后）

 ## 递增
- incr age     默认递增1
- incrby age 3     递增值自己设置


## 递减
 - decr age      默认递减1
 - decrby age 3    递减值自己设置

## 查看 某个键（key）是否存在
 - exists age

## 删除 某个键（key）
- del age

## 页面缓存
- set homepage（缓存名称） index.html  // 设置页面缓存
- get homepae     // 获取缓存页面
- expire homepage 10   // 设置缓存生命时长
- ttl homepage   // 获取剩余时长


#----------------哈希值  ：是一个字符串的key和值的映射表，适合用于储存对象
- hset user(对象名) name(对象属性) xx(对象属性值)  设置user对象name属性的name值
- hmset user name xx age 9   设置user对象多个属性值
- hget user name   获取对象user 的name属性的值

- hgetall user   获取user对象所有属性及对应的值


- hdel user name  删除user对象的name属性值
- hkeys user 获取user 对象的所有属性（keys）

#--------------- 列表 ：简单的字符串列表，按照插入顺序排序，可以添加一个元素到列表的头部（左边），或者尾部（右边）

--------------- ids 是自定义的列表名称，可以随时替换

- lpush ids 2  在左侧插入2
- rpush ids 1  在右侧插入1

- lpop ids   从左边删除一个
- rpop ids   从右边删除一个

- lrem ids 0 3   从左边开始删除  0 代表是删除全部  3是代表删除的内容  例如：（lrem ids 2 3 代表从左边开始删除，两个3）---备注 ： 没有lrem命令，只有lrem

- lrange ids 0 -1 查看ids列表的区间在0 到-1的值 ------  (-1 是指的从后开始的第一个)

- lindex ids 0   查看索引为0 的值

- llen ids 查看列表长度