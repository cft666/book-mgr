const mongoose = require('mongoose');

//给哪个数据库的
//哪个集合
//添加什么格式的文档

//schema 映射了MongoDB下的一个集合，并且内容就是集合下的文档构成
//modal 可以理解成是根据schema生成的一套方法集合，这套方法来操作MongoDB下的集合和集合下的文档

const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModel = mongoose.model('User',UserSchema);


const connect = () => {
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
    //当数据库被打开的时候做一些事情
    mongoose.connection.on('open', () => {
        console.log('连接成功');
    });
    //创建文档
    const user = new UserModel({
        nickname:'小米',
        password:'123456',
        age:12,
    })
    //保存同步到mongodb
    user.save();
};

connect();