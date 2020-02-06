import React ,{Component} from 'react';
import LeftNav from "../../components/left-nav";
import HeaderNav from "../../components/headerNav";
import { Layout } from 'antd';
import './index.less'
import {Route,Redirect,Switch} from 'react-router-dom'
import Home from "../home/home"
import Category from "../category/category";
import Product from "../product/product";
import User from "../user/user";
import Role from "../role/role";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
const { Footer, Sider, Content } = Layout;


class Admin extends Component {
    render(){
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <HeaderNav/>

                    <Content style={{backgroundColor:'#fff'}}>
                        <Switch>
                            <Route  path="/home" component={Home}/>
                            <Route  path="/category" component={Category}/>
                            <Route  path="/product" component={Product}/>
                            <Route  path="/user" component={User}/>
                            <Route  path="/role" component={Role}/>
                            <Route  path="/charts/bar" component={Bar}/>
                            <Route  path="/charts/line" component={Line}/>
                            <Route  path="/charts/pie" component={Pie}/>
                            {/*<Redirect to="/home"/>*/}
                        </Switch>
                    </Content>

                    <Footer style={{textAlign:'center',fontSize:"25px"}}>版权所有 Create 2020 -------From:Mr.shen</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin