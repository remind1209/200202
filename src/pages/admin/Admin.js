import React ,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {message} from 'antd';
import memoryUtils from '../../utils/memoryUtils';


class Admin extends Component {

    render(){
        let user = memoryUtils.user;
        if(user.username == 1111){
                message.error('用户名被封杀~');
                return <Redirect to="/login" />
        }
        return (
            <div className="div">
                <p className="p">你好：{ user.username}</p>
            </div>
        )
    }
}

export default Admin