import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import logo from "../../assets/images/logo.png"
import { Menu, Icon} from 'antd';

const {SubMenu} = Menu;

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link className="left-nav-header" to="/login">
                    <img src={logo} alt=""/>
                    <h1>净阅后台</h1>
                </Link>

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home"/>
                        <span>首页</span>
                    </Menu.Item>

                    <Menu.SubMenu
                        key="sub1"
                        title={
                            <span>
                              <Icon type="appstore"/>
                              <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Icon type="unordered-list"/>
                            <span>品类管理</span>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <Icon type="android"/>
                            <span>商品管理</span>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="4">
                        <Icon type="user"/>
                        <span>用户管理</span>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Icon type="reddit"/>
                        <span>角色管理</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                              <Icon type="block"/>
                              <span>图形管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">
                            <Icon type="bar-chart"/>
                            <span>柱形图</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="line-chart"/>
                            <span>折线图</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="pie-chart"/>
                            <span>饼图</span>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        )
    }
}

export default LeftNav