import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon, Typography, Row, Avatar, Col } from 'antd'
import { withRouter, NavLink } from 'react-router-dom'

const { Title } = Typography

class NavBar extends Component {
    /*
    state = {
        current: this.props.pathname
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        })
    }*/
    render () {
        const {authedUser, users } = this.props
        return (
            <Fragment>
            <Row type='flex' justify='end'>
                <Avatar size='large' src={users[authedUser].avatarURL} />


                <Title>{users[authedUser].name}</Title>
            </Row>
            <Row>
            <Menu onClick={this.handleClick} selectedKeys={[this.props.pathname]} mode="horizontal">
                <Menu.Item  key='home'>
                    <NavLink to="/home">
                        <Icon type="home"/>
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="new">
                    <NavLink to="/new">
                        <Icon type="plus"/>
                        New Quesion
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="leaderboard">
                    <NavLink to='/leaderboard'>
                        <Icon type="ordered-list" />
                        Leaderboard
                    </NavLink>
                </Menu.Item>
            </Menu>
            </Row>
            </Fragment> 
        )
    }
}

export default withRouter(NavBar)

