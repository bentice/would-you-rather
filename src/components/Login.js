import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { Icon, Avatar, Button, Col, Row, Form } from 'antd'

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
        const { dispatch, history }  = this.props
        dispatch(handleLogin(selectedUser))
        history.push('/home')
    }
    
    render () {
        const { selectedUser, selectedUserBool } = this.state
        const { users, userIds} = this.props

        return (
            <Fragment>
                <Form onSubmit={()=>this.handleUserLogin(selectedUser)}>
                    <Row type='flex' justify='center' align='middle'>
                        {userIds.map(id=>(
                            <Col span={1} key={id} >
                                <Form.Item>
                                    <Button shape="circle" type='ghost' value={id} onClick={this.handleSelectUser}>
                                        <Avatar src={users[id].avatarURL} size="large" />
                                    </Button>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row type='flex' justify='center'>
                        <Form.Item key='form'>
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