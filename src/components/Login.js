import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { Icon, Avatar, Button, Radio, Row, Form } from 'antd'
import { Link } from 'react-router-dom'


class Login extends Component {

    state = {
        selectedUser: '',
        toHome: false,
        selectedUserBool: true,
    }

    handleSelectUser = (e) => {
        e.preventDefault()

        const selectedUser = e.target.value

        this.setState({
            selectedUser,
            selectedUserBool: false
        })
        
    }

    handleUserLogin (selectedUser) {
        const { dispatch }  = this.props
        dispatch(handleLogin(selectedUser))

        this.setState(()=>({
            toHome: true
        }))
    }
    
    render () {
        const { selectedUser, toHome, selectedUserBool } = this.state
        const { users, userIds} = this.props

        return (
            <Fragment>
                <Form onSubmit={()=>this.handleUserLogin(selectedUser)}>
                    <Row type='flex' justify='center'>
                        {userIds.map(id=>(
                            <Form.Item>
                                <Button size='large' key={id} value={id} onClick={this.handleSelectUser}>
                                    <Avatar size='large' src={users[id].avatarURL} size="large" />
                                </Button>
                            </Form.Item>
                        ))}
                    </Row>
                    <Row type='flex' justify='center'>
                        <Form.Item>
                            <Button disabled={selectedUserBool} shape="round" size="large" htmlType="submit">
                                    Login
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Fragment>
        )
    }
}



function mapStateToProps ({ users }) {

    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)