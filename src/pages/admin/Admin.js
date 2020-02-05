import React ,{Component} from 'react';
import LeftNav from "../../components/left-nav";
import HeaderNav from "../../components/headerNav";
import { Layout } from 'antd';
import './index.less'
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
                    <Content style={{backgroundColor:'#fff'}}>Content</Content>
                    <Footer style={{textAlign:'center',fontSize:"25px"}}>版权所有 Create 2020 -------From:Mr.shen</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin