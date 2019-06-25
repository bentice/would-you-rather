import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { Icon, Avatar, Button, Radio, Row, Form } from 'antd'
import { Redirect } from 'react-router-dom'


class Login extends Component {

    state = {
        selectedUser: '',
        toHome: false,
    }

    handleSelectUser = (e) => {
        e.preventDefault()

        const selectedUser = e.target.value

        this.setState({
            selectedUser
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
        const { selectedUser } = this.state
        const { users, userIds} = this.props

        return (
            <Fragment>
                <Form onSubmit={()=>this.handleUserLogin(selectedUser)}>
                    <Row>
                        {userIds.map(id=>(
                            <Form.Item>
                                <Button size="large" key={id} value={id} onClick={this.handleSelectUser}>
                                    <Avatar src={users[id].avatarURL} size="large" />
                                </Button>
                            </Form.Item>
                        ))}
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button shape="round" size="large" htmlType="submit">
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