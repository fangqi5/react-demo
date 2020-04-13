import React,{Component} from 'react';
// import styles from './index.scss';
import PropTypes from 'prop-types'
import { Calendar, Col, Row, Badge } from 'antd';
export default  class Schedule extends Component{
    constructor(props){
        super(props);
    }

    onPanelChange=(values, mode) =>{
        console.log('value',values, mode);
    }

    prevMonth = (onChange,values,currentMonth,curYear) =>{
        console.log(currentMonth,curYear)
        // newValue.month(parseInt(selectedMonth - 1, 10));
        if(currentMonth > 0){
            onChange(values.month(parseInt(currentMonth - 1), 10),'month');
        }else{
            onChange(values.year(parseInt(curYear - 1, 10)),'year');
            onChange(values.month(parseInt(11, 10)) ,'month');
        }
        
    }

    getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 1:
            listData = [
              { type: "warning", content: "This is warning event." },
              { type: "success", content: "This is usual event." }
            ];
            break;
          case 10:
            listData = [
              { type: "warning", content: "This is warning event." },
              { type: "success", content: "This is usual event." },
              { type: "error", content: "This is error event." }
            ];
            break;
          case 15:
            listData = [
              { type: "warning", content: "这是警告信息" },
              { type: "success", content: "这是一个很长的成功信息，很长很长很长..." },
              { type: "error", content: "This is error event 1." },
              { type: "error", content: "This is error event 2." },
              { type: "error", content: "This is error event 3." },
              { type: "error", content: "This is error event 4." }
            ];
            break;
          default:
        }
        return listData || [];
      }

    dateCellRender = (value) => {
        const listData = this.getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      }

    nextMonth = (onChange,values,currentMonth,curYear) => {
        console.log(currentMonth,curYear)
        // newValue.month(parseInt(selectedMonth - 1, 10));
        if(currentMonth < 11){
            onChange(values.month(parseInt(currentMonth + 1), 10) ,'month');
        }else{
                onChange(values.year(parseInt(curYear + 1, 10)) ,'year');
                onChange(values.month(parseInt(0, 10)) ,'month');
        }
    }

    render(){

        const modules = (
            <Calendar
                fullscreen={false}
                headerRender={({ value,  onChange, }) => {
                    // console.log('11',value)
                    // console.log('222',type)
                    // console.log('333',onChange)
                    // console.log('444',onTypeChange)
                    // const start = 0;
                    // const end = 12;
                    // const monthOptions = [];

                    // const current = value.clone();
                    // const localeData = value.localeData();
                    // const months = [];
                    // console.log(value.year())
                    // for (let i = 0; i < 12; i++) {
                    //     current.month(i);
                    //     months.push(localeData.monthsShort(current));
                    // }
                    // for (let index = start; index < end; index++) {
                    // monthOptions.push(
                    //     <Select.Option className="month-item" key={`${index}`}>
                    //     {months[index]}
                    //     </Select.Option>,
                    // );
                    // }
                    // const month = value.month();

                    // console.log(type,onTypeChange)
                    // const year = value.year();
                    // const options = [];
                    // for (let i = year - 10; i < year + 10; i += 1) {
                    // options.push(
                    //     <Select.Option key={i} value={i} className="year-item">
                    //     {i}
                    //     </Select.Option>,
                    // );
                    // }
                    return (
                    <div style={{ padding: 10 }}>
                        <Row type="flex" justify="space-between">
                            <Col>
                                <div onClick={()=>this.prevMonth(onChange,value,parseInt(value.month(), 10),parseInt(value.year(), 10))}>prev</div>
                            </Col>
                            <Col>
                                <div>{value.format('YYYY MMMM')}</div>
                            </Col>
                            <Col>
                                <div onClick={()=>this.nextMonth(onChange,value,parseInt(value.month(), 10),parseInt(value.year(), 10))}>next</div>
                            </Col>
                        </Row>
                    </div>
                    );
                }}
                dateCellRender={this.dateCellRender}
                onPanelChange={this.onPanelChange}
            />	
        )
        return modules;
    }
}


Schedule.propTypes = {
    location:PropTypes.object
}
