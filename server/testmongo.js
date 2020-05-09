const mongo = require('./mongodb')

const myobj =  [
    { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
    { name: 'Google', url: 'https://www.google.com', type: 'en'},
    { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
];

mongo('t_test',(m,d)=>{
    m.collection('t_test').find({name:'菜鸟工具'}).toArray(function(err,res){
        if(err) throw err
        console.log('查询到的结果为---------',res)
        d.close()
    })
})