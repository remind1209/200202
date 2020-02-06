import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import logo from "../../assets/images/logo.png"
import {Menu, Icon} from 'antd';
import menuList from '../../config/menuConfig'

const {SubMenu} = Menu;

class LeftNav extends Component {
    getMenuList = (menuList) => {
        return menuList.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <Menu.SubMenu
                        key={item.key}
                        title={
                        <span>
                          <Icon type={item.icon}/>
                          <span>{item.title}</span>
                        </span>
                        }
                    >
                        {this.getMenuList(item.children)}
                    </Menu.SubMenu>
                )
            }
        })
    }

    render() {
        return (
            <div className="left-nav">
                <Link className="left-nav-header" to="/login">
                    <img src={logo} alt=""/>
                    <h1>净阅后台</h1>
                </Link>

                <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline">
                    {
                        this.getMenuList(menuList)
                    }
                </Menu>
            </div>
        )
    }
}

export default LeftNav