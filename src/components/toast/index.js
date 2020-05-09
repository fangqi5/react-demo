import { message } from 'antd';

message.config({
    maxCount: 1,
});

const messageComponent = {
    success:(text,delay = 3) => {
        message.success(text,delay);
    },
    error:(text,delay = 3) => {
        message.error(text,delay);
    },
    warning:(text,delay = 3) => {
        message.warning(text,delay);
    },
    info:(text,delay = 3) => {
        message.info(text,delay);
    }
}

export default messageComponent 