import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon, Typography } from 'antd'
import { Row } from 'antd'
import { withRouter, Link } from 'react-router-dom'

const { Title } = Typography

class NavBar extends Component {
    state = {
        current: 'dashboard'
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        })
    }
    render () {

        if(this.props.location.pathname==='/' ){
            return <Title>Would You Rather App</Title>
        }

        return (
            <Row>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item  key='dashboard'>
                    <Icon type="home"/>
                    Home
                    <Link to="/"/>
                </Menu.Item>
                <Menu.Item key="new">
                    <Icon type="plus"/>
                    New Quesion
                    <Link to="/new"/>
                </Menu.Item>
                <Menu.Item key="leaderboard">
                    <Icon type="ordered-list" />
                    Leaderboard
                    <Link to='/leaderboard'/>
                </Menu.Item>
            </Menu>
        </Row>
        )
    }
}

export default withRouter(NavBar)

