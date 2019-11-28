import Mock from 'mockjs'

//属性值是字符串
const stringData = Mock.mock({ 'list|2':[{ stringData:'111' }] })
//属性值是数字
const numberData = Mock.mock({ 'list|2':[{ numberData:1 }] })
//属性值是布尔值
const boolData = Mock.mock({ 'list|2':[{ boolData:true }] })
//属性值是对象
const objectData = Mock.mock({ 'list|2':[{ objectData:{ num:1,city:'beijing' } }] })
//属性值是数组
const arrayData = Mock.mock({ 'list|2':[{ arrayData:[] }] })
//属性值是函数
const functionData = Mock.mock({ 'list|2':[{ functionData:function(){ return '{}' } }] })
//属性值是函数
const regexpData = Mock.mock({ 'list|2':[{ regexpData:/[a-z][A-Z][0-9]/ }] })
//使用占位符
const dpdData = Mock.mock({ 'list|2':[{ dpdData: '@FIRST' }] }) 
//使用模板
const template = [{
    title:'111',
    id:2,
    bool:false,
    list:[] ,
    regexp:/[a-z][A-Z][0-9]/ ,
    name:'@string'
}]
const templateData = Mock.mock({ 'list|2':template })
//使用自定义占位符
Mock.Random.extend({
    constellation: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    // constellation : function() {
    //     var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    //     return this.pick(constellations)
    // }
})
const personalData = Mock.mock({ 'list|2':[{personalData:'@constellation'}] })


const data = [ stringData,numberData,boolData,objectData,arrayData,functionData,regexpData,dpdData,templateData,personalData ]

console.log(data,personalData)


export default data