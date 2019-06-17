import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'
import { Row } from 'antd'

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
        return (
            <Row>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item  key='dashboard'>
                        <Icon type="home"/>
                        Home
                    </Menu.Item>
                    <Menu.Item key="new">
                        <Icon type="plus"/>
                        New Quesion
                    </Menu.Item>
                    <Menu.Item key="leaderboard">
                        <Icon type="ordered-list" />
                        Leaderboard
                    </Menu.Item>
                </Menu>
            </Row>
        )
    }
}

export default NavBar

