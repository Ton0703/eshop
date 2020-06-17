const mongoose = require('mongoose')

module.exports =  {
    connect(){
        return mongoose.connect('mongodb://127.0.0.1:27017/shop', {
            name: '',
            pass: '',
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log('数据库连接成功')
        })
    }
}

