import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form, Typography, Avatar } from 'antd'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'


const { Text } = Typography
const { TextArea } = Input

class CreateNewQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome: false,
    }

    handleSubmit = (e) =>{

        e.preventDefault()

        const { dispatch, authedUser } = this.props
        const { optionOneText, optionTwoText } = this.state
        const author = authedUser
        
        dispatch(handleAddQuestion({ optionOneText, optionTwoText, author}))

        this.setState(()=>({
            optionOneText:'',
            optionTwoText:'',
            toHome:true
        }))
    }

    handleOptionOneText = (e) => {
        const optionOneText = e.target.value
        this.setState({
            optionOneText
        })
    }

    handleOptionTwoText = (e) => {
        const optionTwoText = e.target.value
        this.setState({
            optionTwoText
        })
    }

    render () {
        const { authedUser , users} = this.props

        if(this.state.toHome===true){
            return <Redirect to="/home" />
        }

        return (
            <div>
                <div style={{ margin: '24px 0' }} />
                <div >
                    <Avatar src={users[authedUser].avatarURL} />
                    <br />
                    <Text>{authedUser} wants to know would you rather...?</Text>
                </div>
                <Form layout={'horizontal'} onSubmit={this.handleSubmit}>
                    <Form.Item label="Option One">
                        <TextArea placeholder="Option One" value={this.state.optionOneText} onChange={this.handleOptionOneText} autosize allowclear/>
                    </Form.Item>
                    <div style={{ margin: '24px 0' }} />
                    <Form.Item label="Option Two">
                        <TextArea placeholder="Option Two" value={this.state.optionTwoText} onChange={this.handleOptionTwoText} autosize allowclear/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            New Question!
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(CreateNewQuestion)