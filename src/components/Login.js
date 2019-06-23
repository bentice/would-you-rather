import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { Icon, Avatar, Button, Radio, Row, Form } from 'antd'
import { Link } from 'react-router-dom'


class Login extends Component {

    state = {
        selectedUser: ''
    }

    handleSelectUser = (e) => {
        e.preventDefault()

        const selectedUser = e.target.value
        this.setState({
            selectedUser
        })
        
    }

    handleUserLogin () {
        const { dispatch }  = this.props
        const { selectedUser } = this.state
        dispatch(handleLogin(selectedUser))
    }
    
    render () {
        const { selectedUser } = this.state
        const { users, userIds} = this.props
        console.log("currentState", this.state)
        console.log("selectedUser", selectedUser)
        return (
            <Fragment>
                <Form onSubmit={this.handleUserLogin}>
                    <Row>
                        {userIds.map(id=>(
                            <Form.Item value={id}>
                                <Button size="large" key={id} onClick={this.handleSelectUser}>
                                    <Avatar src={users[id].avatarURL} size="large" />
                                </Button>
                            </Form.Item>
                        ))}
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button shape="round" size="large" htmlType="submit" href="/home">
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