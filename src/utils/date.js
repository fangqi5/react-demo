const date = ()=>{
    let date = new Date()
    let arr = ['周日','周一', '周二', '周三', '周四', '周五', '周六']
    let second_days = date.getFullYear()%4 === 0 ? 29 : 28 
    let days = [31,second_days,31,30,31,30,31,31,30,31,30,31]
    let day_info = []
    let cur_year = date.getFullYear()
    let cur_date = date.getDate()
    let cur_day = date.getDay()
    let cur_month = date.getMonth()
    for(let i=0;i<6;i++){
        let curDate = cur_date + i
        let week_day
        week_day = arr[(cur_day+i)%7]
        let curMonth = cur_month + 1
        if(curDate>days[cur_month]){
            curDate -= days[cur_month]
            if(curMonth +1  > 11){
                curMonth = 1
                if(cur_year === date.getFullYear()){
                    cur_year += 1;
                }
            }else{
                curMonth += 1
            }
        }
        let list = {
            day:cur_year +'-'+ curMonth+'-'+curDate,
            week:week_day,
            day_text:selectText(i,week_day) + curMonth+'月'+curDate+'日'
        }
        day_info.push(list)
    }
    return day_info
}

const selectText = (value,week_text) => {
    let text
    switch(value){
        case 0:
        text = '今天'
        break;
        case 1:
        text = '明天'
        break;
        case 2:
        text = '后天'
        break;
        default:text = week_text
    }
    return text
}

export default date