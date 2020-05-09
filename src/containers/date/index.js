//根据本地时间，处理周一到周日的时间
getDate = () => {
    let date = new Date()
    let arr = ['周日','周一', '周二', '周三', '周四', '周五', '周六']
    let second_days = date.getFullYear()%4 === 0 ? 29 : 28 
    let days = [31,second_days,31,30,31,30,31,31,30,31,30,31]
    let cur_week = []
    let cur_year = date.getFullYear()
    let cur_date = date.getDate()
    let cur_day = date.getDay()
    let cur_month = date.getMonth()
    //取周一到当天的数据
    for(let j=0;j<cur_day;j++){
        let week_day = arr[cur_day - j]
        let curDay = cur_date - j
        let curMonth = cur_month
        if(curDay<1){
            //边界值1月处理
            if(cur_month - 1 < 0){
                curMonth = 12
                curDay += days[cur_month]
                if(cur_year === date.getFullYear()){
                    cur_year -= 1;
                }
            }else{
                curMonth = cur_month + 1
            }
        }else{
            curMonth = cur_month + 1
        }
        let day_info = {
            day:curMonth+'-'+curDay,
            week:week_day,
            year:cur_year,
            weekday:cur_day - j
        }
        if(j!==0&&week_day!=='周六'&&week_day!=='周日'){
            cur_week.push(day_info)
        }
    }
    cur_week = cur_week.reverse();
    //取当天到周五的数据
    for(let i=0;i<7-cur_day;i++){
        let curDate = cur_date + i
        let week_day = arr[cur_day + i]
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
        
        let day_info = {
            day:curMonth+'-'+curDate,
            week:week_day,
            year:cur_year,
            weekday:cur_day + i
        }
        if(week_day!=='周六'&&week_day!=='周日'){
            cur_week.push(day_info)
        }
    }
    console.log(cur_week)
    this.setState({cur_week,cur_month:cur_month+1})
}
