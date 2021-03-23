const Koa = require('koa');

const app = new Koa();//实例化

app.listen(3000, () => {
    console.log('启动成功')
});