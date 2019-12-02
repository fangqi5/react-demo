import Mock from 'mockjs'

const template = [{
    'year':'@date',
    'value|1-10.1-2':1
}]

const data = Mock.mock({ 'data|6':template })

export default data