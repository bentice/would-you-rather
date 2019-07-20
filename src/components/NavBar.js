import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon, Typography, Row, Avatar, Button } from 'antd'
import { withRouter, NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/authedUser'
import { connect } from 'react-redux'


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

    handleLogoutClick = e => {
        const { dispatch } = this.props
        dispatch(handleLogout())
    }

    render () {
        const {authedUser, users } = this.props

        if(this.props.location.pathname==='/'){
            return <div></div>
        }

        return (
            <Fragment>
            <Row type='flex' justify='end'>
                <Avatar size={100} src={users[authedUser].avatarURL} />
                <Title>{users[authedUser].name}</Title>

            </Row>
            <Row type='flex' justify='end'>
                <Button onClick={this.handleLogoutClick}>{authedUser==='vader' ? "Leave The Darkside" : "Logout"}</Button>
            </Row>
            <Row>
            <Menu onClick={this.handleClick} selectedKeys={[this.props.pathname]} mode="horizontal">
                <Menu.Item  key='home'>
                    <NavLink to="/home">
                        <Icon type="home"/>
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="add">
                    <NavLink to="/add">
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

function mapStateToProps({users, authedUser}){
    return {
        users,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))

