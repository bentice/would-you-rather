import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { Icon, Avatar, Button, Col, Row, Form } from 'antd'
import 'antd/dist/antd.css'

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

        const styles={
            formStyle:{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'space-around'
            }
        }

        return (
                <Form style={styles.formStyle} onSubmit={()=>this.handleUserLogin(selectedUser)}>
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            {userIds.map(id=>(
                                <Button style={{width: 400, height: 400}} shape="circle" type='ghost' value={id} onClick={this.handleSelectUser}>
                                    <Avatar style={{width: '97%', height: '97%'}} src={users[id].avatarURL} size="large" />
                                </Button>
                            ))}
                        </div>
                    <Form.Item key='form'>
                        <Button disabled={selectedUserBool} shape="round" size="large" htmlType="submit">
                                    Login
                        </Button>
                    </Form.Item>
                </Form>
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