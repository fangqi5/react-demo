import React, { Component } from 'react'
import { Upload,message } from 'antd';
import styles from './index.scss'
// import PropTypes from 'prop-types'



function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export class UploadFile extends Component {
    state = {
        loading: false,
        imageUrl:'https://static.fangqi5.top/images/微信图片_20200302090604.jpg',
        test:1
    };

    UNSAFE_componentWillMount(){
      this.setState({test:2})
    }
  
    componentDidUpdate(){
      console.log(this.state)
    }
    
    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
    };
    
      render() {
        const { imageUrl } = this.state;
        return (
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            <img src={imageUrl} className={styles['avatar']} alt="avatar" style={{ width: '60px',height:'60px',borderRadius:'50%' }} />
          </Upload>
        );
      }
    }

export default UploadFile
